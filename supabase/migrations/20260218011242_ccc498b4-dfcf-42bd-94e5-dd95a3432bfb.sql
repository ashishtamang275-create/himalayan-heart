
-- Add new fields to contacts table for enhanced inquiry form
ALTER TABLE public.contacts
ADD COLUMN IF NOT EXISTS nationality text,
ADD COLUMN IF NOT EXISTS experience_level text,
ADD COLUMN IF NOT EXISTS planned_month text;

-- Add check constraint for experience_level
ALTER TABLE public.contacts
ADD CONSTRAINT contacts_experience_level_check
CHECK (experience_level IS NULL OR experience_level IN ('Beginner', 'Moderate', 'Experienced'));
