
-- Regions table
CREATE TABLE public.regions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL DEFAULT '',
  short_description TEXT NOT NULL DEFAULT '',
  hero_image_url TEXT,
  meta_title TEXT,
  meta_description TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.regions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read regions" ON public.regions FOR SELECT USING (true);
CREATE POLICY "No public insert on regions" ON public.regions FOR INSERT WITH CHECK (false);
CREATE POLICY "No public update on regions" ON public.regions FOR UPDATE USING (false);
CREATE POLICY "No public delete on regions" ON public.regions FOR DELETE USING (false);

-- Treks table (CMS-driven)
CREATE TABLE public.treks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  region_id UUID REFERENCES public.regions(id),
  short_description TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  duration_days INTEGER NOT NULL DEFAULT 1,
  difficulty TEXT NOT NULL DEFAULT 'Moderate',
  max_altitude_m INTEGER,
  best_season TEXT,
  group_size_min INTEGER DEFAULT 1,
  group_size_max INTEGER DEFAULT 15,
  starting_price_usd INTEGER,
  meeting_point TEXT DEFAULT 'Kathmandu',
  distance_km INTEGER,
  transportation TEXT,
  highlights TEXT[] DEFAULT '{}',
  includes TEXT[] DEFAULT '{}',
  excludes TEXT[] DEFAULT '{}',
  optional_extras TEXT[] DEFAULT '{}',
  packing_list TEXT[] DEFAULT '{}',
  accommodation_description TEXT DEFAULT '',
  meals_description TEXT DEFAULT '',
  health_safety_info TEXT DEFAULT '',
  hero_image_url TEXT,
  gallery_images TEXT[] DEFAULT '{}',
  rating NUMERIC(2,1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  meta_title TEXT,
  meta_description TEXT,
  schema_json JSONB,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.treks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read published treks" ON public.treks FOR SELECT USING (is_published = true);
CREATE POLICY "No public insert on treks" ON public.treks FOR INSERT WITH CHECK (false);
CREATE POLICY "No public update on treks" ON public.treks FOR UPDATE USING (false);
CREATE POLICY "No public delete on treks" ON public.treks FOR DELETE USING (false);

-- Trek itinerary days
CREATE TABLE public.trek_itinerary (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  trek_id UUID NOT NULL REFERENCES public.treks(id) ON DELETE CASCADE,
  day_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  altitude_m INTEGER,
  accommodation TEXT,
  meals TEXT,
  distance_km NUMERIC(5,1),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.trek_itinerary ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read itinerary" ON public.trek_itinerary FOR SELECT USING (true);
CREATE POLICY "No public insert on itinerary" ON public.trek_itinerary FOR INSERT WITH CHECK (false);
CREATE POLICY "No public update on itinerary" ON public.trek_itinerary FOR UPDATE USING (false);
CREATE POLICY "No public delete on itinerary" ON public.trek_itinerary FOR DELETE USING (false);

-- Trek FAQs
CREATE TABLE public.trek_faqs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  trek_id UUID REFERENCES public.treks(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_global BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.trek_faqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read faqs" ON public.trek_faqs FOR SELECT USING (true);
CREATE POLICY "No public insert on faqs" ON public.trek_faqs FOR INSERT WITH CHECK (false);
CREATE POLICY "No public update on faqs" ON public.trek_faqs FOR UPDATE USING (false);
CREATE POLICY "No public delete on faqs" ON public.trek_faqs FOR DELETE USING (false);

-- Blog posts
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'trekking-guides',
  tags TEXT[] DEFAULT '{}',
  hero_image_url TEXT,
  author TEXT NOT NULL DEFAULT 'Go Nepal Adventures',
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  meta_title TEXT,
  meta_description TEXT,
  read_time_minutes INTEGER DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read published posts" ON public.blog_posts FOR SELECT USING (is_published = true);
CREATE POLICY "No public insert on posts" ON public.blog_posts FOR INSERT WITH CHECK (false);
CREATE POLICY "No public update on posts" ON public.blog_posts FOR UPDATE USING (false);
CREATE POLICY "No public delete on posts" ON public.blog_posts FOR DELETE USING (false);

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_regions_updated_at BEFORE UPDATE ON public.regions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_treks_updated_at BEFORE UPDATE ON public.treks FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
