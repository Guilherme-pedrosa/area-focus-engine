import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ManutencaoCamarasFrias from "./pages/ManutencaoCamarasFrias";
import LocaisAtendimento from "./pages/LocaisAtendimento";
import AssistenciaTecnicaRational from "./pages/AssistenciaTecnicaRational";
import ContratosPCM from "./pages/ContratosPCM";
import HigienizacaoCoifas from "./pages/HigienizacaoCoifas";
import Sobre from "./pages/Sobre";
import Clientes from "./pages/Clientes";
import CozinhasIndustriais from "./pages/CozinhasIndustriais";

// Páginas SEO Locais (escondidas do menu)
import SEOManutencaoRationalAnapolis from "./pages/seo/ManutencaoRationalAnapolis";
import SEOManutencaoCamaraFriaRioVerde from "./pages/seo/ManutencaoCamaraFriaRioVerde";
import SEOManutencaoRationalGoiania from "./pages/seo/ManutencaoRationalGoiania";
import SEOCamaraFriaNaoGelaAnapolis from "./pages/seo/CamaraFriaNaoGelaAnapolis";
import SEOCamaraFriaPerdaTemperaturaRioVerde from "./pages/seo/CamaraFriaPerdaTemperaturaRioVerde";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Site Principal */}
            <Route path="/" element={<Index />} />
            <Route path="/manutencao-camaras-frias" element={<ManutencaoCamarasFrias />} />
            <Route path="/locais-atendimento" element={<LocaisAtendimento />} />
            <Route path="/assistencia-tecnica-rational" element={<AssistenciaTecnicaRational />} />
            <Route path="/contratos-pcm" element={<ContratosPCM />} />
            <Route path="/higienizacao-coifas" element={<HigienizacaoCoifas />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/cozinhas-industriais" element={<CozinhasIndustriais />} />

            {/* Páginas SEO Locais - NÃO aparecem no menu/footer */}
            <Route path="/servicos-local/manutencao-rational-anapolis" element={<SEOManutencaoRationalAnapolis />} />
            <Route path="/servicos-local/manutencao-camara-fria-rio-verde" element={<SEOManutencaoCamaraFriaRioVerde />} />
            <Route path="/servicos-local/manutencao-rational-goiania" element={<SEOManutencaoRationalGoiania />} />
            <Route path="/problemas/camara-fria-nao-gela-anapolis" element={<SEOCamaraFriaNaoGelaAnapolis />} />
            <Route path="/problemas/camara-fria-perda-temperatura-rio-verde" element={<SEOCamaraFriaPerdaTemperaturaRioVerde />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
