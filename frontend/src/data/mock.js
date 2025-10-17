export const mockData = {
  company: {
    name: "Ponto Criativo",
    tagline: "Transformar para crescer",
    description:
      "Ajudando empresas e startups a crescerem através de soluções tecnológicas criativas e funcionais.",
  },

  hero: {
    title: "ALÉM DO",
    subtitle: "COMUM",
    description: "AGÊNCIA DE TECNOLOGIA E INOVAÇÃO",
    cta: "Entre em Contato",
  },

  about: {
    title: "Sobre Nós",
    subtitle: "Transformando ideias em realidade digital",
    description:
      "Somos uma agência especializada em criar experiências digitais excepcionais. Com foco em inovação e qualidade, desenvolvemos soluções tecnológicas que impulsionam o crescimento dos nossos clientes.",
    stats: [
      { number: "100+", label: "Projetos Entregues" },
      { number: "50+", label: "Clientes Satisfeitos" },
      { number: "5+", label: "Anos de Experiência" },
      { number: "98%", label: "Taxa de Sucesso" },
    ],
  },

  services: [
    {
      id: 1,
      title: "Estratégia UX e Produto",
      description:
        "Conectamos objetivos de negócio e necessidades dos usuários para planejar produtos digitais com resultados mensuráveis.",
      features: [
        "Diagnóstico e discovery",
        "Mapas de jornada e blueprint",
        "Roadmap de produto e MVP",
        "OKRs e indicadores de sucesso",
      ],
    },
    {
      id: 2,
      title: "Design de Interfaces e Experiências",
      description:
        "Desenhamos interfaces acessíveis e marcantes que refletem a identidade da marca em cada ponto de contato.",
      features: [
        "Arquitetura de informação",
        "Wireframes e protótipos interativos",
        "Design system completo",
        "Teste com usuários e iteração",
      ],
    },
    {
      id: 3,
      title: "Desenvolvimento Web e Mobile",
      description:
        "Construímos plataformas performáticas com stacks modernas, prontas para escalar junto ao seu negócio.",
      features: [
        "Front-end React e Next.js",
        "APIs e integrações seguras",
        "Aplicativos iOS e Android",
        "DevOps, CI e observabilidade",
      ],
    },
    {
      id: 4,
      title: "Branding Digital e Conteúdo",
      description:
        "Criamos narrativas visuais coerentes que fortalecem a sua presença digital em todos os canais.",
      features: [
        "Identidade visual e guia de marca",
        "Motion e microinterações",
        "Conteúdo orientado a SEO",
        "Campanhas omnichannel",
      ],
    },
    {
      id: 5,
      title: "Consultoria Tecnológica",
      description:
        "Apoiamos a tomada de decisão técnica com análise de stack, arquitetura e plano de evolução contínua.",
      features: [
        "Auditoria de arquitetura",
        "Escolha de stack e ferramentas",
        "Planos de migração e modernização",
        "Workshops e treinamento de equipes",
      ],
    },
    {
      id: 6,
      title: "Suporte Evolutivo",
      description:
        "Mantemos produtos no ar com performance, monitoramento e novas entregas em ciclos curtos.",
      features: [
        "Monitoramento proativo e alertas",
        "Backups e plano de contingência",
        "Sprints de melhorias contínuas",
        "Service desk e suporte 24/7",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "LR Store - Assistente digital para onboarding global",
      category: "Produtos digitais",
      client: "LR Store",
      description:
        "Construímos a experiência de onboarding que simplifica a contratação internacional em um fluxo contínuo e seguro, com foco em autonomia para gestores e colaboradores.",
      image:
        "https://images.unsplash.com/photo-1656306403853-79780d371145?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      tags: ["Descoberta", "Sistema de Design", "React", "Node.js"],
      results: "Redução de 65% no tempo de ativação",
    },
    {
      id: 2,
      title: "Paga Aki - Plataforma financeira para PMEs",
      category: "Fintech",
      client: "Paga Aki",
      description:
        "Reposicionamos a experiência digital B2B, com uma suíte completa de produtos financeiros moduláveis e dashboard único para decisões de crédito.",
      image:
        "https://images.unsplash.com/photo-1599202875854-23b7cd490ff4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      tags: ["Pesquisa", "Estratégia UX", "Design Ops", "React"],
      results: "+38% de adesão aos novos produtos",
    },
    {
      id: 3,
      title: "Atlas Cargo - Controle logístico em tempo real",
      category: "SaaS",
      client: "Atlas Global",
      description:
        "Criamos um cockpit operacional para monitoramento de frotas e cargas, com alertas inteligentes e fluxos colaborativos entre equipes.",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1280&h=960&fit=crop",
      tags: ["Design de Produto", "Tokens de Design", "TypeScript", "GraphQL"],
      results: "30% de redução em custos de rota",
    },
    {
      id: 4,
      title: "Clínica Aurora - Telemedicina centrada no paciente",
      category: "Saúde",
      client: "Clínica Aurora",
      description:
        "Concebemos a jornada completa da teleconsulta com prontuário integrado, orientações personalizadas e suporte contínuo pós-atendimento.",
      image:
        "https://plus.unsplash.com/premium_photo-1716719138215-630e6e263099?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      tags: ["Pesquisa UX", "Design de Serviços", "React Native", "AWS"],
      results: "NPS 74 e retenção 2x maior",
    },
    {
      id: 5,
      title: "Vila - Marketplace gastronômico local",
      category: "Marketplace",
      client: "Coletivo Vila",
      description:
        "Lançamos uma plataforma que conecta cozinheiros autorais ao público, com experiência mobile-first e logística integrada na última milha.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1280&h=960&fit=crop",
      tags: ["Sprint de Marca", "Sistema de Design", "Next.js", "Headless CMS"],
      results: "Triplo de pedidos médios por restaurante",
    },
    {
      id: 6,
      title: "Essência Artesanal - Imersão cultural para viajantes",
      category: "Experiências",
      client: "Essência Artesanal",
      description:
        "Desenhamos uma experiência digital que combina curadoria humana com inteligência artificial para criar roteiros personalizados e sensoriais.",
      image:
        "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
      tags: ["Estratégia de Produto", "UI Refinada", "Copilotos de IA", "iOS & Android"],
      results: "Ticket médio 2,4x maior após o redesign",
    },
    {
      id: 7,
      title: "Studio Horizonte - Websites com identidade viva",
      category: "Websites",
      client: "Studio Horizonte",
      description:
        "Reposicionamos o site institucional com arquitetura de informação clara, storytelling envolvente e módulos editáveis que preservam a identidade visual do estúdio.",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      tags: ["Arquitetura da Informação", "UI Responsiva", "Next.js", "Motion Design"],
      results: "+60% no tempo médio de permanência",
    },
  ],

  industries: [
    { name: "E-commerce" },
    { name: "Saúde" },
    { name: "Educação" },
    { name: "Finanças" },
    { name: "Varejo" },
    { name: "Tecnologia" },
    { name: "Alimentação" },
    { name: "Logística" },
  ],

  testimonials: [
    {
      id: 1,
      name: "Maria Santos",
      role: "CEO, TechStart",
      content:
        "O Ponto Criativo transformou nossa visão em uma plataforma incrível. O profissionalismo e a atenção aos detalhes superaram todas as expectativas.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    },
    {
      id: 2,
      name: "João Silva",
      role: "Diretor, Vila Plus",
      content:
        "Parceria excepcional! Entregaram um e-commerce completo que aumentou nossas vendas em 250%. Equipe altamente qualificada.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
    },
    {
      id: 3,
      name: "Ana Oliveira",
      role: "Fundadora, HealthTech",
      content:
        "Desenvolver nosso app de saúde com o Ponto Criativo foi uma experiência fantástica. Comunicação clara e resultados impressionantes.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    },
  ],

  contact: {
    title: "Vamos Criar Algo Incrível Juntos",
    subtitle: "Entre em contato e descubra como podemos transformar suas ideias em realidade.",
    email: "contato@pontocriativo.com",
    phone: "+244 926 464 089",
    address: "Luanda, Angola",
    social: {
      linkedin: "https://linkedin.com/company/pontocriativo",
      instagram: "https://www.instagram.com/ponto_criativo20/",
      facebook: "https://www.facebook.com/profile.php?id=100091433748814",
    },
  },
};
