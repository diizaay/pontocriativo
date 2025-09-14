import { Authenticated, Unauthenticated, useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster, toast } from "sonner";
import { useState } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Ponto Criativo</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">Início</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">Sobre</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">Serviços</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">Depoimentos</a>
              <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover transition-colors font-medium">Contato</a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#home" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Início</a>
              <a href="#about" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Sobre</a>
              <a href="#services" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Serviços</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Depoimentos</a>
              <a href="#contact" className="bg-primary text-white block px-3 py-2 text-base font-medium rounded-lg mt-2">Contato</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transformamos Ideias em
            <span className="block text-blue-300">Soluções Digitais</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Desenvolvemos tecnologias inovadoras que impulsionam o crescimento do seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Começar Projeto
            </a>
            <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre o Ponto Criativo
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos uma empresa especializada em soluções tecnológicas inovadoras, com mais de 5 anos de experiência no mercado. Nossa missão é transformar desafios complexos em oportunidades de crescimento através da tecnologia.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Com uma equipe de especialistas altamente qualificados, oferecemos serviços personalizados que atendem às necessidades específicas de cada cliente, sempre priorizando qualidade, inovação e resultados excepcionais.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-gray-600">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600">Anos</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg mb-3"></div>
                  <h3 className="font-semibold mb-2">Inovação</h3>
                  <p className="text-sm text-blue-100">Tecnologias de ponta</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg mb-3"></div>
                  <h3 className="font-semibold mb-2">Qualidade</h3>
                  <p className="text-sm text-blue-100">Excelência em cada projeto</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg mb-3"></div>
                  <h3 className="font-semibold mb-2">Suporte</h3>
                  <p className="text-sm text-blue-100">Atendimento 24/7</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg mb-3"></div>
                  <h3 className="font-semibold mb-2">Resultados</h3>
                  <p className="text-sm text-blue-100">ROI comprovado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: "💻",
      title: "Desenvolvimento Web",
      description: "Criamos sites e aplicações web modernas, responsivas e otimizadas para performance."
    },
    {
      icon: "📱",
      title: "Apps Mobile",
      description: "Desenvolvemos aplicativos nativos e híbridos para iOS e Android com UX excepcional."
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      description: "Soluções em nuvem escaláveis e seguras para otimizar sua infraestrutura de TI."
    },
    {
      icon: "🤖",
      title: "Inteligência Artificial",
      description: "Implementamos IA e machine learning para automatizar processos e gerar insights."
    },
    {
      icon: "🔒",
      title: "Segurança Digital",
      description: "Protegemos seus dados e sistemas com as melhores práticas de cibersegurança."
    },
    {
      icon: "📊",
      title: "Analytics & BI",
      description: "Transformamos dados em informações estratégicas para tomada de decisões."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "CEO, InnovaCorp",
      text: "O Ponto Criativo transformou completamente nossa operação digital. O resultado superou todas as expectativas.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "CTO, StartupTech",
      text: "Profissionais excepcionais! Entregaram o projeto no prazo e com qualidade impecável.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Diretora, EcoSolutions",
      text: "O suporte técnico é fantástico. Sempre disponíveis e com soluções eficientes para nossos desafios.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Depoimentos reais de empresas que confiaram em nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const sendMessage = useMutation(api.contact.sendMessage);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendMessage(formData);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600">
            Pronto para transformar sua ideia em realidade? Vamos conversar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 text-primary mr-3">📧</div>
                  <span className="text-gray-600">contato@pontocriativo.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-primary mr-3">📞</div>
                  <span className="text-gray-600">+244 926 464 089</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-primary mr-3">📍</div>
                  <span className="text-gray-600">Luanda, Angola</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-gray-600">
                <div>Segunda a Sexta: 9h às 18h</div>
                <div>Sábado: 9h às 12h</div>
                <div>Domingo: Fechado</div>
              </div>
            </div>

            <div className="bg-primary rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">Consultoria Gratuita</h3>
              <p className="text-blue-100 mb-4">
                Agende uma conversa sem compromisso para discutir seu projeto
              </p>
              <a href="#contact" className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                Agendar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ponto Criativo</h3>
            <p className="text-gray-400 mb-4">
              Transformando ideias em soluções digitais inovadoras
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apps Mobile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Computing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Inteligência Artificial</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contato@pontocriativo.com</li>
              <li>+244 926 464 089</li>
              <li>Luanda, Angola</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ponto Criativo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
