// ============================================================
// DADOS DO SITE — único arquivo que precisa ser editado quando
// a cliente enviar as informações reais. Tudo marcado com TODO.
// ============================================================

export const site = {
  name: "Dra. Izabela Rocha",
  shortName: "Izabela Rocha",
  tagline: "Estética Avançada",

  // TODO: trocar pelo domínio final quando definido (usado em canonical/OG)
  siteUrl: "https://izabelarocha.vercel.app",
  description:
    "Estética avançada e harmonização facial com resultados naturais. Toxina botulínica, preenchimento, bioestimuladores e mais. Agende sua avaliação.",

  // TODO: número real da cliente (formato: 55 + DDD + número, só dígitos)
  whatsapp: "5500000000000",
  whatsappMessage: "Olá! Gostaria de agendar uma avaliação.",

  // TODO: redes sociais reais
  instagram: "https://instagram.com/draizabelarocha",
  instagramHandle: "@draizabelarocha",

  // TODO: endereço real
  address: {
    street: "Av. Exemplo, 1234 — Sala 56",
    district: "Centro",
    city: "Sua Cidade — UF",
    zip: "00000-000",
  },

  // TODO: horário real
  hours: [
    { days: "Segunda a sexta", time: "9h às 19h" },
    { days: "Sábado", time: "9h às 14h" },
    { days: "Domingo", time: "Fechado" },
  ],

  // TODO: trocar pelo embed do endereço real (Google Maps > Compartilhar > Incorporar mapa)
  mapsEmbed:
    "https://www.google.com/maps?q=Avenida+Paulista,+S%C3%A3o+Paulo&output=embed",
  mapsLink: "https://www.google.com/maps?q=Avenida+Paulista,+S%C3%A3o+Paulo",

  // TODO: registro profissional real
  register: "Biomédica Esteta — CRBM 0.0000",

  // TODO: números reais da profissional
  stats: [
    { prefix: "+", value: 10, decimals: 0, label: "anos de experiência" },
    { prefix: "+", value: 2000, decimals: 0, label: "procedimentos realizados" },
    { prefix: "", value: 5, decimals: 1, label: "avaliação das pacientes" },
  ],
};

/** Monta o link do WhatsApp com mensagem pré-preenchida. */
export function waLink(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

// ------------------------------------------------------------
// Imagens (placeholders Unsplash — trocar por fotos reais)
// ------------------------------------------------------------
export const images = {
  hero: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1100&q=80",
  about: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=80",
  facial: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80",
  corporal: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80",
  ambiente1: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80",
  ambiente2: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=1200&q=80",
  avatar1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  avatar2: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  avatar3: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  og: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1200&q=80",
};

// ------------------------------------------------------------
// Serviços — TODO: confirmar lista, descrições e valores
// ------------------------------------------------------------
export interface Service {
  icon: "sparkle" | "droplet" | "lotus" | "waves" | "leaf" | "dots";
  name: string;
  description: string;
  price: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    icon: "sparkle",
    name: "Toxina Botulínica",
    description:
      "Suaviza linhas de expressão e previne novas rugas, preservando a naturalidade dos seus movimentos.",
    price: "Sob consulta",
    featured: true,
  },
  {
    icon: "droplet",
    name: "Preenchimento com Ácido Hialurônico",
    description:
      "Reposição de volume e contorno para lábios, olheiras e sulcos, com resultado imediato e harmônico.",
    price: "Sob consulta",
  },
  {
    icon: "lotus",
    name: "Bioestimulador de Colágeno",
    description:
      "Estimula a produção natural de colágeno, devolvendo firmeza, sustentação e viço à pele.",
    price: "Sob consulta",
  },
  {
    icon: "waves",
    name: "Skinbooster",
    description:
      "Hidratação profunda injetável que melhora textura, elasticidade e luminosidade da pele.",
    price: "Sob consulta",
  },
  {
    icon: "leaf",
    name: "Limpeza de Pele Premium",
    description:
      "Protocolo completo de higienização, esfoliação e hidratação para uma pele renovada e saudável.",
    price: "Sob consulta",
  },
  {
    icon: "dots",
    name: "Microagulhamento",
    description:
      "Induz a renovação da pele, tratando cicatrizes de acne, poros dilatados, manchas e flacidez.",
    price: "Sob consulta",
  },
];

