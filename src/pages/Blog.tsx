import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { usePublishedPosts } from "@/hooks/useBlog";
import { Link } from "react-router-dom";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Blog() {
  const { data: posts, isLoading } = usePublishedPosts();

  return (
    <Layout>
      <Helmet>
        <title>Blog | WeDo Cozinhas Profissionais - Dicas e Novidades</title>
        <meta
          name="description"
          content="Artigos sobre manutenção de cozinhas profissionais, câmaras frias, equipamentos industriais e dicas para seu negócio. Blog WeDo."
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/blog" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container-wedo text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Blog WeDo
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Dicas, novidades e conhecimento técnico sobre cozinhas profissionais,
            refrigeração comercial e manutenção de equipamentos industriais.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-wedo">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-muted rounded-t-lg" />
                  <CardContent className="p-6">
                    <div className="h-4 bg-muted rounded w-1/3 mb-3" />
                    <div className="h-6 bg-muted rounded mb-2" />
                    <div className="h-4 bg-muted rounded w-full mb-1" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : !posts?.length ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Em breve, novos artigos serão publicados aqui.
              </p>
              <p className="text-muted-foreground mt-2">
                Acompanhe nossas dicas sobre cozinhas profissionais!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                  <Card className="h-full overflow-hidden border-border/50 hover:border-accent hover:shadow-lg transition-all duration-300">
                    {post.cover_image_url && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.cover_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        {post.category && (
                          <span className="flex items-center gap-1 bg-accent/10 text-accent-foreground px-2 py-0.5 rounded-full font-medium">
                            <Tag className="w-3 h-3" />
                            {post.category}
                          </span>
                        )}
                        {post.published_at && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.published_at).toLocaleDateString("pt-BR")}
                          </span>
                        )}
                      </div>
                      <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                        Ler artigo <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
