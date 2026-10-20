import ServicePage from "@/components/institutional/ServicePage";
import BeforeAfterComparison from "@/components/institutional/BeforeAfterComparison";

export default function ContratosPCM() {
  return <ServicePage
    slug="contratos-pcm"
    title="Contratos de manutenção preventiva para cozinhas profissionais | WeDo"
    description="Planejamento e controle de manutenção para cozinhas profissionais em Goiás e DF. Inventário, programação de visitas, checklists e histórico dos equipamentos."
    breadcrumb="Contratos de manutenção"
    kicker="Planejamento e controle de manutenção"
    heading="Contratos de manutenção para cozinhas profissionais."
    introduction="Organizamos a rotina de manutenção a partir dos equipamentos, das prioridades e das condições de uso de cada unidade. Um plano de trabalho definido com a sua equipe."
    heroMedia={<BeforeAfterComparison
      compact
      before={{ src: "/images/institucional/manutencao-fogao-antes.webp", alt: "Fogão profissional antes da manutenção, em registro da WeDo", width: 543, height: 400 }}
      after={{ src: "/images/institucional/manutencao-fogao-depois.webp", alt: "O mesmo fogão profissional após a manutenção, em registro da WeDo", width: 713, height: 400 }}
      caption="Manutenção em fogão profissional · Registros WeDo"
    />}
    afterHero={<section className="wd-service-results">
      <div className="wd-container wd-service-results-grid">
        <div className="wd-service-results-heading">
          <p className="wd-kicker">Registros dos serviços</p>
          <h2>Antes e depois da manutenção.</h2>
          <p>Fotos de antes e depois documentam o trabalho realizado. São registros reais da WeDo, que ajudam a acompanhar a condição dos equipamentos e as intervenções executadas.</p>
        </div>
        <BeforeAfterComparison
          before={{ src: "/images/institucional/manutencao-eletrica-antes.webp", alt: "Componentes elétricos de um equipamento antes da manutenção, em registro da WeDo", width: 580, height: 400 }}
          after={{ src: "/images/institucional/manutencao-eletrica-depois.webp", alt: "Componentes elétricos do mesmo equipamento após a manutenção, em registro da WeDo", width: 728, height: 400 }}
          caption="Manutenção em componentes elétricos · Registros WeDo"
        />
      </div>
    </section>}
    action="Conversar sobre um contrato"
    subject="Contrato de manutenção"
    overview={{
      title: "Planejamento a partir dos seus equipamentos.",
      description: "A proposta considera os equipamentos e a rotina da unidade. Escopo, frequência, materiais e condições de atendimento ficam definidos no contrato.",
      items: [
        { title: "Inventário por unidade", description: "Identificação dos equipamentos, suas características e localização na operação." },
        { title: "Prioridades de manutenção", description: "Avaliação da condição dos equipamentos e do impacto de uma parada na produção." },
        { title: "Periodicidade definida", description: "Programação conforme uso, estado do equipamento e orientações do fabricante." },
        { title: "Acompanhamento do histórico", description: "Registros dos atendimentos, das observações técnicas e das necessidades encontradas." },
      ],
    }}
    process={{
      title: "Organização das visitas e dos registros.",
      description: "O planejamento conecta a necessidade técnica à disponibilidade da operação.",
      steps: [
        { title: "Levantamento", description: "Conhecemos os equipamentos, os horários da cozinha e as restrições de acesso." },
        { title: "Planejamento", description: "Definimos escopo, prioridades, periodicidade e janelas para as visitas." },
        { title: "Visita programada", description: "Executamos as verificações e os serviços previstos para os equipamentos atendidos." },
        { title: "Relatório e próximos passos", description: "Registramos o trabalho e apresentamos as pendências que precisam de avaliação ou aprovação." },
      ],
    }}
    faqs={[
      { question: "O que significa PCM?", answer: "PCM é Planejamento e Controle de Manutenção. É a organização das atividades, dos recursos e dos registros necessários para acompanhar a manutenção dos equipamentos." },
      { question: "Todos os equipamentos têm a mesma frequência de visita?", answer: "A periodicidade depende da utilização, da condição, da importância do equipamento para a produção e das orientações do fabricante. Esses critérios são considerados na definição do plano." },
      { question: "Peças e reparos corretivos estão incluídos?", answer: "A inclusão de peças, materiais e serviços corretivos depende do escopo contratado. Essas condições são apresentadas na proposta e devem ser verificadas antes da contratação." },
    ]}
    related={[{ to: "/assistencia-multimarcas", label: "Assistência técnica" }, { to: "/pecas-originais", label: "Peças e componentes" }]}
  />;
}
