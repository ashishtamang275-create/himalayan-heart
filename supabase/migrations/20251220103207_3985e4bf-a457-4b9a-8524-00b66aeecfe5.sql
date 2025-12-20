-- Fix INPUT_VALIDATION: Add CHECK constraints for server-side validation

-- Reviewer name constraints
ALTER TABLE public.reviews 
ADD CONSTRAINT reviewer_name_length 
CHECK (char_length(reviewer_name) > 0 AND char_length(reviewer_name) <= 100);

ALTER TABLE public.reviews 
ADD CONSTRAINT reviewer_name_not_empty 
CHECK (trim(reviewer_name) != '');

-- Message constraints
ALTER TABLE public.reviews 
ADD CONSTRAINT message_length 
CHECK (char_length(message) > 0 AND char_length(message) <= 1000);

ALTER TABLE public.reviews 
ADD CONSTRAINT message_not_empty 
CHECK (trim(message) != '');

-- Rating constraint
ALTER TABLE public.reviews 
ADD CONSTRAINT rating_range 
CHECK (rating >= 1 AND rating <= 5);

-- Media type constraint
ALTER TABLE public.review_media 
ADD CONSTRAINT media_type_valid 
CHECK (media_type IN ('image', 'video'));

-- Fix MISSING_RLS: Add UPDATE and DELETE policies to prevent modifications

-- Reviews table policies
CREATE POLICY "Nobody can update reviews" 
ON public.reviews 
FOR UPDATE
USING (false);

CREATE POLICY "Nobody can delete reviews" 
ON public.reviews 
FOR DELETE
USING (false);

-- Review media table policies
CREATE POLICY "Nobody can update review media" 
ON public.review_media 
FOR UPDATE
USING (false);

CREATE POLICY "Nobody can delete review media" 
ON public.review_media 
FOR DELETE
USING (false);