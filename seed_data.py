# Seed data for initial database population

projects_seed = [
    {
        "id": "1",
        "title": "Plataforma E-commerce",
        "category": "E-commerce",
        "client": "Varejo Fashion",
        "description": "Plataforma completa de vendas online com gestão de estoque e pagamentos integrados.",
        "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "tags": ["React", "Node.js", "MongoDB", "Stripe"],
        "results": "+250% em conversões",
        "featured": True,
        "order": 1
    },
    {
        "id": "2",
        "title": "App de Delivery",
        "category": "Mobile",
        "client": "RestFood",
        "description": "Aplicativo mobile para pedidos de comida com rastreamento em tempo real.",
        "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        "tags": ["React Native", "Firebase", "Google Maps"],
        "results": "10k+ downloads",
        "featured": True,
        "order": 2
    },
    {
        "id": "3",
        "title": "Dashboard Analytics",
        "category": "Web App",
        "client": "TechData",
        "description": "Sistema de visualização de dados com relatórios interativos e dashboards customizáveis.",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "tags": ["React", "D3.js", "Python", "PostgreSQL"],
        "results": "50% mais eficiência",
        "featured": False,
        "order": 3
    },
    {
        "id": "4",
        "title": "Site Institucional",
        "category": "Website",
        "client": "Advocacia Silva",
        "description": "Website elegante e profissional com sistema de agendamento de consultas.",
        "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        "tags": ["Next.js", "Tailwind", "CMS"],
        "results": "+180% visitas",
        "featured": False,
        "order": 4
    },
    {
        "id": "5",
        "title": "Sistema de Gestão",
        "category": "SaaS",
        "client": "ClínicaPlus",
        "description": "Plataforma completa para gestão de clínicas com agendamento e prontuários digitais.",
        "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        "tags": ["React", "FastAPI", "PostgreSQL"],
        "results": "200+ clínicas",
        "featured": False,
        "order": 5
    },
    {
        "id": "6",
        "title": "Marketplace B2B",
        "category": "E-commerce",
        "client": "IndustrialHub",
        "description": "Plataforma de marketplace conectando fornecedores e compradores industriais.",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "tags": ["Vue.js", "Node.js", "AWS"],
        "results": "$2M+ em GMV",
        "featured": False,
        "order": 6
    }
]

services_seed = [
    {
        "id": "1",
        "title": "UI/UX Design",
        "description": "Criamos interfaces intuitivas e experiências memoráveis que conectam usuários aos seus objetivos.",
        "icon": "Palette",
        "features": ["Design de Interface", "Prototipagem", "Testes de Usabilidade", "Design System"],
        "order": 1
    },
    {
        "id": "2",
        "title": "Desenvolvimento Web",
        "description": "Desenvolvemos websites e aplicações web modernas, responsivas e de alta performance.",
        "icon": "Code",
        "features": ["React & Next.js", "Backend APIs", "E-commerce", "Web Apps"],
        "order": 2
    },
    {
        "id": "3",
        "title": "Aplicativos Mobile",
        "description": "Criamos aplicativos nativos e híbridos para iOS e Android com foco em performance.",
        "icon": "Smartphone",
        "features": ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
        "order": 3
    },
    {
        "id": "4",
        "title": "Branding Digital",
        "description": "Construímos identidades visuais fortes e consistentes que destacam sua marca no mercado.",
        "icon": "Sparkles",
        "features": ["Identidade Visual", "Logo Design", "Brand Guidelines", "Marketing Digital"],
        "order": 4
    },
    {
        "id": "5",
        "title": "Consultoria Tech",
        "description": "Orientamos empresas na escolha das melhores tecnologias e estratégias digitais.",
        "icon": "Lightbulb",
        "features": ["Arquitetura de Software", "Stack Tecnológico", "Otimização", "Treinamento"],
        "order": 5
    },
    {
        "id": "6",
        "title": "Manutenção & Suporte",
        "description": "Garantimos que seus sistemas funcionem perfeitamente com suporte contínuo.",
        "icon": "Wrench",
        "features": ["Suporte 24/7", "Atualizações", "Monitoramento", "Backup & Segurança"],
        "order": 6
    }
]
