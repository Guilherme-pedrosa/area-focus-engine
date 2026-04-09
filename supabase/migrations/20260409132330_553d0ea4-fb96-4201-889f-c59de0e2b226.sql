
-- Tabela de page views
CREATE TABLE public.page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_url TEXT NOT NULL,
  page_title TEXT,
  referrer TEXT,
  user_agent TEXT,
  device_type TEXT CHECK (device_type IN ('desktop', 'mobile', 'tablet')),
  browser TEXT,
  os TEXT,
  screen_width INTEGER,
  screen_height INTEGER,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Anon pode inserir (tracking)
CREATE POLICY "Anyone can insert page_views"
ON public.page_views FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Somente authenticated pode ler
CREATE POLICY "Authenticated can read page_views"
ON public.page_views FOR SELECT
TO authenticated
USING (true);

-- Index para queries de analytics
CREATE INDEX idx_page_views_created_at ON public.page_views (created_at DESC);
CREATE INDEX idx_page_views_page_url ON public.page_views (page_url);
CREATE INDEX idx_page_views_session ON public.page_views (session_id);
