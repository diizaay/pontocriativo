import React, { useState, useEffect } from 'react';
import { Palette, Code, Smartphone, Sparkles, Lightbulb, Wrench, ArrowRight } from 'lucide-react';
import { getServices } from '../services/api';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const iconMap = {
    Palette,
    Code,
    Smartphone,
    Sparkles,
    Lightbulb,
    Wrench,
  };

  if (loading) {
    return (
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#3BB1E0]"></div>
            <p className="mt-4 text-gray-600">Carregando serviços...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#3BB1E0] transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#3BB1E0] to-[#004D8C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#3BB1E0] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#3BB1E0] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div className="flex items-center text-[#3BB1E0] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Saiba mais</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3BB1E0]/5 to-[#004D8C]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Não encontrou o que procura? Entre em contato e vamos criar uma solução personalizada.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3BB1E0] to-[#004D8C] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Fale Conosco
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;