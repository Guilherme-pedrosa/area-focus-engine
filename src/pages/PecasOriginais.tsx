import ServicePage from "@/components/institutional/ServicePage";

export default function PecasOriginais() {
  return <ServicePage
    slug="pecas-originais"
    title="Peças para equipamentos de cozinha profissional | WeDo Goiás e DF"
    description="Consulta e cotação de peças para equipamentos de cozinha profissional. Envie marca, modelo, foto da etiqueta e do componente para verificar aplicação e disponibilidade."
    breadcrumb="Peças e componentes"
    kicker="Peças para cozinhas profissionais"
    heading="Peças para equipamentos de cozinha profissional."
    introduction="Ajudamos a identificar o componente para o seu equipamento. Com a marca, o modelo e as referências da peça, consultamos aplicação, disponibilidade e condições de fornecimento."
    image={{ src: "/images/institucional/portfolio-pecas-v2.webp", alt: "Profissional conferindo componentes em prateleiras de peças", position: "65% 50%", caption: "Conferência de peças e componentes.", landscape: true }}
    action="Consultar uma peça"
    subject="Cotação de peças"
    overview={{
      title: "Informações para identificar a peça.",
      description: "Equipamentos de uma mesma marca podem usar componentes diferentes. Conferir os dados evita que uma semelhança visual seja tratada como compatibilidade.",
      items: [
        { title: "Marca e modelo", description: "Informe o fabricante e o modelo completo do equipamento." },
        { title: "Etiqueta de identificação", description: "Envie uma foto legível da etiqueta, incluindo número de série e dados elétricos quando disponíveis." },
        { title: "Foto e código da peça", description: "Mostre o componente, suas conexões e qualquer referência ou código gravado nele." },
        { title: "Local de entrega", description: "Informe a cidade e se a solicitação também envolve instalação pela equipe técnica." },
      ],
    }}
    process={{
      title: "Da consulta à separação do material.",
      description: "Cada cotação informa as condições do item identificado para a solicitação.",
      steps: [
        { title: "Identificação", description: "Conferência das informações do equipamento e das referências recebidas." },
        { title: "Consulta", description: "Verificação de aplicação, disponibilidade em estoque ou necessidade de encomenda." },
        { title: "Cotação", description: "Apresentação do item, valor, prazo e condições de fornecimento para aprovação." },
        { title: "Separação", description: "Conferência e preparação do material aprovado para entrega ou aplicação no serviço." },
      ],
    }}
    faqs={[
      { question: "Uma foto da peça é suficiente para fazer a cotação?", answer: "A foto ajuda, mas nem sempre permite identificar a aplicação. Envie também a marca, o modelo e a etiqueta do equipamento. O código da peça, quando disponível, ajuda na conferência." },
      { question: "Todas as peças estão disponíveis para pronta entrega?", answer: "A disponibilidade é consultada para cada item. A cotação informa se a peça está em estoque ou depende de encomenda, além do prazo e das condições de fornecimento." },
      { question: "Posso solicitar a instalação da peça?", answer: "Sim, você pode solicitar uma avaliação para instalação pela equipe técnica. O serviço é orçado conforme o equipamento, a localização e as condições do atendimento." },
    ]}
    related={[{ to: "/assistencia-multimarcas", label: "Assistência técnica" }, { to: "/contratos-pcm", label: "Contratos de manutenção" }]}
  />;
}
