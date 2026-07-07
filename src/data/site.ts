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
    "Estética avançada e harmonização facial com resultados naturais. Toxina botulínica, bioestimulador, fios de PDO, tecnologia HIFU e mais. Agende sua avaliação.",

  whatsapp: "5567992093403",
  whatsappMessage: "Olá! Gostaria de agendar uma avaliação.",

  // TODO: redes sociais reais
  instagram: "https://instagram.com/draizabelarocha",
  instagramHandle: "@draizabelarocha",

  // Endereço completo é enviado no agendamento; no site mostramos só a rua
  address: {
    street: "Avenida Afonso Pena",
  },

  hours: [
    { days: "Segunda a sexta", time: "9h às 19h" },
    { days: "Sábado", time: "9h30 às 13h" },
    { days: "Domingo", time: "Fechado" },
  ],

  register: "Biomédica Esteta, CRBM 62108",

  stats: [
    { prefix: "+", value: 2500, decimals: 0, label: "pacientes atendidos" },
    { prefix: "+", value: 3, decimals: 0, label: "anos de experiência" },
    // TODO: confirmar a nota de avaliação com a cliente
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
  hero: "/dra-hero.jpeg",
  // Fotos reais da Dra. (arquivos em public/)
  about: "/Doutora2.jpeg", // retrato (foto vertical) — seção Sobre
  atendimento: "/Doutora1.jpeg", // Dra. em atendimento — seção HIFU
  facial: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80",
  corporal: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80",
  avatar1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  avatar2: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  avatar3: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  og: "/dra-hero.jpeg",
};

// ------------------------------------------------------------
// Serviços — TODO: confirmar lista, descrições e valores
// ------------------------------------------------------------
export interface Service {
  icon:
    | "sparkle"
    | "droplet"
    | "lotus"
    | "waves"
    | "leaf"
    | "dots"
    | "focus"
    | "face"
    | "body"
    | "layers"
    | "nose"
    | "thread"
    | "light";
  name: string;
  description: string;
  price: string;
  featured?: boolean;
  // Se presente, o botão do card leva a uma âncora interna em vez do WhatsApp.
  anchor?: string;
}

export const services: Service[] = [
  {
    icon: "face",
    name: "Harmonização Facial",
    description:
      "Um conjunto de procedimentos personalizados que equilibram as proporções do rosto, realçando seus traços com naturalidade e elegância.",
    price: "Sob consulta",
    featured: true,
  },
  {
    icon: "sparkle",
    name: "Toxina Botulínica",
    description:
      "Suaviza linhas de expressão e previne novas rugas, preservando a naturalidade dos seus movimentos.",
    price: "Sob consulta",
  },
  {
    icon: "body",
    name: "Harmonização Glútea",
    description:
      "Realça o contorno e a firmeza dos glúteos, melhorando volume e sustentação sem cirurgia.",
    price: "Sob consulta",
  },
  {
    icon: "dots",
    name: "Microagulhamento",
    description:
      "Induz a renovação da pele, tratando cicatrizes de acne, poros dilatados, manchas e flacidez.",
    price: "Sob consulta",
  },
  {
    icon: "layers",
    name: "Peeling Químico",
    description:
      "Renova as camadas superficiais da pele, uniformiza o tom e devolve viço e maciez.",
    price: "Sob consulta",
  },
  {
    icon: "waves",
    name: "Perfiloplastia",
    description:
      "Redesenha o contorno do rosto de perfil, harmonizando queixo, mandíbula e pescoço.",
    price: "Sob consulta",
  },
  {
    icon: "nose",
    name: "Rinomodelação",
    description:
      "Corrige e refina o formato do nariz sem cirurgia, com resultado imediato e natural.",
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
    icon: "thread",
    name: "Fios de PDO",
    description:
      "Promovem efeito lifting e estímulo de colágeno, firmando a pele e redefinindo o contorno.",
    price: "Sob consulta",
  },
  {
    icon: "leaf",
    name: "Acompanhamento Skincare",
    description:
      "Rotina de cuidados personalizada, com orientação profissional para manter a saúde e o brilho da sua pele.",
    price: "Sob consulta",
  },
  {
    icon: "droplet",
    name: "Redução de Papada",
    description:
      "Afina o contorno facial reduzindo a gordura sob o queixo com enzimas, tecnologias e ativos.",
    price: "Sob consulta",
  },
  {
    icon: "focus",
    name: "Tecnologia HIFU",
    description:
      "Ultrassom microfocado que promove efeito lifting sem cortes nem agulhas, firmando o rosto e o corpo.",
    price: "Sob consulta",
    anchor: "#sonofocus",
  },
  {
    icon: "light",
    name: "LED Laser",
    description:
      "Terapia com luz que trata a acne, controla a oleosidade e estimula a renovação da pele.",
    price: "Sob consulta",
  },
];

