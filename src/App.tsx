import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SiteSettingsProvider } from "@/hooks/useSiteSettings";
import Index from "./pages/Index";
import ManutencaoCamarasFrias from "./pages/ManutencaoCamarasFrias";
import LocaisAtendimento from "./pages/LocaisAtendimento";
import AssistenciaTecnicaRational from "./pages/AssistenciaTecnicaRational";
import AssistenciaTecnicaIrinox from "./pages/AssistenciaTecnicaIrinox";
import AssistenciaTecnicaPratica from "./pages/AssistenciaTecnicaPratica";
import AssistenciaTecnicaRobotCoupe from "./pages/AssistenciaTecnicaRobotCoupe";
import AssistenciaTecnicaHobart from "./pages/AssistenciaTecnicaHobart";
import AssistenciaTecnicaVulcan from "./pages/AssistenciaTecnicaVulcan";
import AssistenciaTecnicaTramontina from "./pages/AssistenciaTecnicaTramontina";
import AssistenciaTecnicaMiddleby from "./pages/AssistenciaTecnicaMiddleby";
import AssistenciaTecnicaCozil from "./pages/AssistenciaTecnicaCozil";
import AssistenciaTecnicaUnox from "./pages/AssistenciaTecnicaUnox";
import AssistenciaTecnicaSkymsen from "./pages/AssistenciaTecnicaSkymsen";
import AssistenciaTecnicaMacom from "./pages/AssistenciaTecnicaMacom";
import AssistenciaTecnicaBecker from "./pages/AssistenciaTecnicaBecker";
import AssistenciaTecnicaRamalhos from "./pages/AssistenciaTecnicaRamalhos";
import AssistenciaTecnicaProgas from "./pages/AssistenciaTecnicaProgas";
import AssistenciaTecnicaGpaniz from "./pages/AssistenciaTecnicaGpaniz";
import AssistenciaTecnicaWinterhalter from "./pages/AssistenciaTecnicaWinterhalter";
import AssistenciaTecnicaNetter from "./pages/AssistenciaTecnicaNetter";
import AssistenciaTecnicaRodriaco from "./pages/AssistenciaTecnicaRodriaco";
import AssistenciaTecnicaImbera from "./pages/AssistenciaTecnicaImbera";
import AssistenciaTecnicaGelopar from "./pages/AssistenciaTecnicaGelopar";
import AssistenciaTecnicaHoshizaki from "./pages/AssistenciaTecnicaHoshizaki";
import AdminSeoImport from "./pages/AdminSeoImport";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminContent from "./pages/admin/AdminContent";
import AdminImages from "./pages/admin/AdminImages";
import AdminSeoPages from "./pages/admin/AdminSeoPages";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminBlog from "./pages/admin/AdminBlog";
import PageTracker from "./components/PageTracker";
import ContratosPCM from "./pages/ContratosPCM";
import HigienizacaoCoifas from "./pages/HigienizacaoCoifas";
import Sobre from "./pages/Sobre";
import Clientes from "./pages/Clientes";
import CozinhasProfissionais from "./pages/CozinhasProfissionais";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";

// Páginas SEO Locais (escondidas do menu)
import SEOManutencaoRationalAnapolis from "./pages/seo/ManutencaoRationalAnapolis";
import SEOManutencaoCamaraFriaRioVerde from "./pages/seo/ManutencaoCamaraFriaRioVerde";
import SEOManutencaoRationalGoiania from "./pages/seo/ManutencaoRationalGoiania";
import SEOCamaraFriaNaoGelaAnapolis from "./pages/seo/CamaraFriaNaoGelaAnapolis";
import SEOCamaraFriaPerdaTemperaturaRioVerde from "./pages/seo/CamaraFriaPerdaTemperaturaRioVerde";

// Template dinâmico para páginas SEO de sintomas
import SeoSymptomTemplate from "./pages/seo/SeoSymptomTemplate";

