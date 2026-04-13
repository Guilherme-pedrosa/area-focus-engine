import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { usePostBySlug } from "@/hooks/useBlog";
import { Calendar, Tag, ArrowLeft, User } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";

function formatContent(raw: string): string {
  if (!raw) return "";
  // If content already has HTML block tags, return as-is
  if (/<(p|h[1-6]|ul|ol|div|blockquote|section|article)\b/i.test(raw)) {
    return raw;
  }
  // Plain text: split by double line breaks into paragraphs
  return raw
    .split(/\n{2,}/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      // Detect lines that look like headings (short, no period at end, or ALL CAPS)
      if (trimmed.length < 120 && !trimmed.endsWith(".") && /^[A-ZÁÀÃÉÊÍÓÔÕÚÇ\d\s:–—\-,]+$/i.test(trimmed) && trimmed === trimmed.replace(/\. /g, '')) {
        // Check if it's likely a subtitle/heading
        if (trimmed.length < 80) {
          return `<h2>${trimmed}</h2>`;
        }
      }
      // Regular paragraph - also convert single line breaks to <br>
      const withBreaks = trimmed.replace(/\n/g, "<br />");
      return `<p>${withBreaks}</p>`;
    })
    .filter(Boolean)
    .join("\n");
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = usePostBySlug(slug || "");
  const { ctaUrl, ctaText } = useCTASettings();

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold text-foreground">Artigo não encontrado</h1>
          <Link to="/blog" className="btn-wedo">
            Voltar ao Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Blog WeDo Cozinhas Profissionais</title>
        <meta name="description" content={post.excerpt || post.title} />
        <link rel="canonical" href={`https://wedocozinhas.com.br/blog/${post.slug}`} />
        {post.cover_image_url && <meta property="og:image" content={post.cover_image_url} />}
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.cover_image_url,
            author: { "@type": "Organization", name: post.author || "WeDo Cozinhas Profissionais" },
            datePublished: post.published_at,
            dateModified: post.updated_at,
            publisher: {
              "@type": "Organization",
              name: "WeDo Comércio e Importação Ltda",
              logo: { "@type": "ImageObject", url: "https://wedocozinhas.com.br/images/logo-wedo-full.jpg" },
            },
          })}
        </script>
      </Helmet>

      {/* Hero */}
      {post.cover_image_url && (
        <div className="w-full h-64 lg:h-96 overflow-hidden">
          <img
            src={post.cover_image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <article className="py-12 lg:py-20">
        <div className="container-wedo max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            {post.category && (
              <span className="flex items-center gap-1 bg-accent/10 text-accent-foreground px-3 py-1 rounded-full font-medium">
                <Tag className="w-3.5 h-3.5" />
                {post.category}
              </span>
            )}
            {post.published_at && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.published_at).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            )}
            {post.author && (
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
            )}
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Content rendered as HTML */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4
              prose-h2:text-2xl prose-h2:border-l-4 prose-h2:border-accent prose-h2:pl-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
              prose-a:text-accent prose-a:underline
              prose-strong:text-foreground
              prose-li:text-muted-foreground
              prose-blockquote:border-l-4 prose-blockquote:border-accent/50 prose-blockquote:italic prose-blockquote:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content || "") }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-primary-foreground mb-3">
              Precisa de assistência técnica?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              A WeDo é especialista em manutenção de cozinhas profissionais em Goiás e DF.
            </p>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wedo inline-flex"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
