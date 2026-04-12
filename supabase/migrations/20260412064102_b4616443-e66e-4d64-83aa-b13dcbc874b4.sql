ALTER TABLE public.treks
  ADD COLUMN IF NOT EXISTS budget_price_usd integer,
  ADD COLUMN IF NOT EXISTS standard_price_usd integer,
  ADD COLUMN IF NOT EXISTS luxury_price_usd integer,
  ADD COLUMN IF NOT EXISTS permits_breakdown text,
  ADD COLUMN IF NOT EXISTS badge_label text;

UPDATE public.treks SET
  budget_price_usd = CASE slug
    WHEN 'everest-base-camp' THEN 1200
    WHEN 'annapurna-base-camp' THEN 800
    WHEN 'manaslu-circuit' THEN 1100
    WHEN 'langtang-valley' THEN 650
    WHEN 'ghorepani-poonhill' THEN 500
    ELSE 700
  END,
  standard_price_usd = CASE slug
    WHEN 'everest-base-camp' THEN 1800
    WHEN 'annapurna-base-camp' THEN 1200
    WHEN 'manaslu-circuit' THEN 1600
    WHEN 'langtang-valley' THEN 950
    WHEN 'ghorepani-poonhill' THEN 750
    ELSE 1000
  END,
  luxury_price_usd = CASE slug
    WHEN 'everest-base-camp' THEN 3500
    WHEN 'annapurna-base-camp' THEN 2000
    WHEN 'manaslu-circuit' THEN 3000
    WHEN 'langtang-valley' THEN 1800
    WHEN 'ghorepani-poonhill' THEN 1500
    ELSE 2000
  END,
  permits_breakdown = CASE slug
    WHEN 'everest-base-camp' THEN 'Sagarmatha National Park: $30 | TIMS Card: $20 | EBC Permit: $25'
    WHEN 'annapurna-base-camp' THEN 'ACAP Permit: $30 | TIMS Card: $20'
    WHEN 'manaslu-circuit' THEN 'Manaslu Restricted Area Permit: $100 | MCAP: $30 | TIMS: $20'
    WHEN 'langtang-valley' THEN 'Langtang National Park: $30 | TIMS Card: $20'
    WHEN 'ghorepani-poonhill' THEN 'ACAP Permit: $30 | TIMS Card: $20'
    ELSE 'Permits included — details on request'
  END,
  badge_label = CASE
    WHEN difficulty = 'Easy' THEN 'Best for Beginners'
    WHEN slug = 'everest-base-camp' THEN 'Most Popular'
    WHEN slug = 'manaslu-circuit' THEN 'Off the Beaten Path'
    ELSE NULL
  END,
  starting_price_usd = budget_price_usd
WHERE is_published = true;