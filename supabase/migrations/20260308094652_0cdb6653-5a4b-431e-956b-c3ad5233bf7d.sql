-- Fix 1: Restrict reviews INSERT to only allow 'pending' status
DROP POLICY IF EXISTS "Anyone can submit reviews" ON public.reviews;
CREATE POLICY "Anyone can submit pending reviews"
ON public.reviews FOR INSERT
WITH CHECK (status = 'pending');

-- Fix 2: Block direct inserts to contacts (edge function uses service role, bypasses RLS)
DROP POLICY IF EXISTS "Anyone can submit contact" ON public.contacts;
CREATE POLICY "No direct contact inserts"
ON public.contacts FOR INSERT
WITH CHECK (false);