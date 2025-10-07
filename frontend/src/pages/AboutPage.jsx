import React from 'react';
import { mockData } from '../data/mock';
import { Target, Zap, Heart, Award } from 'lucide-react';

const AboutPage = () => {
  const { about } = mockData;

  const values = [
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Colocamos as necessidades dos nossos clientes em primeiro lugar em cada projeto.'
    },
    {
      icon: Zap,
      title: 'Inovação Contínua',
      description: 'Sempre buscando as mais modernas tecnologias e abordagens para entregar o melhor.'
    },
    {
      icon: Heart,
      title: 'Paixão pelo que Fazemos',
      description: 'Cada linha de código e pixel são criados com dedicação e atenção aos detalhes.'
    },
    {
      icon: Award,
      title: 'Excelência na Entrega',
      description: 'Compromisso com a qualidade e superação de expectativas em todos os projetos.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3BB1E0]/10 via-white to-[#004D8C]/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {about.title}
          </h1>
          <p className="text-2xl text-[#3BB1E0] font-medium mb-6">
            {about.subtitle}
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {about.description}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {about.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#3BB1E0] to-[#004D8C] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600">O que nos move todos os dias</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3BB1E0] to-[#004D8C] rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-600">
              Profissionais apaixonados por tecnologia e inovação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={`https://images.unsplash.com/photo-${1438761681033 + i}-6c462c83e4eae?w=400&h=400&fit=crop&crop=faces`}
                    alt="Team member"
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004D8C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Membro da Equipe</h3>
                <p className="text-[#3BB1E0] font-medium">Posição</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;