import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3BB1E0]/10 via-white to-[#004D8C]/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nossos Projetos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios e criaram valor para nossos clientes
          </p>
        </div>
      </section>

      <Projects />
    </div>
  );
};

export default ProjectsPage;