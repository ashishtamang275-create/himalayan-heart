DROP POLICY IF EXISTS "Anyone can submit pending reviews" ON public.reviews;
CREATE POLICY "No direct review inserts"
ON public.reviews FOR INSERT
WITH CHECK (false);