import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Allowed file types and max size
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
const ALLOWED_VIDEO_TYPES = ['video/mp4', 'video/quicktime', 'video/webm']
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

// In-memory rate limiting
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 10 // Max 10 uploads per hour per IP
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                     req.headers.get('x-real-ip') ||
                     'unknown'
    const now = Date.now()
    const limit = rateLimit.get(clientIP)
    if (limit && limit.resetAt > now) {
      if (limit.count >= RATE_LIMIT_MAX) {
        return new Response(
          JSON.stringify({ error: 'Too many uploads. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      limit.count++
    } else {
      rateLimit.set(clientIP, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    }
    const formData = await req.formData()
    const file = formData.get('file') as File | null
    const reviewId = formData.get('reviewId') as string | null

    // Validate review ID
    if (!reviewId || typeof reviewId !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Review ID is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    // Validate file exists
    if (!file) {
      return new Response(
        JSON.stringify({ error: 'No file provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return new Response(
        JSON.stringify({ error: 'File size exceeds 10MB limit' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Validate file type by MIME header first
    const isImage = ALLOWED_IMAGE_TYPES.includes(file.type)
    const isVideo = ALLOWED_VIDEO_TYPES.includes(file.type)
    
    if (!isImage && !isVideo) {
      return new Response(
        JSON.stringify({ error: 'Invalid file type. Only images (JPEG, PNG, WebP, GIF) and videos (MP4, QuickTime, WebM) are allowed' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Validate file content via magic bytes to prevent MIME spoofing
    const arrayBuffer = await file.arrayBuffer()
    const bytes = new Uint8Array(arrayBuffer)
    
    const magicByteValid = (() => {
      if (bytes.length < 12) return false
      // JPEG: FF D8 FF
      if (file.type === 'image/jpeg') return bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF
      // PNG: 89 50 4E 47
      if (file.type === 'image/png') return bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47
      // WebP: RIFF....WEBP
      if (file.type === 'image/webp') return bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 && bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50
      // GIF: GIF87a or GIF89a
      if (file.type === 'image/gif') return bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x38
      // MP4/QuickTime: ....ftyp (at offset 4)
      if (file.type === 'video/mp4' || file.type === 'video/quicktime') return bytes[4] === 0x66 && bytes[5] === 0x74 && bytes[6] === 0x79 && bytes[7] === 0x70
      // WebM: 1A 45 DF A3 (EBML header)
      if (file.type === 'video/webm') return bytes[0] === 0x1A && bytes[1] === 0x45 && bytes[2] === 0xDF && bytes[3] === 0xA3
      return false
    })()

    if (!magicByteValid) {
      return new Response(
        JSON.stringify({ error: 'File content does not match declared type. Upload rejected.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Create Supabase client with service role
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Verify the review exists
    const { data: reviewData, error: reviewError } = await supabase
      .from('reviews')
      .select('id')
      .eq('id', reviewId)
      .single()

    if (reviewError || !reviewData) {
      console.error('Review not found:', reviewId)
      return new Response(
        JSON.stringify({ error: 'Review not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Generate unique filename
    const fileExt = file.name.split('.').pop()?.toLowerCase() || 'bin'
    const fileName = `${reviewId}/${crypto.randomUUID()}.${fileExt}`

    // Upload to storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('review-media')
      .upload(fileName, file, {
        contentType: file.type,
        upsert: false
      })

    if (uploadError) {
      console.error('Storage upload error:', uploadError)
      return new Response(
        JSON.stringify({ error: 'Failed to upload file' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('review-media')
      .getPublicUrl(fileName)

    // Insert media record
    const mediaType = isImage ? 'image' : 'video'
    const { data: mediaData, error: mediaError } = await supabase
      .from('review_media')
      .insert({
        review_id: reviewId,
        media_url: urlData.publicUrl,
        media_type: mediaType
      })
      .select()
      .single()

    if (mediaError) {
      console.error('Error inserting media record:', mediaError)
      // Try to clean up the uploaded file
      await supabase.storage.from('review-media').remove([fileName])
      return new Response(
        JSON.stringify({ error: 'Failed to save media record' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log(`Media uploaded successfully: ${fileName}`)

    return new Response(
      JSON.stringify({ 
        success: true, 
        media: {
          id: mediaData.id,
          media_url: urlData.publicUrl,
          media_type: mediaType
        }
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error in upload-review-media function:', error)
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
