
DROP POLICY IF EXISTS "Anyone can insert review media" ON public.review_media;

CREATE POLICY "Only service role can insert review media" 
ON public.review_media 
FOR INSERT 
WITH CHECK (false);
