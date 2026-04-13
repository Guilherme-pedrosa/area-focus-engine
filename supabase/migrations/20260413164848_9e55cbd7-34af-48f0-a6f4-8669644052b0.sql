
CREATE TABLE public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  excerpt text,
  content text,
  cover_image_url text,
  category text DEFAULT 'geral',
  tags text[] DEFAULT '{}',
  author text DEFAULT 'WeDo Cozinhas Profissionais',
  status text NOT NULL DEFAULT 'rascunho',
  published_at timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog_posts"
ON public.blog_posts FOR SELECT TO anon
USING (status = 'publicado');

CREATE POLICY "Authenticated can view all blog_posts"
ON public.blog_posts FOR SELECT TO authenticated
USING (true);

CREATE POLICY "Authenticated can insert blog_posts"
ON public.blog_posts FOR INSERT TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated can update blog_posts"
ON public.blog_posts FOR UPDATE TO authenticated
USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated can delete blog_posts"
ON public.blog_posts FOR DELETE TO authenticated
USING (true);
