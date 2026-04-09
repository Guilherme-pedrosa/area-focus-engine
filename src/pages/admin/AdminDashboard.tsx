import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Image, Search, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [counts, setCounts] = useState({ content: 0, images: 0, seo: 0, settings: 0 });

  useEffect(() => {
    const fetchCounts = async () => {
      const [c, i, s, st] = await Promise.all([
        supabase.from("site_content").select("id", { count: "exact", head: true }),
        supabase.from("site_images").select("id", { count: "exact", head: true }),
        supabase.from("seo_pages").select("id", { count: "exact", head: true }),
        supabase.from("site_settings").select("id", { count: "exact", head: true }),
      ]);
      setCounts({
        content: c.count ?? 0,
        images: i.count ?? 0,
        seo: s.count ?? 0,
        settings: st.count ?? 0,
      });
    };
    fetchCounts();
  }, []);

  const cards = [
    { title: "Conteúdos", count: counts.content, icon: FileText, path: "/admin/conteudo", color: "text-blue-600" },
    { title: "Imagens", count: counts.images, icon: Image, path: "/admin/imagens", color: "text-green-600" },
    { title: "Páginas SEO", count: counts.seo, icon: Search, path: "/admin/seo", color: "text-purple-600" },
    { title: "Configurações", count: counts.settings, icon: Settings, path: "/admin/configuracoes", color: "text-orange-600" },
  ];

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral do conteúdo do site</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(card => (
          <Link key={card.path} to={card.path}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{card.count}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
