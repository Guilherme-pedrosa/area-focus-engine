import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Phone, Clock, Shield, Wrench, CheckCircle2, AlertTriangle, Settings, Thermometer } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://wa.me/5562982690073?text=Olá!%20Preciso%20de%20assistência%20técnica%20para%20equipamento%20Tramontina.";

export default function AssistenciaTecnicaTramontina() {
  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Tramontina Goiás | Fogões e Equipamentos Profissionais</title>
        <meta
          name="description"
          content="Assistência técnica especializada Tramontina em Goiás. Manutenção de fogões industriais, chapas, fritadeiras e banho-maria. Atendimento em 24h com peças originais."
        />
        <meta name="keywords" content="assistência técnica tramontina, manutenção fogão tramontina, conserto chapa tramontina, fritadeira tramontina, banho-maria tramontina, goiânia, goiás" />
        <link rel="canonical" href="https://area-focus-engine.lovable.app/assistencia-tecnica-tramontina" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="container-wedo">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Especialistas em Equipamentos Tramontina
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Assistência Técnica Tramontina em Goiás
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em fogões industriais, chapas, fritadeiras e banho-maria Tramontina. 
              Atendimento técnico com peças originais e garantia de serviço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wedo text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Solicitar Atendimento
              </a>
              <a
                href="tel:+5562982690073"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all"
              >
                <Clock className="w-5 h-5" />
                Atendimento 24h
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Equipamentos Section */}
      <section className="py-16 bg-background">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Equipamentos Tramontina Atendidos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada em toda linha profissional Tramontina para cozinhas industriais
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            {/* Fogões Industriais */}
            <AccordionItem value="fogoes">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Thermometer className="w-5 h-5 text-accent" />
                  </div>
                  Fogões Industriais
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Fogão 4 Bocas</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Queimadores de alta pressão dupla chama</li>
                        <li>• Grade em ferro fundido</li>
                        <li>• Estrutura em aço inox 430</li>
                        <li>• Potência: 28.000 kcal/h por boca</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Fogão 6 Bocas</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Queimadores industriais de alta performance</li>
                        <li>• Pés reguláveis em aço inox</li>
                        <li>• Bandeja coletora removível</li>
                        <li>• Potência total: 168.000 kcal/h</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Fogão 8 Bocas com Forno</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Forno industrial a gás</li>
                        <li>• Termostato de segurança</li>
                        <li>• Visor em vidro temperado</li>
                        <li>• Capacidade do forno: 150 litros</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Fogão Industrial Modular</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Sistema modular configurável</li>
                        <li>• Queimadores de 7.000 a 35.000 kcal/h</li>
                        <li>• Acabamento premium em inox 304</li>
                        <li>• Compatível com GLP e GN</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Peças Críticas Fogões</h4>
                    <p className="text-sm text-muted-foreground">
                      Queimadores, válvulas de segurança, termopares, registros, injetores, 
                      grades em ferro fundido, bandeja coletora, mangueiras de gás certificadas.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Chapas */}
            <AccordionItem value="chapas">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Settings className="w-5 h-5 text-accent" />
                  </div>
                  Chapas Profissionais
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Chapa a Gás Lisa</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Superfície em aço carbono polido</li>
                        <li>• Espessura: 9,5mm</li>
                        <li>• Queimadores tubulares em "U"</li>
                        <li>• Controle de temperatura por zona</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Chapa Bifeteira</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Superfície mista: 1/3 ondulada, 2/3 lisa</li>
                        <li>• Ideal para hambúrgueres e bifes</li>
                        <li>• Canaleta coletora de gordura</li>
                        <li>• Potência: até 42.000 kcal/h</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Chapa Elétrica Industrial</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Resistências blindadas</li>
                        <li>• Termostato digital</li>
                        <li>• Temperatura até 300°C</li>
                        <li>• Potência: 3.000W a 6.000W</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Chapa de Sobrepor</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Para uso sobre fogões</li>
                        <li>• Chapa em aço carbono 6mm</li>
                        <li>• Bordas em aço inox</li>
                        <li>• Diversos tamanhos disponíveis</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Peças Críticas Chapas</h4>
                    <p className="text-sm text-muted-foreground">
                      Termostatos, resistências elétricas, queimadores tubulares, válvulas, 
                      registros, termopares, bandeja coletora, pés niveladores.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Fritadeiras */}
            <AccordionItem value="fritadeiras">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Wrench className="w-5 h-5 text-accent" />
                  </div>
                  Fritadeiras Industriais
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Fritadeira a Gás 18L</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Cuba em aço inox 304</li>
                        <li>• Queimador tipo "U" em aço inox</li>
                        <li>• Termostato de segurança</li>
                        <li>• Potência: 35.000 kcal/h</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Fritadeira a Gás 36L</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Cuba dupla 18L + 18L</li>
                        <li>• Aquecimento independente</li>
                        <li>• Cestos em aço inox</li>
                        <li>• Potência: 70.000 kcal/h</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Fritadeira Elétrica</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Resistências blindadas imersas</li>
                        <li>• Termostato ajustável 50-200°C</li>
                        <li>• Zona fria para resíduos</li>
                        <li>• Potência: 5.000W a 8.000W</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Fritadeira Água e Óleo</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Sistema água/óleo separador</li>
                        <li>• Prolonga vida útil do óleo</li>
                        <li>• Dreno inferior para água</li>
                        <li>• Capacidade: 20L a 40L</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Peças Críticas Fritadeiras</h4>
                    <p className="text-sm text-muted-foreground">
                      Termostatos, resistências, válvulas de segurança, termopares, queimadores, 
                      torneiras de drenagem, cestos, tampas, isolamento térmico.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Banho-Maria */}
            <AccordionItem value="banho-maria">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Thermometer className="w-5 h-5 text-accent" />
                  </div>
                  Banho-Maria
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Banho-Maria a Gás</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Cuba em aço inox 304</li>
                        <li>• Queimadores tubulares</li>
                        <li>• Capacidade: 3 a 6 cubas GN</li>
                        <li>• Temperatura: 60-90°C</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Banho-Maria Elétrico</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Resistências blindadas</li>
                        <li>• Termostato de precisão</li>
                        <li>• Dreno para limpeza</li>
                        <li>• Potência: 2.000W a 4.500W</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Banho-Maria Self-Service</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Estrutura para buffet</li>
                        <li>• Protetor salivar em vidro</li>
                        <li>• Iluminação integrada</li>
                        <li>• Rodízios com trava</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Banho-Maria de Sobrepor</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Compacto para balcões</li>
                        <li>• 1 a 3 cubas GN 1/3</li>
                        <li>• Controle individual</li>
                        <li>• Ideal para molhos e guarnições</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Peças Críticas Banho-Maria</h4>
                    <p className="text-sm text-muted-foreground">
                      Termostatos, resistências, válvulas de segurança, termopares, queimadores, 
                      torneiras de drenagem, cubas GN, tampas, bóia de nível.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Problemas Comuns */}
      <section className="py-16 bg-muted/30">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Problemas Comuns em Equipamentos Tramontina
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Identificamos e solucionamos os principais problemas técnicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Chama Irregular</h3>
                  <p className="text-sm text-muted-foreground">
                    Queimadores entupidos, injetores com sujeira, pressão de gás inadequada ou válvula com defeito.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Não Mantém Temperatura</h3>
                  <p className="text-sm text-muted-foreground">
                    Termostato descalibrado, termopar com defeito, resistência queimada ou isolamento danificado.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Vazamento de Gás</h3>
                  <p className="text-sm text-muted-foreground">
                    Conexões soltas, mangueiras ressecadas, válvulas com defeito ou registros danificados.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Aquecimento Desigual</h3>
                  <p className="text-sm text-muted-foreground">
                    Distribuição irregular de calor na chapa, queimadores parcialmente obstruídos ou resistências defeituosas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Corrosão e Oxidação</h3>
                  <p className="text-sm text-muted-foreground">
                    Desgaste do aço inox por produtos químicos inadequados ou falta de manutenção preventiva.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Sistema Elétrico</h3>
                  <p className="text-sm text-muted-foreground">
                    Fiação danificada, disjuntor desarmando, curto-circuito ou sobrecarga na rede elétrica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos de Manutenção */}
      <section className="py-16 bg-background">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Planos de Manutenção Tramontina
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contratos PCM personalizados para sua operação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Essencial</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Visita preventiva trimestral</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Limpeza técnica de queimadores</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Verificação de segurança</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Relatório técnico básico</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">Ideal para operações com até 3 equipamentos</p>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                MAIS POPULAR
              </div>
              <h3 className="text-xl font-bold mb-4">Profissional</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Visita preventiva mensal</span>
                </li>
                <li className="flex items-start gap-2 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Manutenção corretiva prioritária</span>
                </li>
                <li className="flex items-start gap-2 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Calibração de termostatos</span>
                </li>
                <li className="flex items-start gap-2 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Desconto em peças originais</span>
                </li>
                <li className="flex items-start gap-2 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>SLA 8h para emergências</span>
                </li>
              </ul>
              <p className="text-sm text-primary-foreground/70">Ideal para restaurantes e hotéis</p>
            </div>

            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Corporativo</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Visitas preventivas semanais</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Técnico residente disponível</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Estoque de peças no local</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Gestão completa de ativos</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>SLA 4h para emergências</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">Ideal para redes e indústrias</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Perguntas Frequentes - Tramontina
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>
                  Vocês atendem equipamentos Tramontina de todas as linhas?
                </AccordionTrigger>
                <AccordionContent>
                  Sim, atendemos toda a linha profissional Tramontina: fogões industriais, 
                  chapas, fritadeiras, banho-maria e demais equipamentos para cozinhas comerciais.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>
                  Qual o prazo para atendimento de emergência?
                </AccordionTrigger>
                <AccordionContent>
                  Dependendo do plano contratado, o SLA varia de 4 a 24 horas. Para clientes 
                  com contrato PCM, priorizamos o atendimento com técnicos especializados.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger>
                  Utilizam peças originais Tramontina?
                </AccordionTrigger>
                <AccordionContent>
                  Sempre que disponíveis, utilizamos peças originais ou equivalentes de 
                  alta qualidade certificadas, garantindo o desempenho e segurança do equipamento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger>
                  Fazem manutenção preventiva em equipamentos a gás?
                </AccordionTrigger>
                <AccordionContent>
                  Sim, nossa manutenção preventiva inclui inspeção completa de válvulas, 
                  queimadores, termopares, mangueiras e conexões, seguindo todas as normas 
                  de segurança para equipamentos a gás (NR13, NBR 13103).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger>
                  Atendem em todo o estado de Goiás?
                </AccordionTrigger>
                <AccordionContent>
                  Sim, atendemos Goiânia, Aparecida de Goiânia, Anápolis, Rio Verde, 
                  Itumbiara, Catalão e demais cidades de Goiás e região Centro-Oeste.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-wedo text-center">
          <h2 className="text-3xl font-bold mb-4">
            Precisa de Assistência Técnica Tramontina?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Entre em contato agora e receba atendimento especializado para seus equipamentos Tramontina.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wedo text-lg px-8 py-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </Layout>
  );
}