// ------------------------------------------------------------
// Como funciona — jornada da paciente
// ------------------------------------------------------------
export const steps = [
  {
    number: "01",
    title: "Avaliação personalizada",
    description:
      "Conversamos sobre seus objetivos e analisamos seu rosto e sua pele com atenção a cada detalhe — sem pressa e sem compromisso.",
  },
  {
    number: "02",
    title: "Plano sob medida",
    description:
      "Você recebe um protocolo claro, com indicações, etapas e valores transparentes. Nada de procedimentos desnecessários.",
  },
  {
    number: "03",
    title: "Acompanhamento contínuo",
    description:
      "Retornos programados para acompanhar a evolução e garantir que o resultado permaneça natural e duradouro.",
  },
];

// ------------------------------------------------------------
// Antes & Depois — OBRIGATÓRIO trocar por casos reais com
// autorização assinada antes de publicar em produção.
// ------------------------------------------------------------
export const beforeAfter = [
  {
    title: "Harmonização Facial",
    subtitle: "Protocolo personalizado — resultado após 30 dias",
    image: images.facial,
  },
  {
    title: "Rejuvenescimento de Pele",
    subtitle: "Bioestimulador de colágeno — 2 sessões",
    image: images.corporal,
  },
];

// ------------------------------------------------------------
// Depoimentos — TODO: substituir por depoimentos reais autorizados
// ------------------------------------------------------------
export const testimonials = [
  {
    name: "Mariana C.",
    procedure: "Toxina Botulínica",
    avatar: images.avatar1,
    text: "Resultado extremamente natural — ninguém percebeu que eu “fiz algo”, só comentam que estou com uma ótima aparência. A Dra. Izabela é impecável do início ao fim.",
  },
  {
    name: "Fernanda L.",
    procedure: "Preenchimento Labial",
    avatar: images.avatar2,
    text: "Eu tinha medo de ficar artificial, mas o resultado ficou delicado e elegante. Me senti segura e acolhida em todas as etapas do atendimento.",
  },
  {
    name: "Patrícia S.",
    procedure: "Bioestimulador de Colágeno",
    avatar: images.avatar3,
    text: "Atendimento acolhedor, espaço lindo e um resultado que devolveu a minha autoestima. Recomendo de olhos fechados para qualquer amiga.",
  },
];

// ------------------------------------------------------------
// FAQ — TODO: validar respostas com a cliente
// ------------------------------------------------------------
export const faqs = [
  {
    question: "Os procedimentos doem?",
    answer:
      "A maioria dos procedimentos causa apenas um desconforto leve e passageiro. Utilizamos anestésicos tópicos, agulhas ultrafinas e técnicas que priorizam o seu conforto durante toda a sessão.",
  },
  {
    question: "Quanto tempo dura o resultado?",
    answer:
      "Depende do procedimento e do organismo de cada paciente. A toxina botulínica costuma durar de 4 a 6 meses, preenchimentos de 12 a 18 meses e bioestimuladores têm efeito progressivo que se mantém por mais tempo. Na avaliação, você recebe uma previsão personalizada.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "Alguns tratamentos apresentam resultado em sessão única; outros, como microagulhamento e bioestimuladores, funcionam em protocolos de 2 a 4 sessões. Tudo é definido na avaliação, de acordo com o seu objetivo.",
  },
  {
    question: "Existe alguma contraindicação?",
    answer:
      "Sim — gestantes, lactantes e pessoas com determinadas condições de saúde precisam de cuidados especiais. Por isso toda paciente passa por uma avaliação criteriosa antes de qualquer procedimento, garantindo total segurança.",
  },
  {
    question: "Preciso de avaliação antes de fechar um procedimento?",
    answer:
      "Sim. A avaliação é o momento em que analisamos a sua pele, entendemos as suas expectativas e montamos um plano de tratamento sob medida — sem compromisso e com total transparência sobre valores.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Aceitamos Pix, dinheiro e cartões de débito e crédito, com opções de parcelamento. As condições são apresentadas na avaliação, junto com o plano de tratamento.",
  },
];
