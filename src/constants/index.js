import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  benefitImage1,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Organização",
    url: "#organizacao",
  },
  {
    id: "1",
    title: "Projetos",
    url: "#projetos",
  },
  {
    id: "2",
    title: "Notícias",
    url: "#news",
  },
  {
    id: "3",
    title: "Missão",
    url: "#missao",
  },
  {
    id: "4",
    title: "Entrar",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText1 =
  "Contribuir, através da cooperação, da inovação e do empreendedorismo, com o desenvolvimento econômico e sustentável de Frutal.";

export const collabText2 =
  "Frutal como um município próspero, sustentável e com alta qualidade de vida para todos os seus habitantes.";

export const collabText3 =
  "Sustentabilidade, inovação, colaboração, transparência, resiliência e excelência - guiam a missão de promover um futuro equilibrado e próspero para Frutal.";

export const collabText4 =
  "O CODESF, entidade sem fins lucrativos, tem a missão de promover, incentivar, e acompanhar planos, programas e projetos voltados para o desenvolvimento da cidade de Frutal.";

export const collabContent = [
  {
    id: "0",
    title: "Missão",
    text: collabText1,
  },
  {
    id: "1",
    title: "Visão",
    text: collabText2,
  },
  {
    id: "2",
    title: "Valores",
    text: collabText3,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Atração de Investimentos",
    text: "Potencializando negócios e recursos para o crescimento econômico de Frutal.",
    backgroundUrl: benefitCard1, 
    iconUrl: benefitIcon1,
    imageUrl: benefitImage1,
    light: true,
  },
  {
    id: "1",
    title: "Desenvolvimento Urbano",
    text: "Desenhando o futuro de Frutal: uma cidade mais verde, inteligente e conectada.",
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Meio Ambiente e Saneamento Básico",
    text: "Sustentabilidade ambiental: construindo um futuro em harmonia com a natureza.",
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage3,
    light: true,
  },
  {
    id: "3",
    title: "Matrizes Energéticas",
    text: "Energia para o futuro: garantindo o fornecimento de energia limpa, confiável e acessível para as necessidades da região.",
    backgroundUrl: benefitCard4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage4,
    light: true,
  },
  {
    id: "4",
    title: "Ciência, Tecnologia e Inovação:",
    text: "Os pilares do desenvolvimento, gerando novos produtos, serviços e soluções para os desafios da sociedade.",
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon5,
    imageUrl: benefitImage5,
    light: true,
  },
  {
    id: "5",
    title: "Saúde",
    text: "Bem-estar e qualidade de vida: investindo em ações de promoção da saúde, prevenção de doenças e saúde integral. Com gestão eficiente e planejamento consciente.",
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon6,
    imageUrl: benefitImage6,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
