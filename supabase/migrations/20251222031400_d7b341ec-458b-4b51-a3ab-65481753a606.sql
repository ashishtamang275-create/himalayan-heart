-- Remove the public upload policy that allows anyone to upload
DROP POLICY IF EXISTS "Anyone can upload review media" ON storage.objects;

-- Only allow service role to upload (via Edge Functions with proper validation)
CREATE POLICY "Service role can upload review media" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'review-media' AND auth.jwt()->>'role' = 'service_role');