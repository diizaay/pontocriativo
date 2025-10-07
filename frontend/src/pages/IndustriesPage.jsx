import React from 'react';
import { mockData } from '../data/mock';
import { ShoppingCart, Heart, GraduationCap, DollarSign, Store, Cpu, UtensilsCrossed, Truck } from 'lucide-react';

const IndustriesPage = () => {
  const { industries } = mockData;

  const iconMap = {
    ShoppingCart,
    Heart,
    GraduationCap,
    DollarSign,
    Store,
    Cpu,
    UtensilsCrossed,
    Truck,
  };

  const industryDetails = {
    'E-commerce': {
      description: 'Plataformas completas de vendas online com gestão de estoque, pagamentos e logística integrados.',
      solutions: ['Lojas Virtuais', 'Marketplaces', 'Integrações de Pagamento', 'Gestão de Estoque']
    },
    'Saúde': {
      description: 'Sistemas para clínicas, hospitais e telemedicina com foco em segurança e conformidade.',
      solutions: ['Prontuários Eletrônicos', 'Agendamento Online', 'Telemedicina', 'Gestão de Clínicas']
    },
    'Educação': {
      description: 'Plataformas de ensino online, LMS e ferramentas educacionais interativas.',
      solutions: ['Plataformas EAD', 'Gestão Escolar', 'Aplicativos Educacionais', 'Gamificação']
    },
    'Finanças': {
      description: 'Soluções fintech, plataformas de investimento e sistemas de gestão financeira.',
      solutions: ['Carteiras Digitais', 'Plataformas de Investimento', 'Controle Financeiro', 'APIs Bancárias']
    },
    'Varejo': {
      description: 'Sistemas para gestão de lojas físicas e online com integração omnichannel.',
      solutions: ['PDV', 'Gestão de Estoque', 'CRM', 'Fidelização']
    },
    'Tecnologia': {
      description: 'Soluções SaaS, APIs e plataformas tecnológicas escaláveis.',
      solutions: ['SaaS', 'APIs RESTful', 'Microserviços', 'Cloud Solutions']
    },
    'Alimentação': {
      description: 'Apps de delivery, gestão de restaurantes e sistemas de pedidos online.',
      solutions: ['Apps de Delivery', 'Gestão de Cardápios', 'Pedidos Online', 'Integração com Cozinha']
    },
    'Logística': {
      description: 'Sistemas de rastreamento, gestão de frotas e otimização de rotas.',
      solutions: ['Rastreamento em Tempo Real', 'Gestão de Frotas', 'Roteirização', 'WMS']
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3BB1E0]/10 via-white to-[#004D8C]/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Indústrias que Atendemos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiência em diversos setores com soluções personalizadas para cada necessidade
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon];
              const details = industryDetails[industry.name];

              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#3BB1E0] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3BB1E0] to-[#004D8C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3BB1E0] transition-colors">
                    {industry.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Industries */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon];
              const details = industryDetails[industry.name];

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#3BB1E0] to-[#004D8C] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {industry.name}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {details.description}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                          Soluções:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {details.solutions.map((solution, idx) => (
                            <span
                              key={idx}
                              className="bg-[#3BB1E0]/10 text-[#004D8C] px-4 py-2 rounded-full text-sm font-medium"
                            >
                              {solution}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#3BB1E0] to-[#004D8C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Sua Indústria Não Está na Lista?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Não se preocupe! Temos experiência em adaptar nossas soluções para qualquer setor.
          </p>
          <button
            onClick={() => {
              window.location.href = '/#contact';
            }}
            className="bg-white text-[#004D8C] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Entre em Contato
          </button>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;