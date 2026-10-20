import ServicePage from "@/components/institutional/ServicePage";

export default function HigienizacaoCoifas() {
  return <ServicePage
    slug="limpeza-de-coifas"
    title="Limpeza de coifas e sistemas de exaustão em Goiás e DF | WeDo"
    description="Higienização de coifas e componentes de exaustão para cozinhas profissionais. Avaliação do sistema, programação do trabalho e registro do serviço conforme o escopo."
    breadcrumb="Limpeza de coifas"
    kicker="Higienização técnica"
    heading="Limpeza de coifas e sistemas de exaustão."
    introduction="A limpeza começa pela avaliação do sistema e das condições de acesso. Definimos os componentes atendidos e programamos o trabalho junto à sua operação."
    heroMedia={<figure className="wd-service-video">
      <video
        controls
        playsInline
              preload="none"
        poster="/images/institucional/coifas-limpeza.webp"
        aria-label="Vídeo da higienização de coifa pela equipe WeDo"
      >
        <source src="/videos/limpeza-de-coifas-wedo.mp4" type="video/mp4" />
        Seu navegador não consegue reproduzir este vídeo. <a href="/videos/limpeza-de-coifas-wedo.mp4">Abrir o vídeo da limpeza de coifas</a>.
      </video>
      <figcaption>Higienização de coifa realizada pela equipe WeDo.</figcaption>
    </figure>}
    action="Solicitar avaliação"
    subject="Limpeza de coifas"
    overview={{
      title: "Um escopo definido para cada sistema.",
      description: "Dimensões, componentes, acúmulo de resíduos e acesso influenciam a preparação do serviço. Esses pontos são considerados antes da execução.",
      items: [
        { title: "Coifas e filtros", description: "Avaliação das superfícies e dos elementos removíveis para definir os procedimentos de higienização." },
        { title: "Dutos e exaustores", description: "Verificação dos trechos e componentes acessíveis, conforme as condições do sistema e o escopo proposto." },
        { title: "Preparação do ambiente", description: "Alinhamento da janela de trabalho e da proteção dos equipamentos e das áreas próximas." },
        { title: "Registro do atendimento", description: "Documentação do trabalho realizado e das observações encontradas durante o serviço." },
      ],
    }}
    process={{
      title: "Avaliar, preparar e executar.",
      description: "A programação considera o sistema instalado e o funcionamento da cozinha.",
      steps: [
        { title: "Avaliação", description: "Levantamento das dimensões, componentes e condições de acesso ao sistema." },
        { title: "Programação", description: "Definição do escopo, dos recursos necessários e do período para execução." },
        { title: "Higienização", description: "Preparação da área e limpeza dos componentes previstos no serviço aprovado." },
        { title: "Conferência", description: "Verificação do trabalho e registro das condições e das observações do atendimento." },
      ],
    }}
    faqs={[
      { question: "O que preciso enviar para solicitar um orçamento?", answer: "Envie fotos da coifa, dos filtros, dos dutos e do exaustor, quando acessíveis, além da localização e das dimensões aproximadas. Informe os horários de funcionamento e possíveis restrições de acesso." },
      { question: "A limpeza inclui todo o sistema de exaustão?", answer: "Os componentes e os trechos atendidos são definidos na avaliação e na proposta. A extensão do sistema e as condições de acesso precisam ser verificadas para estabelecer o escopo." },
      { question: "Qual deve ser a frequência de limpeza?", answer: "A frequência deve considerar a intensidade de uso, o tipo de preparo, o acúmulo de resíduos e as características do sistema. A avaliação ajuda a definir uma programação adequada à operação." },
    ]}
    related={[{ to: "/assistencia-multimarcas", label: "Assistência técnica" }, { to: "/contratos-pcm", label: "Contratos de manutenção" }]}
  />;
}
