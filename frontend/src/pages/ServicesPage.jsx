import React from 'react';
import { mockData } from '../data/mock';
import { Palette, Code, Smartphone, Sparkles, Lightbulb, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const { services } = mockData;

  const iconMap = {
    Palette,
    Code,
    Smartphone,
    Sparkles,
    Lightbulb,
    Wrench,
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3BB1E0]/10 via-white to-[#004D8C]/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções tecnológicas completas para impulsionar seu negócio
          </p>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Image/Icon Side */}
                  <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-[#3BB1E0]/20 to-[#004D8C]/20 rounded-2xl flex items-center justify-center">
                        <Icon className="w-32 h-32 text-[#004D8C]" />
                      </div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#3BB1E0] to-[#004D8C] rounded-2xl -z-10"></div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                    <div className="inline-flex items-center gap-2 bg-[#3BB1E0]/10 rounded-full px-4 py-2 mb-4">
                      <Icon className="w-5 h-5 text-[#004D8C]" />
                      <span className="text-sm font-semibold text-[#004D8C]">
                        Serviço {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-[#3BB1E0] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3BB1E0] to-[#004D8C] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Solicitar Orçamento
                      <ArrowRight className="w-5 h-5" />
                    </button>
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
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato e descubra como podemos ajudar sua empresa a crescer
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-[#004D8C] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Fale Conosco Agora
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;