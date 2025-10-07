import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mock';

const About = () => {
  const { about } = mockData;

  const iconMap = {
    0: Target,
    1: Users,
    2: TrendingUp,
    3: Award,
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {about.title}
          </h2>
          <p className="text-xl text-[#3BB1E0] font-medium mb-6">
            {about.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {about.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16">
          {about.stats.map((stat, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#3BB1E0] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Icon className="w-12 h-12 text-[#3BB1E0]" />
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3BB1E0] to-[#004D8C] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3BB1E0]/5 to-[#004D8C]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa Missão
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Capacitar empresas através da tecnologia, criando soluções digitais que não apenas atendem às necessidades de hoje, mas também preparam nossos clientes para os desafios de amanhã.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Acreditamos que cada projeto é uma oportunidade de fazer a diferença e transformar ideias em experiências digitais memoráveis.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                alt="Equipe Ponto Criativo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-[#3BB1E0] to-[#004D8C] rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#3BB1E0]/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;