// Dados das páginas SEO
import { seoSymptomsPages } from "./data/seoSymptomsData";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SiteSettingsProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Site Principal */}
            <Route path="/" element={<Index />} />
            <Route path="/manutencao-camaras-frias" element={<ManutencaoCamarasFrias />} />
            <Route path="/locais-atendimento" element={<LocaisAtendimento />} />
            <Route path="/assistencia-tecnica-rational" element={<AssistenciaTecnicaRational />} />
            <Route path="/assistencia-tecnica-irinox" element={<AssistenciaTecnicaIrinox />} />
            <Route path="/assistencia-tecnica-pratica" element={<AssistenciaTecnicaPratica />} />
            <Route path="/assistencia-tecnica-robot-coupe" element={<AssistenciaTecnicaRobotCoupe />} />
            <Route path="/assistencia-tecnica-hobart" element={<AssistenciaTecnicaHobart />} />
            <Route path="/assistencia-tecnica-vulcan" element={<AssistenciaTecnicaVulcan />} />
            <Route path="/assistencia-tecnica-tramontina" element={<AssistenciaTecnicaTramontina />} />
            <Route path="/assistencia-tecnica-middleby" element={<AssistenciaTecnicaMiddleby />} />
            <Route path="/assistencia-tecnica-cozil" element={<AssistenciaTecnicaCozil />} />
            <Route path="/assistencia-tecnica-unox" element={<AssistenciaTecnicaUnox />} />
            <Route path="/assistencia-tecnica-skymsen" element={<AssistenciaTecnicaSkymsen />} />
            <Route path="/assistencia-tecnica-macom" element={<AssistenciaTecnicaMacom />} />
            <Route path="/assistencia-tecnica-becker" element={<AssistenciaTecnicaBecker />} />
            <Route path="/assistencia-tecnica-ramalhos" element={<AssistenciaTecnicaRamalhos />} />
            <Route path="/assistencia-tecnica-progas" element={<AssistenciaTecnicaProgas />} />
            <Route path="/assistencia-tecnica-gpaniz" element={<AssistenciaTecnicaGpaniz />} />
            <Route path="/assistencia-tecnica-winterhalter" element={<AssistenciaTecnicaWinterhalter />} />
            <Route path="/assistencia-tecnica-netter" element={<AssistenciaTecnicaNetter />} />
            <Route path="/assistencia-tecnica-rodriaco" element={<AssistenciaTecnicaRodriaco />} />
            <Route path="/assistencia-tecnica-imbera" element={<AssistenciaTecnicaImbera />} />
            <Route path="/assistencia-tecnica-gelopar" element={<AssistenciaTecnicaGelopar />} />
            <Route path="/assistencia-tecnica-hoshizaki" element={<AssistenciaTecnicaHoshizaki />} />
            <Route path="/contratos-pcm" element={<ContratosPCM />} />
            <Route path="/higienizacao-coifas" element={<HigienizacaoCoifas />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/cozinhas-profissionais" element={<CozinhasProfissionais />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            {/* Admin (hidden) */}
            {/* Admin CMS */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/conteudo" element={<AdminContent />} />
            <Route path="/admin/imagens" element={<AdminImages />} />
            <Route path="/admin/seo" element={<AdminSeoPages />} />
            <Route path="/admin/configuracoes" element={<AdminSettings />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/admin/blog" element={<AdminBlog />} />
            <Route path="/admin/seo-import" element={<AdminSeoImport />} />

            {/* Páginas SEO Locais Antigas */}
            <Route path="/servicos-local/manutencao-rational-anapolis" element={<SEOManutencaoRationalAnapolis />} />
            <Route path="/servicos-local/manutencao-camara-fria-rio-verde" element={<SEOManutencaoCamaraFriaRioVerde />} />
            <Route path="/servicos-local/manutencao-rational-goiania" element={<SEOManutencaoRationalGoiania />} />
            <Route path="/problemas/camara-fria-nao-gela-anapolis" element={<SEOCamaraFriaNaoGelaAnapolis />} />
            <Route path="/problemas/camara-fria-perda-temperatura-rio-verde" element={<SEOCamaraFriaPerdaTemperaturaRioVerde />} />

            {/* Páginas SEO Dinâmicas baseadas em Sintomas */}
            {seoSymptomsPages.map((page) => (
              <Route key={page.slug} path={`/${page.slug}`} element={<SeoSymptomTemplate />} />
            ))}

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <PageTracker />
        </BrowserRouter>
        </SiteSettingsProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
