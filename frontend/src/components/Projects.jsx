import React, { useState, useEffect } from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { getProjects } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const categories = ['Todos', ...new Set(projects.map((p) => p.category))];
  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#3BB1E0]"></div>
            <p className="mt-4 text-gray-600">Carregando projetos...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-[#3BB1E0] to-[#004D8C] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#3BB1E0] transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-medium">Ver Projeto</span>
                    </div>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#004D8C] px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3BB1E0] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{project.client}</p>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-[#3BB1E0]">
                    {project.results}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;