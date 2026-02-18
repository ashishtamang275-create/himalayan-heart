import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// In-memory rate limiting (resets on function cold start)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 submissions per hour per IP
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// Validation helpers
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[+\d\s()\-]*$/;
  return phoneRegex.test(phone) && phone.length <= 20;
};

const isValidDate = (date: string): boolean => {
  if (!date) return true; // Date is optional
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(date);
};

const sanitizeString = (str: string, maxLength: number): string => {
  return str.trim().slice(0, maxLength);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('cf-connecting-ip') || 
                     'unknown';

    console.log(`[submit-contact] Request from IP: ${clientIP}`);

    // Rate limiting check
    const now = Date.now();
    const rateLimitEntry = rateLimit.get(clientIP);
    
    if (rateLimitEntry) {
      if (now < rateLimitEntry.resetAt) {
        if (rateLimitEntry.count >= RATE_LIMIT_MAX) {
          console.log(`[submit-contact] Rate limit exceeded for IP: ${clientIP}`);
          return new Response(JSON.stringify({ 
            error: 'Too many submissions. Please try again later.' 
          }), {
            status: 429,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
        rateLimitEntry.count++;
      } else {
        rateLimit.set(clientIP, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
      }
    } else {
      rateLimit.set(clientIP, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    }

    // Parse and validate request body
    const body = await req.json();
    const { name, email, phone, trek, groupSize, preferredDate, message, nationality, experience_level, planned_month } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return new Response(JSON.stringify({ 
        error: 'Name is required and must be at least 2 characters' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      return new Response(JSON.stringify({ 
        error: 'A valid email address is required' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return new Response(JSON.stringify({ 
        error: 'Message is required and must be at least 10 characters' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate optional fields
    if (phone && !isValidPhone(phone)) {
      return new Response(JSON.stringify({ 
        error: 'Invalid phone number format' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (preferredDate && !isValidDate(preferredDate)) {
      return new Response(JSON.stringify({ 
        error: 'Invalid date format. Use YYYY-MM-DD' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeString(name, 100),
      email: sanitizeString(email, 255).toLowerCase(),
      phone: phone ? sanitizeString(phone, 20) : null,
      trek: trek ? sanitizeString(trek, 100) : null,
      group_size: groupSize ? sanitizeString(groupSize, 50) : null,
      preferred_date: preferredDate || null,
      message: sanitizeString(message, 2000),
      nationality: nationality ? sanitizeString(nationality, 100) : null,
      experience_level: experience_level || null,
      planned_month: planned_month ? sanitizeString(planned_month, 20) : null,
    };

    console.log(`[submit-contact] Validated submission from: ${sanitizedData.email}`);

    // Create Supabase client with service role key for privileged access
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert contact into database
    const { data, error } = await supabase
      .from('contacts')
      .insert(sanitizedData)
      .select()
      .single();

    if (error) {
      console.error('[submit-contact] Database error:', error);
      return new Response(JSON.stringify({ 
        error: 'Failed to submit contact form. Please try again.' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log(`[submit-contact] Successfully created contact: ${data.id}`);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Contact form submitted successfully',
      id: data.id 
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[submit-contact] Error:', error);
    return new Response(JSON.stringify({ 
      error: 'An unexpected error occurred. Please try again.' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