// ------------------------------------------------------------
// Sonofocus HIFU — tratamento em destaque (conteúdo real da cliente)
// ------------------------------------------------------------
export const hifu = {
  eyebrow: "Tecnologia em destaque",
  title: "Sonofocus HIFU: lifting sem cortes nem agulhas",
  intro:
    "O Sonofocus HIFU utiliza ultrassom microfocado para tratar as camadas profundas da pele com segurança. Ele contrai as fibras de colágeno já existentes e estimula a produção de colágeno novo, unindo efeito lifting imediato a resultados que evoluem por meses.",
  image: "/hifu-procedimento.jpeg",
  advantages: [
    { title: "Não invasivo", text: "Sem cortes, cicatrizes ou anestesia geral." },
    { title: "Retorno imediato", text: "Você volta à rotina no mesmo dia, sem recuperação." },
    { title: "Resultados duradouros", text: "O colágeno novo permanece visível por muitos meses." },
    { title: "Segurança", text: "Atuação focada que preserva a camada superficial da pele." },
  ],
  facial: [
    { title: "Efeito lifting imediato", text: "Contrai as fibras de colágeno logo após a aplicação." },
    { title: "Estímulo de colágeno", text: "Produz colágeno novo por até 6 meses após a sessão." },
    { title: "Redução da flacidez", text: "Firma a pele do rosto, pescoço, colo e pálpebras." },
    { title: "Suavização de rugas", text: "Atenua linhas de expressão e o bigode chinês." },
    { title: "Definição do contorno", text: "Melhora a linha da mandíbula e reduz a papada." },
  ],
  corporal: [
    { title: "Redução de medidas", text: "Trata a gordura localizada com resultado definitivo." },
    { title: "Tratamento da celulite", text: "Melhora o aspecto de casca de laranja nas coxas e glúteos." },
    { title: "Firmeza corporal", text: "Combate a flacidez no abdômen, nos braços e em outras áreas." },
  ],
};

// ------------------------------------------------------------
// Sobre a profissional — história real da Dra. (primeira pessoa)
// ------------------------------------------------------------
export const about = {
  eyebrow: "Sobre a profissional",
  heading: "Prazer, sou a Dra. Izabela",
  paragraphs: [
    "Aos 17 anos, deixei Anastácio, no Mato Grosso do Sul, minha família e tudo o que conhecia para correr atrás de um sonho na área da saúde. Aos 20, me formei. Mas o diploma nunca foi o fim da jornada para mim, e sim o primeiro passo.",
    "Durante um ano e meio, atuei na rotina de cirurgias plásticas, acompanhando cada etapa do pós-operatório. Foi ali que aprofundei meu olhar sobre anatomia facial, cicatrização e a importância de um cuidado técnico e individualizado para cada paciente.",
    "Desde então, nunca parei de estudar. Acredito em uma estética sofisticada, natural e personalizada, capaz de valorizar a beleza de cada pessoa sem apagar a sua identidade. Cada planejamento é único, porque cada história também é.",
  ],
  quote: "Eu não transformo rostos. Revelo identidades.",
  credentials: [
    "Vivência de um ano e meio em cirurgia plástica e pós-operatório",
    "Especializada em harmonização facial e gerenciamento de pele",
    "Aperfeiçoamento contínuo em cursos e congressos",
    "Mais de 2.500 pacientes atendidos",
  ],
};

// ------------------------------------------------------------
// Como funciona — jornada da paciente
// ------------------------------------------------------------
export const steps = [
  {
    number: "01",
    title: "Avaliação personalizada",
    description:
      "Conversamos sobre seus objetivos e analisamos seu rosto e sua pele com atenção a cada detalhe, sem pressa e sem compromisso.",
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
// Antes & Depois — casos reais (arrastar para comparar).
// Cada item tem foto de antes e de depois do mesmo caso.
// ------------------------------------------------------------
export const beforeAfter = [
  {
    title: "Harmonização Facial",
    subtitle: "Contorno e perfil mais harmônicos",
    before: "/resultados/harmoni-antes.jpeg",
    after: "/resultados/harmoni-depois.jpeg",
  },
  {
    title: "Toxina Botulínica",
    subtitle: "Linhas da testa suavizadas",
    before: "/resultados/toxina-antes.jpeg",
    after: "/resultados/toxina-depois.jpeg",
  },
  {
    title: "Tecnologia HIFU",
    subtitle: "Rugas do olhar suavizadas",
    before: "/resultados/hifu-antes.jpeg",
    after: "/resultados/hifu-depois.jpeg",
  },
  {
    title: "Tratamento de Olheiras",
    subtitle: "Área dos olhos descansada",
    before: "/resultados/olheiras-antes.jpeg",
    after: "/resultados/olheiras-depois.jpeg",
  },
  {
    title: "Redução de Papada",
    subtitle: "Contorno do queixo e do pescoço mais firme",
    before: "/resultados/papada-antes.jpeg",
    after: "/resultados/papada-depois.jpeg",
  },
  {
    title: "Rejuvenescimento de Pele",
    subtitle: "Textura e viço renovados",
    before: "/resultados/rejuve-antes.jpeg",
    after: "/resultados/rejuve-depois.jpeg",
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
    text: "Resultado extremamente natural. Ninguém percebeu que eu “fiz algo”, só comentam que estou com uma ótima aparência. A Dra. Izabela é impecável do início ao fim.",
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
      "Sim. Gestantes, lactantes e pessoas com determinadas condições de saúde precisam de cuidados especiais. Por isso toda paciente passa por uma avaliação criteriosa antes de qualquer procedimento, garantindo total segurança.",
  },
  {
    question: "Preciso de avaliação antes de fechar um procedimento?",
    answer:
      "Sim. A avaliação é o momento em que analisamos a sua pele, entendemos as suas expectativas e montamos um plano de tratamento sob medida, sem compromisso e com total transparência sobre valores.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Aceitamos Pix, dinheiro e cartões de débito e crédito, com opções de parcelamento. As condições são apresentadas na avaliação, junto com o plano de tratamento.",
  },
];
