/**
 * Catálogo de tipos atendidos. A presença de uma marca não declara credenciamento,
 * autorização, cobertura de todos os produtos ou disponibilidade de uma peça.
 * `sources` é metadado editorial interno: não renderizar suas referências na UI.
 * Não transportar modelos, capacidades ou promessas das páginas antigas para este catálogo.
 */
export const equipmentCategories = [
  { id: "coccao", label: "Cocção" },
  { id: "refrigeracao", label: "Refrigeração" },
  { id: "lavagem", label: "Lavagem" },
  { id: "preparo", label: "Preparo" },
  { id: "conservacao", label: "Conservação a quente" },
  { id: "vacuo", label: "Embalagem a vácuo" },
] as const;

export type EquipmentCategoryId = (typeof equipmentCategories)[number]["id"];

interface EquipmentTypeDefinition {
  id: string;
  label: string;
  category: EquipmentCategoryId;
}

export const equipmentTypes = [
  { id: "fornos-combinados", label: "Fornos combinados", category: "coccao" },
  { id: "coccao-multifuncional", label: "Sistemas multifuncionais de cocção", category: "coccao" },
  { id: "fogoes-industriais", label: "Fogões industriais", category: "coccao" },
  { id: "chapas-profissionais", label: "Chapas profissionais", category: "coccao" },
  { id: "fritadeiras", label: "Fritadeiras", category: "coccao" },
  { id: "char-broilers", label: "Char broilers e grills", category: "coccao" },
  { id: "salamandras", label: "Salamandras", category: "coccao" },
  { id: "fornos-de-esteira", label: "Fornos de esteira", category: "coccao" },
  { id: "fornos-de-conveccao", label: "Fornos de convecção", category: "coccao" },
  { id: "fornos-de-lastro", label: "Fornos de lastro", category: "coccao" },
  { id: "fornos-turbo", label: "Fornos turbo", category: "coccao" },
  { id: "fornos-rotativos", label: "Fornos rotativos", category: "coccao" },
  { id: "fornos-de-pizza", label: "Fornos de pizza", category: "coccao" },
  { id: "fornos-rapidos", label: "Fornos rápidos", category: "coccao" },
  { id: "fornos-de-panificacao", label: "Fornos de panificação", category: "coccao" },
  { id: "refrigeradores-verticais", label: "Refrigeradores verticais", category: "refrigeracao" },
  { id: "refrigeradores-horizontais", label: "Refrigeradores horizontais", category: "refrigeracao" },
  { id: "bancadas-refrigeradas", label: "Bancadas e mesas refrigeradas", category: "refrigeracao" },
  { id: "camaras-frias", label: "Câmaras frias modulares", category: "refrigeracao" },
  { id: "mini-camaras-refrigeradas", label: "Mini-câmaras refrigeradas", category: "refrigeracao" },
  { id: "balcoes-refrigerados", label: "Balcões refrigerados", category: "refrigeracao" },
  { id: "expositores-refrigerados", label: "Vitrines e expositores refrigerados", category: "refrigeracao" },
  { id: "cervejeiras", label: "Cervejeiras", category: "refrigeracao" },
  { id: "freezers", label: "Freezers", category: "refrigeracao" },
  { id: "ilhas-de-congelados", label: "Ilhas de congelados", category: "refrigeracao" },
  { id: "pass-through-refrigerados", label: "Pass-through refrigerados", category: "refrigeracao" },
  { id: "abatedores-de-temperatura", label: "Abatedores de temperatura", category: "refrigeracao" },
  { id: "ultracongeladores", label: "Ultracongeladores", category: "refrigeracao" },
  { id: "resfriadores-de-massas", label: "Resfriadores de massas", category: "refrigeracao" },
  { id: "maquinas-de-gelo", label: "Máquinas de gelo", category: "refrigeracao" },
  { id: "dispensadores-de-gelo", label: "Dispensadores de gelo", category: "refrigeracao" },
  { id: "lavadoras-de-loucas-frontais", label: "Lavadoras de louças de abertura frontal", category: "lavagem" },
  { id: "lavadoras-de-loucas-capota", label: "Lavadoras de louças de capota", category: "lavagem" },
  { id: "lavadoras-de-loucas-passagem", label: "Lavadoras de louças de passagem", category: "lavagem" },
  { id: "lavadoras-de-loucas-esteira", label: "Lavadoras de louças de esteira", category: "lavagem" },
  { id: "lavadoras-de-utensilios", label: "Lavadoras de utensílios e panelas", category: "lavagem" },
  { id: "amassadeiras", label: "Amassadeiras", category: "preparo" },
  { id: "divisoras-de-massas", label: "Divisoras de massas", category: "preparo" },
  { id: "divisoras-boleadoras", label: "Divisoras boleadoras", category: "preparo" },
  { id: "modeladoras-de-paes", label: "Modeladoras de pães", category: "preparo" },
  { id: "cilindros-laminadores", label: "Cilindros laminadores", category: "preparo" },
  { id: "batedeiras-planetarias", label: "Batedeiras planetárias", category: "preparo" },
  { id: "camaras-de-fermentacao", label: "Câmaras de fermentação", category: "preparo" },
  { id: "processadores-de-alimentos", label: "Processadores de alimentos", category: "preparo" },
  { id: "cutters", label: "Cutters", category: "preparo" },
  { id: "cortadores-de-vegetais", label: "Cortadores de vegetais", category: "preparo" },
  { id: "blixers", label: "Blixer e processadores para texturas modificadas", category: "preparo" },
  { id: "liquidificadores-industriais", label: "Liquidificadores industriais", category: "preparo" },
  { id: "cortadores-de-frios", label: "Cortadores de frios", category: "preparo" },
  { id: "moedores-de-carne", label: "Moedores de carne", category: "preparo" },
  { id: "misturadores-de-alimentos", label: "Misturadores de alimentos", category: "preparo" },
  { id: "descascadores-de-batata", label: "Descascadores de batata", category: "preparo" },
  { id: "extratores-de-suco", label: "Extratores de suco", category: "preparo" },
  { id: "estufas-aquecidas", label: "Estufas aquecidas", category: "conservacao" },
  { id: "banhos-maria", label: "Banhos-maria", category: "conservacao" },
  { id: "rechauds", label: "Réchauds", category: "conservacao" },
  { id: "pass-through-aquecidos", label: "Pass-through aquecidos", category: "conservacao" },
  { id: "conservacao-a-quente", label: "Sistemas de conservação a quente", category: "conservacao" },
  { id: "seladoras-a-vacuo", label: "Seladoras a vácuo de câmara", category: "vacuo" },
] as const satisfies readonly EquipmentTypeDefinition[];

