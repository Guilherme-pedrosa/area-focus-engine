import { useState, useEffect, useMemo } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { Eye, Users, Monitor, Globe, TrendingUp, Clock } from "lucide-react";

type PageView = {
  id: string;
  page_url: string;
  page_title: string | null;
  referrer: string | null;
  device_type: string | null;
  browser: string | null;
  os: string | null;
  session_id: string | null;
  created_at: string;
};

const COLORS = ["hsl(205, 52%, 21%)", "hsl(82, 62%, 57%)", "hsl(201, 48%, 33%)", "hsl(0, 84%, 60%)", "hsl(215, 16%, 47%)", "hsl(30, 80%, 55%)"];

const AdminAnalytics = () => {
  const [views, setViews] = useState<PageView[]>([]);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("7");

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const since = new Date();
      since.setDate(since.getDate() - parseInt(period));

      const { data } = await supabase
        .from("page_views")
        .select("*")
        .gte("created_at", since.toISOString())
        .order("created_at", { ascending: false });

      setViews((data as PageView[]) ?? []);
      setLoading(false);
    };
    fetch();
  }, [period]);

  const stats = useMemo(() => {
    const sessions = new Set(views.map(v => v.session_id).filter(Boolean));
    const today = new Date().toDateString();
    const todayViews = views.filter(v => new Date(v.created_at).toDateString() === today);

    // Views by page
    const byPage: Record<string, number> = {};
    views.forEach(v => { byPage[v.page_url] = (byPage[v.page_url] || 0) + 1; });
    const topPages = Object.entries(byPage)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([page, count]) => ({ page, count }));

    // Views by device
    const byDevice: Record<string, number> = {};
    views.forEach(v => { if (v.device_type) byDevice[v.device_type] = (byDevice[v.device_type] || 0) + 1; });
    const deviceData = Object.entries(byDevice).map(([name, value]) => ({ name, value }));

    // Views by browser
    const byBrowser: Record<string, number> = {};
    views.forEach(v => { if (v.browser) byBrowser[v.browser] = (byBrowser[v.browser] || 0) + 1; });
    const browserData = Object.entries(byBrowser).map(([name, value]) => ({ name, value }));

    // Views by OS
    const byOS: Record<string, number> = {};
    views.forEach(v => { if (v.os) byOS[v.os] = (byOS[v.os] || 0) + 1; });
    const osData = Object.entries(byOS).map(([name, value]) => ({ name, value }));

    // Views by day
    const byDay: Record<string, number> = {};
    views.forEach(v => {
      const day = new Date(v.created_at).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
      byDay[day] = (byDay[day] || 0) + 1;
    });
    const dailyData = Object.entries(byDay)
      .map(([date, views]) => ({ date, views }))
      .reverse();

    // Top referrers
    const byRef: Record<string, number> = {};
    views.forEach(v => {
      if (v.referrer) {
        try {
          const host = new URL(v.referrer).hostname || "Direto";
          byRef[host] = (byRef[host] || 0) + 1;
        } catch {
          byRef["Direto"] = (byRef["Direto"] || 0) + 1;
        }
      }
    });
    const topReferrers = Object.entries(byRef)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([source, count]) => ({ source, count }));

    return {
      totalViews: views.length,
      uniqueSessions: sessions.size,
      todayViews: todayViews.length,
      avgPerDay: Math.round(views.length / Math.max(parseInt(period), 1)),
      topPages,
      deviceData,
      browserData,
      osData,
      dailyData,
      topReferrers,
    };
  }, [views, period]);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Métricas de acesso ao site</p>
        </div>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Hoje</SelectItem>
            <SelectItem value="7">Últimos 7 dias</SelectItem>
            <SelectItem value="30">Últimos 30 dias</SelectItem>
            <SelectItem value="90">Últimos 90 dias</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="text-center py-12 text-muted-foreground">Carregando analytics...</div>
      ) : (
        <>
          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Page Views</CardTitle>
                <Eye className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent><div className="text-3xl font-bold">{stats.totalViews}</div></CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Sessões Únicas</CardTitle>
                <Users className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent><div className="text-3xl font-bold">{stats.uniqueSessions}</div></CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Hoje</CardTitle>
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent><div className="text-3xl font-bold">{stats.todayViews}</div></CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Média/Dia</CardTitle>
                <Clock className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent><div className="text-3xl font-bold">{stats.avgPerDay}</div></CardContent>
            </Card>
          </div>

          {/* Daily Views Chart */}
          {stats.dailyData.length > 0 && (
            <Card className="mb-6">
              <CardHeader><CardTitle className="text-lg">Visualizações por Dia</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={stats.dailyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" stroke="hsl(205, 52%, 21%)" strokeWidth={2} dot={{ fill: "hsl(82, 62%, 57%)" }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Top Pages */}
            <Card>
              <CardHeader><CardTitle className="text-lg">Páginas Mais Visitadas</CardTitle></CardHeader>
              <CardContent>
                {stats.topPages.length === 0 ? (
                  <p className="text-muted-foreground text-sm">Sem dados ainda</p>
                ) : (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={stats.topPages} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" fontSize={12} />
                      <YAxis type="category" dataKey="page" width={150} fontSize={11} />
                      <Tooltip />
                      <Bar dataKey="count" fill="hsl(205, 52%, 21%)" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>

            {/* Devices */}
            <Card>
              <CardHeader><CardTitle className="text-lg">Dispositivos</CardTitle></CardHeader>
              <CardContent>
                {stats.deviceData.length === 0 ? (
                  <p className="text-muted-foreground text-sm">Sem dados ainda</p>
                ) : (
                  <div className="flex items-center gap-6">
                    <ResponsiveContainer width="50%" height={200}>
                      <PieChart>
                        <Pie data={stats.deviceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                          {stats.deviceData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="space-y-2">
                      {stats.deviceData.map((d, i) => (
                        <div key={d.name} className="flex items-center gap-2 text-sm">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                          <span className="capitalize">{d.name}</span>
                          <span className="text-muted-foreground">({d.value})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Browsers */}
            <Card>
              <CardHeader><CardTitle className="text-lg">Navegadores</CardTitle></CardHeader>
              <CardContent>
                {stats.browserData.length === 0 ? (
                  <p className="text-muted-foreground text-sm">Sem dados ainda</p>
                ) : (
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={stats.browserData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" fontSize={12} />
                      <YAxis fontSize={12} />
                      <Tooltip />
                      <Bar dataKey="value" fill="hsl(82, 62%, 57%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>

            {/* OS */}
            <Card>
              <CardHeader><CardTitle className="text-lg">Sistemas Operacionais</CardTitle></CardHeader>
              <CardContent>
                {stats.osData.length === 0 ? (
                  <p className="text-muted-foreground text-sm">Sem dados ainda</p>
                ) : (
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie data={stats.osData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                        {stats.osData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Top Referrers */}
          {stats.topReferrers.length > 0 && (
            <Card>
              <CardHeader><CardTitle className="text-lg">Origens de Tráfego</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Origem</TableHead>
                      <TableHead className="text-right">Visitas</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {stats.topReferrers.map(r => (
                      <TableRow key={r.source}>
                        <TableCell className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-muted-foreground" />
                          {r.source}
                        </TableCell>
                        <TableCell className="text-right font-medium">{r.count}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </AdminLayout>
  );
};

export default AdminAnalytics;
