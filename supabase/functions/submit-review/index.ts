import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Simple in-memory rate limiting (resets on function restart)
const rateLimit = new Map<string, { count: number; resetAt: number }>()

const RATE_LIMIT_MAX = 5 // Max 5 reviews per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in ms

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown'
    
    const now = Date.now()
    
    // Check rate limit
    const limit = rateLimit.get(clientIP)
    if (limit && limit.resetAt > now) {
      if (limit.count >= RATE_LIMIT_MAX) {
        console.log(`Rate limit exceeded for IP: ${clientIP}`)
        return new Response(
          JSON.stringify({ error: 'Too many reviews submitted. Please try again later.' }),
          { 
            status: 429, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }
      limit.count++
    } else {
      rateLimit.set(clientIP, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    }

    // Parse request body
    const { reviewer_name, rating, message } = await req.json()
    
    // Validate inputs
    if (!reviewer_name || typeof reviewer_name !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Reviewer name is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    if (!message || typeof message !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    if (typeof rating !== 'number' || rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      return new Response(
        JSON.stringify({ error: 'Rating must be an integer between 1 and 5' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    // Additional validation
    const trimmedName = reviewer_name.trim()
    const trimmedMessage = message.trim()
    
    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return new Response(
        JSON.stringify({ error: 'Name must be between 2 and 100 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    if (trimmedMessage.length < 10 || trimmedMessage.length > 1000) {
      return new Response(
        JSON.stringify({ error: 'Message must be between 10 and 1000 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Create Supabase client with service role for insert
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
    // Insert review
    const { data: reviewData, error: reviewError } = await supabase
      .from('reviews')
      .insert({
        reviewer_name: trimmedName,
        rating,
        message: trimmedMessage
      })
      .select()
      .single()
    
    if (reviewError) {
      console.error('Error inserting review:', reviewError)
      return new Response(
        JSON.stringify({ error: 'Failed to submit review' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    console.log(`Review submitted successfully by IP: ${clientIP}, review ID: ${reviewData.id}`)
    
    return new Response(
      JSON.stringify({ success: true, review: reviewData }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
    
  } catch (error) {
    console.error('Error in submit-review function:', error)
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