export type EquipmentType = (typeof equipmentTypes)[number];
export type EquipmentTypeId = EquipmentType["id"];

export interface EquipmentCatalogSource {
  kind: "site" | "presentation" | "user-photo" | "manufacturer";
  reference: string;
  detail?: string;
}

export interface EquipmentBrand {
  /** Slug único usado na âncora /marcas-e-equipamentos#id. */
  id: string;
  name: string;
  aliases?: readonly string[];
  equipmentTypeIds: readonly EquipmentTypeId[];
  pageHref?: string;
  /** Referências editoriais internas, não destinadas à interface pública. */
  sources: readonly EquipmentCatalogSource[];
}

const siteSource = (file: string, detail = "Seção de equipamentos; somente os tipos, sem modelos ou credenciamento."): EquipmentCatalogSource => ({
  kind: "site", reference: `src/pages/${file}.tsx`, detail,
});

export const equipmentBrands: readonly EquipmentBrand[] = [
  {
    id: "becker", name: "Becker", pageHref: "/assistencia-tecnica-becker",
    equipmentTypeIds: ["amassadeiras", "divisoras-de-massas", "divisoras-boleadoras", "modeladoras-de-paes", "cilindros-laminadores", "camaras-de-fermentacao", "fornos-turbo", "resfriadores-de-massas"],
    sources: [siteSource("AssistenciaTecnicaBecker")],
  },
  {
    id: "cozil", name: "Cozil", pageHref: "/assistencia-tecnica-cozil",
    equipmentTypeIds: ["fogoes-industriais", "bancadas-refrigeradas", "camaras-frias", "estufas-aquecidas", "pass-through-aquecidos"],
    sources: [siteSource("AssistenciaTecnicaCozil", "Fogões, bancada/câmara refrigerada, estufas e pass-through aquecidos. Pias, mobiliário e exaustão não foram forçados a uma categoria de equipamento ativo.")],
  },
  {
    id: "g-paniz", name: "G.Paniz", aliases: ["G Paniz", "Gpaniz"], pageHref: "/assistencia-tecnica-gpaniz",
    equipmentTypeIds: ["amassadeiras", "batedeiras-planetarias", "cilindros-laminadores", "cortadores-de-frios", "moedores-de-carne", "misturadores-de-alimentos"],
    sources: [siteSource("AssistenciaTecnicaGpaniz")],
  },
  {
    id: "gelopar", name: "Gelopar", pageHref: "/assistencia-tecnica-gelopar",
    equipmentTypeIds: ["refrigeradores-verticais", "balcoes-refrigerados", "expositores-refrigerados", "cervejeiras", "mini-camaras-refrigeradas", "freezers", "ilhas-de-congelados"],
    sources: [
      siteSource("AssistenciaTecnicaGelopar"),
      { kind: "manufacturer", reference: "https://www.gelopar.com.br/pre-categoria-complementos-diversos", detail: "Mini-câmaras reais; não repetir a classificação antiga como câmaras frias modulares." },
      { kind: "manufacturer", reference: "https://pub.gelopar.com.br/pandora/catalogos/25-26-Catalogo-Gelopar-Revendas.pdf", detail: "Catálogo, página 239: mini-câmara refrigerada para açougue." },
    ],
  },
  {
    id: "hobart", name: "Hobart", pageHref: "/assistencia-tecnica-hobart",
    equipmentTypeIds: ["lavadoras-de-loucas-frontais", "lavadoras-de-loucas-passagem"],
    sources: [siteSource("AssistenciaTecnicaHobart")],
  },
  {
    id: "hoshizaki", name: "Hoshizaki", pageHref: "/assistencia-tecnica-hoshizaki",
    equipmentTypeIds: ["maquinas-de-gelo", "dispensadores-de-gelo"],
    sources: [siteSource("AssistenciaTecnicaHoshizaki", "Máquinas e dispensadores de gelo, sem reproduzir siglas/modelos ou tratar um reservatório passivo como máquina com manutenção própria.")],
  },
  {
    id: "imbera", name: "Imbera", pageHref: "/assistencia-tecnica-imbera",
    equipmentTypeIds: ["refrigeradores-verticais", "cervejeiras", "freezers", "expositores-refrigerados"],
    sources: [siteSource("AssistenciaTecnicaImbera")],
  },
  {
    id: "irinox", name: "Irinox", pageHref: "/assistencia-tecnica-irinox",
    equipmentTypeIds: ["abatedores-de-temperatura", "ultracongeladores"],
    sources: [siteSource("AssistenciaTecnicaIrinox", "Abatedores multifuncionais com ciclos de resfriamento e congelamento; sem transpor capacidades dos modelos antigos.")],
  },
  {
    id: "macom", name: "Macom", aliases: ["Aços Macom"], pageHref: "/assistencia-tecnica-macom",
    equipmentTypeIds: ["fogoes-industriais", "chapas-profissionais", "fritadeiras", "refrigeradores-horizontais", "expositores-refrigerados"],
    sources: [
      siteSource("AssistenciaTecnicaMacom", "Página corrigida para usar os tipos deste catálogo e as fontes oficiais abaixo. A antiga lista de panificação não foi usada para mapear os tipos."),
      { kind: "manufacturer", reference: "https://www.hoshizakimacom.com.br/produtos/", detail: "Tipos de cocção, refrigeração e exposição. Não transferir automaticamente produtos de revenda ou máquinas da marca Hoshizaki para Macom." },
      { kind: "manufacturer", reference: "https://www.hoshizakimacom.com.br/produto/fritadeira-economica-a-gas/" },
      { kind: "manufacturer", reference: "https://www.hoshizakimacom.com.br/wp-content/uploads/2019/09/Refrigerador-Horizontal-Comercial-Manual.pdf", detail: "Manual de refrigerador horizontal identificado como Macom." },
    ],
  },
  {
    id: "middleby", name: "Middleby", pageHref: "/assistencia-tecnica-middleby",
    equipmentTypeIds: ["fornos-de-esteira", "fornos-de-conveccao", "chapas-profissionais", "salamandras", "fritadeiras", "fogoes-industriais"],
    sources: [siteSource("AssistenciaTecnicaMiddleby", "Página trata o grupo Middleby e suas linhas de cocção. Não criar credenciamento ou páginas independentes para suas marcas integrantes.")],
  },
  {
    id: "netter", name: "Netter", pageHref: "/assistencia-tecnica-netter",
    equipmentTypeIds: ["lavadoras-de-loucas-frontais", "lavadoras-de-utensilios"],
    sources: [siteSource("AssistenciaTecnicaNetter", "Lavadoras de louças e utensílios. Gavetas organizadoras são acessórios e ficaram fora do catálogo de máquinas.")],
  },
  {
    id: "pratica", name: "Prática", pageHref: "/assistencia-tecnica-pratica",
    equipmentTypeIds: ["fornos-combinados", "fornos-rapidos", "lavadoras-de-loucas-frontais", "abatedores-de-temperatura", "ultracongeladores"],
    sources: [
      siteSource("AssistenciaTecnicaPratica"),
      { kind: "manufacturer", reference: "https://www.praticabr.com/fornos-combinados", detail: "Tipo confirmado, sem repetir a linha FORST descrita na página antiga." },
      { kind: "manufacturer", reference: "https://www.praticabr.com/lavadoras-de-loucas", detail: "Lavadoras PRCOP confirmadas. Não reproduzir modelo 704 ou capacidades da página antiga." },
      { kind: "manufacturer", reference: "https://www.praticabr.com/ultracongeladores", detail: "Resfriamento rápido e ultracongelamento confirmados." },
    ],
  },
  {
    id: "progas", name: "Progás", pageHref: "/assistencia-tecnica-progas",
    equipmentTypeIds: ["fogoes-industriais", "chapas-profissionais", "fritadeiras", "char-broilers", "banhos-maria", "estufas-aquecidas", "fornos-de-pizza", "rechauds"],
    sources: [siteSource("AssistenciaTecnicaProgas", "Tipos da seção de equipamentos Progás. Não inferir que toda a linha de outra marca do grupo é equivalente.")],
  },
  {
    id: "ramalhos", name: "Ramalhos", pageHref: "/assistencia-tecnica-ramalhos",
    equipmentTypeIds: ["fornos-de-lastro", "fornos-turbo", "fornos-rotativos", "camaras-de-fermentacao"],
    sources: [siteSource("AssistenciaTecnicaRamalhos")],
  },
  {
    id: "rational", name: "Rational", pageHref: "/assistencia-tecnica-rational",
    equipmentTypeIds: ["fornos-combinados", "coccao-multifuncional"],
    sources: [siteSource("AssistenciaTecnicaRational", "Fornos combinados e sistema de cocção multifuncional. UltraVent é exaustão e não foi classificado como forno.")],
  },
  {
    id: "robot-coupe", name: "Robot-Coupe", aliases: ["Robot Coupe", "Robotcoupe"], pageHref: "/assistencia-tecnica-robot-coupe",
    equipmentTypeIds: ["processadores-de-alimentos", "cutters", "cortadores-de-vegetais", "blixers"],
    sources: [
      siteSource("AssistenciaTecnicaRobotCoupe"),
      { kind: "manufacturer", reference: "https://www.robot-coupe.com/robot-coupe-global/Page%20Documentation/March%C3%A9s/USA/Healthcare%20USA.pdf", detail: "Blixer é tratado como processamento para texturas modificadas; não como liquidificador industrial genérico." },
    ],
  },
  {
    id: "rodriaco", name: "Rodriaço", pageHref: "/assistencia-tecnica-rodriaco",
    equipmentTypeIds: ["bancadas-refrigeradas", "pass-through-refrigerados", "pass-through-aquecidos", "expositores-refrigerados", "camaras-frias"],
    sources: [siteSource("AssistenciaTecnicaRodriaco", "Bancadas/mesas, pass-through refrigerado e aquecido, vitrines/open coolers e câmaras modulares. Mobiliário passivo não foi incluído como máquina.")],
  },
  {
    id: "selovac", name: "Selovac",
    equipmentTypeIds: ["seladoras-a-vacuo"],
    sources: [{ kind: "user-photo", reference: "Portfólio enviado pelo usuário: seladora de câmara Selovac, modelo 200.", detail: "Foto confirma o tipo e a marca. O número do modelo é apenas referência interna, sem extrapolar para toda a linha de embaladoras." }],
  },
  {
    id: "skymsen", name: "Skymsen", pageHref: "/assistencia-tecnica-skymsen",
    equipmentTypeIds: ["processadores-de-alimentos", "liquidificadores-industriais", "cortadores-de-frios", "moedores-de-carne", "descascadores-de-batata", "extratores-de-suco"],
    sources: [siteSource("AssistenciaTecnicaSkymsen", "Somente os tipos descritos com equipamentos concretos na seção: processadores, liquidificadores, cortadores, moedores, descascadores e extratores.")],
  },
  {
    id: "tramontina", name: "Tramontina", pageHref: "/assistencia-tecnica-tramontina",
    equipmentTypeIds: ["fogoes-industriais", "chapas-profissionais", "fritadeiras", "banhos-maria"],
    sources: [siteSource("AssistenciaTecnicaTramontina")],
  },
  {
    id: "unox", name: "Unox", pageHref: "/assistencia-tecnica-unox",
    equipmentTypeIds: ["fornos-combinados", "fornos-de-panificacao", "fornos-rapidos", "conservacao-a-quente"],
    sources: [siteSource("AssistenciaTecnicaUnox", "CHEFTOP, BAKERTOP e fornos rápidos por tipo; EVEREO corresponde à conservação a quente.")],
  },
  {
    id: "vulcan", name: "Vulcan", pageHref: "/assistencia-tecnica-vulcan",
    equipmentTypeIds: ["fogoes-industriais", "chapas-profissionais", "fritadeiras", "char-broilers"],
    sources: [siteSource("AssistenciaTecnicaVulcan")],
  },
  {
    id: "winterhalter", name: "Winterhalter", pageHref: "/assistencia-tecnica-winterhalter",
    equipmentTypeIds: ["lavadoras-de-loucas-frontais", "lavadoras-de-loucas-capota", "lavadoras-de-loucas-esteira", "lavadoras-de-utensilios"],
    sources: [siteSource("AssistenciaTecnicaWinterhalter")],
  },
];

