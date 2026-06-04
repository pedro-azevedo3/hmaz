export const HMAZ_WHATS = "5583999219127";

export function waLink(produto) {
  const msg = `Olá, Grupo HMAZ! Tenho interesse no produto "${produto}". Poderiam me passar mais informações e valores?`;
  return `https://wa.me/${HMAZ_WHATS}?text=${encodeURIComponent(msg)}`;
}

export function waLinkGeneric(assunto) {
  const msg = `Olá, Grupo HMAZ! Gostaria de falar com a equipe de vendas${assunto ? ` sobre ${assunto}` : ""}.`;
  return `https://wa.me/${HMAZ_WHATS}?text=${encodeURIComponent(msg)}`;
}

export const MAQUINARIO = [
  { cod: "EXT-500",  nome: "Extrusora EXT-500",             spec: "Ração extrusada • 500 kg/h",         tag: "Linha de produção", image: "/ex500.jpg" },
  { cod: "MM-30",    nome: "Moinho de Martelo MM-30",       spec: "Moagem de grãos • 1.500 kg/h",       tag: "Moagem",  image: "/mm30.webp" },
  { cod: "MH-1000",  nome: "Misturador Horizontal MH-1000", spec: "Homogeneização • 1.000 kg/batelada", tag: "Mistura", image: "/mh1000.webp" },
  { cod: "PEL-200",  nome: "Peletizadora PEL-200",          spec: "Peletização • 800 kg/h",             tag: "Peletização" },
  { cod: "ENS-25",   nome: "Ensacadeira ENS-25",            spec: "Envase automático • 600 sacos/h",    tag: "Envase" },
  { cod: "TH-6",     nome: "Transportador Helicoidal TH-6", spec: "Transporte de grãos • 6 m",          tag: "Transporte" },
  { cod: "SR-2",     nome: "Secador Rotativo SR-2",         spec: "Secagem de grãos • 2 t/h",           tag: "Secagem" },
  { cod: "BD-50",    nome: "Balança Dosadora BD-50",        spec: "Dosagem de precisão • ±50 g",        tag: "Dosagem" },
];

export const RACOES = {
  aves: {
    label: "Aves",
    desc: "Nutrição para postura e corte — galinhas, frangos e pintos.",
    itens: [
      { cod: "AV-POS", nome: "Ração Postura Premium",    spec: "Poedeiras • 16% PB • cálcio reforçado" },
      { cod: "AV-INI", nome: "Ração Inicial Corte",      spec: "Pintos 1–21 dias • 22% PB" },
      { cod: "AV-CRE", nome: "Ração Crescimento Aves",   spec: "Frangos de corte • 19% PB" },
      { cod: "AV-CAI", nome: "Ração Caipira Natural",    spec: "Aves caipiras • 100% vegetal" },
      { cod: "AV-FAR", nome: "Farelo Proteico Aves",     spec: "Suplemento • 24% PB" },
    ],
  },
  equinos: {
    label: "Equinos",
    desc: "Rações para cavalos atletas, manutenção e potros em crescimento.",
    itens: [
      { cod: "EQ-PER", nome: "Ração Equinos Performance", spec: "Cavalos atletas • 14% PB • alta energia" },
      { cod: "EQ-MAN", nome: "Ração Equinos Manutenção",  spec: "Adultos • 12% PB" },
      { cod: "EQ-POT", nome: "Ração Potros Crescimento",  spec: "Potros • 16% PB • minerais quelatados" },
      { cod: "EQ-FIB", nome: "Ração Fibra Plus",          spec: "Digestão • alto teor de fibra" },
      { cod: "EQ-NUC", nome: "Núcleo Mineral Equinos",    spec: "Suplemento mineral vitamínico" },
    ],
  },
  bovinos: {
    label: "Bovinos",
    desc: "Nutrição para gado de leite, confinamento e suplementação mineral.",
    itens: [
      { cod: "BO-LEI", nome: "Ração Bovinos Leite",    spec: "Vacas leiteiras • 20% PB" },
      { cod: "BO-CON", nome: "Ração Confinamento",     spec: "Engorda • 14% PB • alta energia" },
      { cod: "BO-CRI", nome: "Ração Cria & Recria",    spec: "Bezerros • 18% PB" },
      { cod: "BO-NUC", nome: "Núcleo Mineral Bovinos", spec: "Suplemento mineral • pasto" },
      { cod: "BO-PRO", nome: "Proteinado de Seca",     spec: "Suplemento proteico • período seco" },
    ],
  },
};

export const DEPOIMENTOS = [
  { nome: "João Pereira",       papel: "Avicultor — Patos/PB",        texto: "Troquei minha linha de produção pela extrusora da HMAZ e a economia de grão foi imediata. Equipe técnica presente do começo ao fim." },
  { nome: "Marina Albuquerque", papel: "Haras Santa Fé — Sousa/PB",   texto: "As rações para equinos mantêm meus animais com ótima condição corporal. Entrega sempre no prazo e atendimento direto no WhatsApp." },
  { nome: "Cleiton Ramos",      papel: "Pecuarista — Cajazeiras/PB",  texto: "Comprei o moinho e o misturador e hoje produzo minha própria ração. Investimento que se pagou em menos de um ano." },
];

export const ESTATISTICAS = [
  { num: "20+",    label: "Anos no campo" },
  { num: "1.200+", label: "Clientes atendidos" },
  { num: "30+",    label: "Modelos de máquinas" },
  { num: "100%",   label: "Suporte técnico" },
];
