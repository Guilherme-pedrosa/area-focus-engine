import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle, Wrench, Zap, ThermometerSnowflake, Wind, Gauge, Shield } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";


import { useSiteSettings } from "@/hooks/useSiteSettings";
const problemas = [
  "Perda gradual de temperatura",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Formação excessiva de gelo",
  "Compressor funcionando sem resfriar",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Vazamento de gás refrigerante",
  "Parada total do sistema",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Alto consumo de energia",
  "Ruídos anormais no equipamento",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Condensador sujo ou bloqueado",
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

const causas = [
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { title: "Falta de Manutenção Preventiva", desc: "Componentes elétricos, compressores, evaporadores e condensadores exigem inspeção periódica. Sem preventiva, falhas menores viram paradas críticas." },
  { title: "Gás Refrigerante com Vazamento", desc: "Pequenos vazamentos reduzem a capacidade de refrigeração gradualmente. Detecção precoce evita perda total." },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { title: "Condensador Sujo ou Bloqueado", desc: "Acumulação de sujeira reduz a dissipação de calor, sobrecarregando o compressor e aumentando consumo elétrico." },
  { title: "Evaporador com Gelo Excessivo", desc: "Problemas no degelo automático causam bloqueio de fluxo de ar, impedindo refrigeração uniforme." },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { title: "Compressor Desgastado ou Com Falha Elétrica", desc: "Compressor é o coração do sistema. Sobrecarga, falta de óleo, contaminação ou desgaste mecânico causam falhas." },
  { title: "Sensor de Temperatura Descalibrado", desc: "Leituras errôneas podem desligar o sistema prematuramente ou manter funcionamento contínuo sem atingir temperatura correta." },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { title: "Problemas na Vedação da Porta", desc: "Borrachas de vedação desgastadas permitem entrada de ar quente, sobrecarregando o sistema." },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

const preventivaItems = [
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { icon: Zap, title: "Inspeção Elétrica Completa", items: ["Tensão de alimentação", "Amperagem do compressor", "Estado dos contatores e relés", "Cabos, conexões e aterramentos"] },
  { icon: ThermometerSnowflake, title: "Verificação do Sistema de Refrigeração", items: ["Pressão de trabalho (alta e baixa)", "Temperatura de evaporação", "Detecção de vazamentos", "Superaquecimento e subresfriamento"] },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { icon: Wind, title: "Limpeza Técnica de Componentes", items: ["Condensador (serpentina externa)", "Evaporador (serpentina interna)", "Ventiladores", "Bandeja de dreno e filtros"] },
  { icon: Gauge, title: "Ajustes e Calibrações", items: ["Controlador digital de temperatura", "Termostato de degelo", "Pressostatos (alta e baixa)", "Temporização de degelo"] },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { icon: Shield, title: "Verificação de Vedação", items: ["Estado das borrachas de porta", "Teste de vedamento", "Fechamento correto de trincos"] },
  { icon: Wrench, title: "Relatório Técnico Detalhado", items: ["Registro fotográfico", "Leituras de pressão e temperatura", "Recomendações técnicas", "Previsão de trocas futuras"] },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
const corretivas = [
  { title: "Parada total do sistema", desc: "Diagnóstico preciso, identificação de componente com falha e reparo com peças em estoque." },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { title: "Perda de temperatura", desc: "Análise de pressões, verificação de carga de gás, teste de componentes. Solução com restauração de capacidade nominal." },
  { title: "Vazamento de gás refrigerante", desc: "Detecção eletrônica, reparo do ponto de vazamento, teste de pressão, vácuo e recarga com gás certificado." },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { title: "Compressor queimado", desc: "Substituição de compressor, limpeza de sistema, troca de filtro secador, vácuo profundo e recarga completa." },
  { title: "Falhas elétricas", desc: "Reparo de quadro de comando, substituição de contatores, relés térmicos, controladores digitais." },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { title: "Problemas no degelo", desc: "Correção de sistema de degelo, substituição de resistências, sensores, timers." },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function ManutencaoCamarasFrias() {
import { useSiteSettings } from "@/hooks/useSiteSettings";
  return (
    <Layout>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <Helmet>
        <title>Manutenção de Câmaras Frias | Preventiva e Corretiva | Goiás e DF | WeDo</title>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta name="description" content="Manutenção especializada em câmaras frias: preventiva e corretiva. Atendemos todo o estado de Goiás e Distrito Federal. Parceiro Rational." />
        <link rel="canonical" href="https://wedocorp.com/manutencao-camaras-frias" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </Helmet>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="max-w-4xl">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span className="mx-2">/</span>
              <span>Manutenção de Câmaras Frias</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Manutenção de Câmaras Frias — Preventiva e Corretiva
            </h1>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
              Atendemos câmaras frias de todos os portes e marcas em todo o estado de Goiás e Distrito Federal. Equipe técnica especializada, peças originais em estoque, ferramentas de diagnóstico avançadas.
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Problemas */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h2 className="title-section text-center mb-4">Sua câmara fria apresenta algum destes problemas?</h2>
          <p className="subtitle-section text-center mx-auto mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            A WeDo resolve falhas de refrigeração com precisão técnica.
          </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {problemas.map((problema) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div key={problema} className="flex items-center gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span className="text-sm font-medium">{problema}</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Causas */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding bg-muted">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h2 className="title-section text-center mb-12">Por que câmaras frias falham?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {causas.map((causa, index) => (
              <div key={causa.title} className="card-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    {index + 1}
                  </span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">{causa.title}</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <p className="text-muted-foreground text-sm">{causa.desc}</p>
                  </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </div>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Manutenção Preventiva */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section id="preventiva" className="section-padding">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h2 className="title-section text-center mb-4">Manutenção Preventiva de Câmaras Frias</h2>
          <p className="subtitle-section text-center mx-auto mb-12">Protocolo Técnico WeDo</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventivaItems.map((item) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div key={item.title} className="card-wedo-highlight">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <h3 className="font-heading font-bold text-lg mb-4">{item.title}</h3>
                <ul className="space-y-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  {item.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {i}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </li>
                  ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </ul>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Manutenção Corretiva */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section id="corretiva" className="section-padding bg-muted">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h2 className="title-section text-center mb-4">Manutenção Corretiva de Câmaras Frias</h2>
          <p className="subtitle-section text-center mx-auto mb-12">Atendemos falhas críticas</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corretivas.map((item) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div key={item.title} className="card-wedo">
                <div className="flex items-start gap-3 mb-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <span className="w-3 h-3 bg-destructive rounded-full flex-shrink-0 mt-1.5" />
                  <h3 className="font-heading font-bold text-lg">{item.title}</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </div>
                <p className="text-muted-foreground text-sm pl-6">{item.desc}</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
            ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Marcas */}
      <section className="section-padding">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo text-center">
          <h2 className="title-section mb-6">Marcas de Câmaras Frias Atendidas</h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <p className="subtitle-section mx-auto mb-8">
            Atendemos todas as marcas de câmaras frias e equipamentos de refrigeração comercial e industrial.
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {["Refrimate", "Gelopar", "Frigorífico", "Polar", "Metalfrio", "Klimaquip", "Frigelar", "Hoshizaki", "True", "Conservex", "Marca própria/custom"].map((marca) => (
              <span key={marca} className="badge-wedo">{marca}</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* CTA */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Solicite uma Avaliação Técnica
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Desde 2018, evitamos milhões de reais em perdas de estoque para restaurantes, hotéis, supermercados, frigoríficos, hospitais e indústrias alimentícias.
          </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <a
            href={ctaUrl}
import { useSiteSettings } from "@/hooks/useSiteSettings";
            target="_blank"
            rel="noopener noreferrer"
import { useSiteSettings } from "@/hooks/useSiteSettings";
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Acessar Atendimento
            <ArrowRight className="w-6 h-6" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </a>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>
    </Layout>
import { useSiteSettings } from "@/hooks/useSiteSettings";
  );
}
