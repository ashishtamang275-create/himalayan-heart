-- Add moderation status to reviews table
ALTER TABLE public.reviews ADD COLUMN status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected'));

-- Update existing reviews to approved status
UPDATE public.reviews SET status = 'approved' WHERE status = 'pending';

-- Drop the existing SELECT policy and recreate to only show approved reviews
DROP POLICY IF EXISTS "Anyone can read reviews" ON public.reviews;
CREATE POLICY "Anyone can read approved reviews" ON public.reviews
  FOR SELECT USING (status = 'approved');

-- Create contacts table for contact form submissions
CREATE TABLE public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  trek TEXT,
  group_size TEXT,
  preferred_date DATE,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on contacts table
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contacts (public form)
CREATE POLICY "Anyone can submit contact" ON public.contacts
  FOR INSERT WITH CHECK (true);

-- Only service role can read contacts (admin only - no public access)
CREATE POLICY "Only service role can read contacts" ON public.contacts
  FOR SELECT USING (false);

-- No public updates or deletes on contacts
CREATE POLICY "Nobody can update contacts" ON public.contacts
  FOR UPDATE USING (false);

CREATE POLICY "Nobody can delete contacts" ON public.contacts
  FOR DELETE USING (false);