export function normalizeEquipmentSearch(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function getBrandEquipment(brandOrId: EquipmentBrand | string): EquipmentType[] {
  const brand = typeof brandOrId === "string" ? equipmentBrands.find((item) => item.id === brandOrId) : brandOrId;
  if (!brand) return [];
  return brand.equipmentTypeIds.flatMap((id) => {
    const equipment = equipmentTypes.find((item) => item.id === id);
    return equipment ? [equipment] : [];
  });
}

export function getBrandCategories(brandOrId: EquipmentBrand | string): EquipmentCategoryId[] {
  const ids = new Set(getBrandEquipment(brandOrId).map((item) => item.category));
  return equipmentCategories.filter((category) => ids.has(category.id)).map((category) => category.id);
}

const equipmentSearchAliases: Partial<Record<EquipmentTypeId, readonly string[]>> = {
  "fogoes-industriais": ["fogão industrial"],
  "modeladoras-de-paes": ["modeladora de pão"],
};

/** Busca por marca, aliases ou tipo; filtros de categoria e texto se combinam. */
export function searchEquipmentBrands(query = "", category?: EquipmentCategoryId): EquipmentBrand[] {
  const terms = normalizeEquipmentSearch(query).split(" ").filter(Boolean);
  return equipmentBrands.filter((brand) => {
    const equipment = getBrandEquipment(brand).filter((item) => !category || item.category === category);
    if (!equipment.length) return false;
    const searchable = normalizeEquipmentSearch([
      brand.name,
      ...(brand.aliases ?? []),
      ...equipment.flatMap((item) => [item.label, ...(equipmentSearchAliases[item.id] ?? [])]),
    ].join(" "));
    return terms.every((term) => searchable.includes(term));
  });
}

export const equipmentCatalogStats = {
  brands: equipmentBrands.length,
  equipmentTypes: equipmentTypes.length,
  categories: equipmentCategories.length,
} as const;
