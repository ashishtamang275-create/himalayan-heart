-- Create reviews table
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reviewer_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read reviews (public display)
CREATE POLICY "Anyone can read reviews" 
ON public.reviews 
FOR SELECT 
USING (true);

-- Allow anyone to insert reviews (public submissions)
CREATE POLICY "Anyone can submit reviews" 
ON public.reviews 
FOR INSERT 
WITH CHECK (true);

-- Create storage bucket for review media
INSERT INTO storage.buckets (id, name, public) VALUES ('review-media', 'review-media', true);

-- Allow anyone to upload to review-media bucket
CREATE POLICY "Anyone can upload review media" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'review-media');

-- Allow anyone to view review media
CREATE POLICY "Anyone can view review media" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'review-media');

-- Create review_media table to store media references
CREATE TABLE public.review_media (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  review_id UUID NOT NULL REFERENCES public.reviews(id) ON DELETE CASCADE,
  media_url TEXT NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('image', 'video')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on review_media
ALTER TABLE public.review_media ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read review media
CREATE POLICY "Anyone can read review media" 
ON public.review_media 
FOR SELECT 
USING (true);

-- Allow anyone to insert review media
CREATE POLICY "Anyone can insert review media" 
ON public.review_media 
FOR INSERT 
WITH CHECK (true);

-- Enable realtime for reviews
ALTER PUBLICATION supabase_realtime ADD TABLE public.reviews;