import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { mockData } from '../data/mock';

const Hero = () => {
  const { hero } = mockData;

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3BB1E0]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#004D8C]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#3BB1E0]/5 to-[#004D8C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#3BB1E0]/20 rounded-full px-4 py-2 mb-8 shadow-lg animate-fadeIn">
          <Sparkles className="w-4 h-4 text-[#3BB1E0]" />
          <span className="text-sm font-medium text-gray-700">Transformar para crescer</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 animate-fadeIn">
          <span className="block text-gray-900">{hero.title}</span>
          <span className="block bg-gradient-to-r from-[#3BB1E0] to-[#004D8C] bg-clip-text text-transparent italic">
            {hero.subtitle}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-12 max-w-4xl mx-auto animate-fadeIn delay-200">
          {hero.description}
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fadeIn delay-300">
          Ajudando empresas e startups a crescerem através de soluções tecnológicas criativas e funcionais
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#3BB1E0] to-[#004D8C] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeIn delay-400"
        >
          {hero.cta}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#3BB1E0] rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#3BB1E0] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;