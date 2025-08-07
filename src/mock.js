export const mockData = {
  // Informações da empresa
  company: {
    name: "CC Clean",
    tagline: "Diaristas e Mensalistas para limpeza comercial",
    yearsOfExperience: "30 anos de excelência",
    address: "Av. Lourenço Cabreira, 759 - sobre loja - São Paulo /SP / Brasil- CEP 04812-010",
    phone: "(5511) 96588-3546",
    whatsapp: "5511965883546",
    email: "contato@ccclean.com.br"
  },

  // Slides da página inicial
  heroSlides: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxjbGVhbmluZyUyMGxhZHl8ZW58MHx8fHwxNzU0NTI4MTc1fDA&ixlib=rb-4.1.0&q=85",
      title: "Profissionais Qualificadas",
      message: "Nossas diaristas passam por rigoroso processo de seleção e treinamento para garantir a qualidade que você merece.",
      cta: "Conheça nossos serviços"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/9462732/pexels-photo-9462732.jpeg",
      title: "Equipamentos Profissionais",
      message: "Utilizamos produtos e equipamentos de última geração para entregar um resultado impecável em sua casa ou escritório.",
      cta: "Solicite um orçamento"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxob3VzZWtlZXBlcnxlbnwwfHx8fDE3NTQ1MjgxODF8MA&ixlib=rb-4.1.0&q=85",
      title: "Confiança e Segurança",
      message: "30 anos de experiência no mercado garantem a tranquilidade que você busca para seu lar e negócio.",
      cta: "Fale conosco"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/4353615/pexels-photo-4353615.jpeg",
      title: "Resultados Excepcionais",
      message: "Cada detalhe importa. Nossa equipe é treinada para superar suas expectativas em cada atendimento.",
      cta: "Ver avaliações"
    }
  ],

  // Serviços de diaristas
  diaristaServices: [
    {
      id: 1,
      title: "Limpeza Residencial",
      description: "Serviços de limpeza completa para sua casa, incluindo todos os cômodos.",
      features: ["Limpeza de todos os cômodos", "Organização de ambientes", "Produtos próprios", "Profissionais verificadas"],
      price: "A partir de R$ 120",
      duration: "4-6 horas"
    },
    {
      id: 2,
      title: "Limpeza Pós-Obra",
      description: "Remoção de resíduos de construção e limpeza profunda pós-reforma.",
      features: ["Remoção de entulho leve", "Limpeza profunda", "Equipamentos especiais", "Equipe especializada"],
      price: "A partir de R$ 180",
      duration: "6-8 horas"
    },
    {
      id: 3,
      title: "Limpeza de Escritórios",
      description: "Manutenção da limpeza em ambientes corporativos.",
      features: ["Limpeza de estações de trabalho", "Banheiros corporativos", "Áreas comuns", "Flexibilidade de horários"],
      price: "A partir de R$ 150",
      duration: "3-5 horas"
    }
  ],

  // Serviços de mensalistas
  mensalistaServices: [
    {
      id: 1,
      title: "Mensalista Residencial",
      description: "Profissional dedicada para cuidar da limpeza da sua casa mensalmente.",
      features: ["Profissional fixa", "Cronograma personalizado", "Produtos inclusos", "Supervisão constante"],
      price: "A partir de R$ 400/mês",
      frequency: "1x por semana"
    },
    {
      id: 2,
      title: "Mensalista Comercial",
      description: "Limpeza regular para estabelecimentos comerciais e escritórios.",
      features: ["Equipe especializada", "Horários flexíveis", "Produtos profissionais", "Relatórios mensais"],
      price: "A partir de R$ 800/mês",
      frequency: "2x por semana"
    },
    {
      id: 3,
      title: "Mensalista Executiva",
      description: "Serviço premium com profissional altamente qualificada.",
      features: ["Profissional premium", "Atendimento personalizado", "Produtos premium", "Disponibilidade estendida"],
      price: "A partir de R$ 600/mês",
      frequency: "1x por semana"
    }
  ],

  // Avaliações de clientes
  testimonials: [
    {
      id: 1,
      name: "Maria Silva",
      location: "Vila Mariana, SP",
      rating: 5,
      comment: "Excelente serviço! A diarista é muito cuidadosa e deixa minha casa impecável. Recomendo!",
      date: "Dezembro 2024"
    },
    {
      id: 2,
      name: "João Santos",
      location: "Jardins, SP",
      rating: 5,
      comment: "Já uso os serviços há 2 anos. Nunca tive problemas, sempre pontuais e muito profissionais.",
      date: "Novembro 2024"
    },
    {
      id: 3,
      name: "Ana Costa",
      location: "Moema, SP",
      rating: 5,
      comment: "A mensalista da CC Clean é incrível! Minha casa fica sempre perfeita. Vale cada centavo.",
      date: "Dezembro 2024"
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      location: "Brooklin, SP",
      rating: 5,
      comment: "Serviço de qualidade excepcional. Equipe educada e trabalho impecável. Muito satisfeito!",
      date: "Janeiro 2025"
    }
  ],

  // Sobre a empresa
  aboutUs: {
    title: "Quem Somos",
    description: "A CC Clean é uma empresa consolidada no mercado de limpeza residencial e comercial há mais de 30 anos. Nossa missão é proporcionar ambientes limpos e saudáveis, oferecendo serviços de excelência com profissionais qualificadas e produtos de qualidade.",
    mission: "Transformar ambientes através de serviços de limpeza excepcionais, proporcionando bem-estar e tranquilidade aos nossos clientes.",
    vision: "Ser referência nacional em serviços de limpeza residencial e comercial, reconhecida pela qualidade, confiabilidade e inovação.",
    values: [
      "Qualidade em cada detalhe",
      "Confiança e transparência",
      "Profissionalismo sempre",
      "Inovação constante",
      "Respeito ao cliente",
      "Compromisso com resultados"
    ]
  },

  // Diferencial da empresa
  differentials: [
    {
      icon: "Shield",
      title: "Profissionais Verificadas",
      description: "Todas as nossas funcionárias passam por verificação de antecedentes e treinamento específico."
    },
    {
      icon: "Clock",
      title: "Pontualidade Garantida",
      description: "Cumprimos rigorosamente os horários agendados, respeitando sua rotina e compromissos."
    },
    {
      icon: "Star",
      title: "Qualidade Comprovada",
      description: "30 anos de experiência e milhares de clientes satisfeitos são nossa garantia de qualidade."
    },
    {
      icon: "Heart",
      title: "Cuidado Especial",
      description: "Tratamos sua casa como se fosse nossa, com carinho e atenção aos mínimos detalhes."
    }
  ]
};