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
  president,
  discordBlack,
  facebook,
  file02,
  fiscal,
  homeSmile,
  instagram,
  meeting,
  guest,
  parliament,
  plusSquare,
  manager,
  board,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  briefcase,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  imagenews1,
  imagenews2,
  imagenews3,
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
  "Distrito Industrial",
  "Mobilidade Urbana",
  "Fundo de Microcrédito",
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
    title: "Presidente",
    icon: president,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Plenário",
    icon: parliament,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Secretaria Executiva",
    icon: briefcase,
    width: 30,
    height: 22,
  },
  {
    id: "3",
    title: "Reuniões",
    icon: meeting,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Convidados",
    icon: guest,
    width: 30,
    height: 30,
  },
  {
    id: "5",
    title: "Coordenador da Câmara Técnica",
    icon: manager,
    width: 36,
    height: 36,
  },
  {
    id: "6",
    title: "Conselho Fiscal",
    icon: fiscal,
    width: 32,
    height: 40,
  },
  {
    id: "7",
    title: "Câmaras Técnicas",
    icon: board,
    width: 30,
    height: 24,
  },
];

export const News = [
  {
    id: "0",
    title: "CODESF aprova projeto de expansão da ciclovia na Avenida Goiás",
    timestamp: "10/06/2024, às 10:00h",
    image: imagenews1,
    contact: "false",
    text: [
      "O CODESF informa a aprovação do projeto de expansão da ciclovia na Avenida Goiás. A obra, prevista para iniciar em setembro de 2024, tem como objetivo incentivar o uso de bicicletas como meio de transporte alternativo e sustentável. O projeto contempla a criação de novas rotas e a melhoria da infraestrutura cicloviária existente."
    ],
  },
  {
    id: "1",
    title: "CODESF abre inscrições para o programa 'Capacita Frutal'",
    timestamp: "18/05/2024, às 15:45h",
    image: imagenews2,
    contact: null,
    text: [
      "O CODESF está com inscrições abertas para o programa 'Capacita Frutal'. A iniciativa oferece cursos gratuitos de qualificação profissional nas áreas de tecnologia, turismo e empreendedorismo. As inscrições podem ser realizadas pelo site da CODESF até o dia 30 de maio de 2024. Não perca essa oportunidade de aprimorar seus conhecimentos e ampliar suas chances no mercado de trabalho!"
    ],
  },
  {
    id: "2",
    title: "Conselho Municipal de Trânsito se reúne para discutir melhorias no transporte público",
    timestamp: "24/05/2024, às 18:20h",
    image: imagenews3,
    contact: "false",
    text: [
      "O Conselho Municipal de Trânsito (CMT) de Frutal se reúne na próxima semana para discutir melhorias no sistema de transporte público municipal. O encontro contará com a participação de representantes da CODESF, empresas de ônibus e sociedade civil. Na pauta, temas como a ampliação da frota, a criação de novas linhas e a integração tarifária serão debatidos. A reunião é aberta ao público e acontecerá no dia 10 de maio de 2024, às 19h, no auditório da Câmara Municipal."
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Atração de Investimentos",
    people:"Dino Marques de Oliveira - Coordenador, Tiago Queiroz de Queiroz, Aldiberto Dias Machado Júnior, Maria Fernanda Clemente Petersen, Leopoldo Galvão Morais Campos",
    text: "Potencializando negócios e recursos para o crescimento econômico de Frutal.",
    backgroundUrl: benefitCard1, 
    iconUrl: benefitIcon1,
    imageUrl: benefitImage1,
    light: true,
  },
  {
    id: "1",
    title: "Desenvolvimento Urbano",
    people:"Paulo Roberto Coelho - Coordenador, João de Deus Braga Júnior, David Carlos de Oliveira, Laydison Santos Marra",
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
    people:"Ivan José dos Reis Filho – Coordenador, Gustavo Gravatim (UEMG), Fábio Rodrigues (UEMG), Tais Arthur (UEMG), Pedro Paulo (Objetivo), Allynson Fujita (UEMG), Bruno Ruiz (Cidade Imperial), Fábio Muniz (Cidade Imperial), Weder Martins (Prefeitura), Matheus Frazão (Empreendedor TI), Amilton Soares (Empreendedor TI), Samuel Silvério (Empreendedor Info), Glauber Ribeiro (Cerradão), Leonardo Barcelos (UEMG), Sérgio Portari (UEMG), Leandro Macedo (Cerradão), Joana Rafaela (SEBRAE), Danilo Santos (Grupo JB), Fabrício Cistolo (Cerradão), Josnei Freitas (UEMG), Leandro Queiroz (Consultor)",
    text: "Os pilares do desenvolvimento, gerando novos produtos, serviços e soluções para os desafios da sociedade.",
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon5,
    imageUrl: benefitImage5,
    light: true,
  },
  {
    id: "5",
    title: "Saúde",
    people:"Daniel Godoi Bernardes da Silva - Coordenador, Leandro Augusto Pantaleão, Carlos Alfredo Salci Queiroz",
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
