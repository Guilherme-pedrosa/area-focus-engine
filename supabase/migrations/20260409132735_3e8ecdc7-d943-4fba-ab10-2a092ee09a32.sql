
ALTER TABLE public.page_views
  ADD COLUMN ip_address TEXT,
  ADD COLUMN city TEXT,
  ADD COLUMN region TEXT,
  ADD COLUMN country TEXT,
  ADD COLUMN latitude DOUBLE PRECISION,
  ADD COLUMN longitude DOUBLE PRECISION;

CREATE INDEX idx_page_views_city ON public.page_views (city);
CREATE INDEX idx_page_views_region ON public.page_views (region);
