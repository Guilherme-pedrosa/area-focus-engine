import ServicePage from "@/components/institutional/ServicePage";

export default function AssistenciaMultimarcas() {
  return <ServicePage
    slug="assistencia-multimarcas"
    title="Assistência técnica para cozinhas profissionais em Goiás e DF | WeDo"
    description="Manutenção preventiva e corretiva de equipamentos de cozinha profissional em Goiás e DF. Diagnóstico, orçamento e execução com registro do serviço."
    breadcrumb="Assistência técnica"
    kicker="Manutenção multimarcas"
    heading="Assistência técnica para cozinhas profissionais."
    introduction="Do diagnóstico ao reparo, cuidamos dos equipamentos que fazem parte da sua operação. Atendimento técnico com orçamento para aprovação e registro do trabalho realizado."
    image={{ src: "/images/institucional/tecnico-forno.webp", alt: "Técnico da WeDo durante manutenção em um forno profissional", position: "center 45%", caption: "Manutenção de equipamentos realizada pela equipe WeDo." }}
    action="Solicitar assistência"
    subject="Assistência técnica"
    overview={{
      title: "Manutenção para os equipamentos da cozinha.",
      description: "Informe a marca, o modelo e a falha observada. Esses dados ajudam a preparar o atendimento e identificar os recursos necessários para a visita.",
      items: [
        { title: "Cocção", description: "Fornos combinados, fogões, fritadeiras, chapas e outros equipamentos de aquecimento." },
        { title: "Refrigeração", description: "Câmaras frias, balcões refrigerados, refrigeradores e equipamentos de conservação." },
        { title: "Lavagem", description: "Lavadoras profissionais, seus componentes e sistemas de operação." },
        { title: "Preparo", description: "Processadores, batedeiras, liquidificadores, cortadores e equipamentos de bancada." },
      ],
    }}
    process={{
      title: "Do diagnóstico ao registro do serviço.",
      description: "A execução segue o diagnóstico e o escopo aprovado para o equipamento.",
      steps: [
        { title: "Avaliação técnica", description: "Verificação do equipamento e registro da condição encontrada." },
        { title: "Orçamento e aprovação", description: "Apresentação dos serviços, das peças necessárias e das condições para execução." },
        { title: "Preparação e reparo", description: "Separação dos materiais e programação do trabalho conforme o que foi aprovado." },
        { title: "Registro do serviço", description: "Documentação do atendimento, com fotos e observações técnicas do trabalho realizado." },
      ],
    }}
    faqs={[
      { question: "Quais informações devo enviar para solicitar uma visita?", answer: "Envie a localização, a marca e o modelo do equipamento, uma descrição da falha e, se possível, fotos da etiqueta de identificação e do equipamento. Informe também como a falha está afetando a operação." },
      { question: "Vocês fazem manutenção preventiva e corretiva?", answer: "Sim. A manutenção corretiva atende falhas identificadas no equipamento. A preventiva pode ser programada conforme as condições de uso e as necessidades da cozinha, inclusive por contrato." },
      { question: "O reparo é executado assim que o técnico chega?", answer: "Primeiro avaliamos a condição do equipamento. A execução depende do diagnóstico, da aprovação do orçamento, das peças necessárias e das condições de acesso e trabalho." },
    ]}
    related={[{ to: "/contratos-pcm", label: "Contratos de manutenção" }, { to: "/pecas-originais", label: "Peças e componentes" }]}
  />;
}
