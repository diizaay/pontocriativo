import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../services/api";
import Reveal from "./Reveal";
import { mockData } from "../data/mock";
import projectsIllustration from "../assets/ilustration2.svg";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        if (Array.isArray(data) && data.length) {
          setProjects(data);
        } else {
          setProjects(mockData.projects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects(mockData.projects);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const categories = useMemo(
    () => ["Todos", ...new Set(projects.map((project) => project.category))],
    [projects],
  );

  const filteredProjects = useMemo(() => {
    if (filter === "Todos") return projects;
    return projects.filter((project) => project.category === filter);
  }, [projects, filter]);

  if (loading) {
    return (
      <section id="projects" className="bg-white py-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-4 text-center sm:px-6 lg:px-8">
          <span className="h-10 w-10 animate-spin rounded-full border-2 border-[#016477]/30 border-t-[#016477]" />
          <p className="text-sm uppercase tracking-[0.28em] text-[#016477]">Carregando projetos</p>
        </div>
      </section>
    );
  }

  if (!projects.length) {
    return null;
  }

  return (
    <section id="projects" data-nav-theme="white" className="pt-28 pb-0">
      <div className="mx-auto w-full max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-end">
          <Reveal className="space-y-6">
            <span className="inline-flex rounded-full border border-[#016477]/20 bg-[#00a3ab]/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#016477]">
              Portfolio
            </span>
            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.34] tracking-[-0.02em] text-slate-900 sm:text-4xl">
              Projetos que elevam experiências digitais e resultados de negócio.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-600">
              Cada entrega combina pesquisa, design e engenharia para acelerar o crescimento de marcas ambiciosas com
              consistência e impacto mensurável.
            </p>
          </Reveal>

          <Reveal className="space-y-5 md:justify-self-end" delay={120}>
            <p className="text-sm font-medium text-[#016477]/70">Filtrar por categoria</p>
            <div className="flex flex-wrap gap-3 md:flex-col md:items-end md:gap-2">
              {categories.map((category) => {
                const isActive = category === filter;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFilter(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${isActive
                      ? "bg-[#016477] text-white shadow-[0_14px_30px_-18px_rgba(0,77,163,0.45)]"
                      : "bg-white/70 text-[#016477] hover:bg-white"
                      }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
          <Reveal className="hidden h-full lg:block" delay={140}>
            <div className="sticky top-32 flex flex-col gap-6 rounded-[28px] border border-[#016477]/10 bg-white/85 p-8 shadow-[0_30px_90px_-60px_rgba(0,77,163,0.25)] backdrop-blur">
              <p className="text-sm font-semibold text-[#016477]">Categorias</p>
              <div className="flex flex-col gap-3">
                {categories.map((category) => {
                  const isActive = category === filter;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setFilter(category)}
                      className={`flex items-center justify-between rounded-2xl px-5 py-3 text-left text-sm font-medium transition-all ${isActive
                        ? "bg-[#016477] text-white shadow-[0_16px_40px_-24px_rgba(0,77,163,0.55)]"
                        : "bg-white text-[#016477] hover:bg-[#00a3ab]/15"
                        }`}
                    >
                      <span>{category}</span>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              const accentBg = isEven ? "#ffffff" : "#016477";
              const textPrimary = isEven ? "text-slate-900" : "text-white";
              const textSecondary = isEven ? "text-slate-600" : "text-white/80";
              const numberTone = isEven ? "text-[#016477]/60" : "text-white/70";
              const dividerTone = isEven ? "bg-[#016477]/15" : "bg-white/30";
              const tagTone = isEven
                ? "rounded-full bg-[#00a3ab]/20 px-4 py-2 text-xs font-medium text-[#016477]"
                : "rounded-full bg-white/20 px-4 py-2 text-xs font-medium text-white";
              const resultsTone = isEven ? "text-sm font-semibold text-[#016477]" : "text-sm font-semibold text-white";
              const ctaTone = isEven
                ? "inline-flex items-center gap-2 text-sm font-semibold text-[#016477] transition-colors hover:text-[#0a3a7a]"
                : "inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-white/80";
              const badgeTone = isEven ? "bg-white/90 text-[#016477]" : "bg-white/15 text-white";
              const imageBg = isEven ? "bg-[#016477]/5" : "bg-[#00a3ab]/10";

              return (
                <div
                  key={project.id}
                  className="project-row project-row--offset py-16 sm:py-20"
                  style={{ "--row-background": accentBg }}
                >
                  <Reveal delay={index * 120}>
                    <article
                      className={`group mx-auto grid w-full max-w-5xl gap-8 px-4 text-left sm:px-6 lg:px-8 md:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] ${textPrimary}`}
                    >
                      <div className={`relative overflow-hidden rounded-[24px] ${imageBg}`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <div
                          className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${isEven ? "from-[#016477]/25" : "from-black/35"
                            } via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                        />
                        <span className={`absolute left-5 top-5 rounded-full px-4 py-1 text-xs font-semibold ${badgeTone}`}>
                          {project.category}
                        </span>
                      </div>

                      <div className="flex flex-col gap-8">
                        <div className="space-y-5">
                          <div className={`flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] ${numberTone}`}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <span className={`h-px flex-1 ${dividerTone}`} />
                            <span className="tracking-normal">{project.client}</span>
                          </div>
                          <h3 className="text-3xl font-semibold leading-[1.34] md:text-[2.2rem]">{project.title}</h3>
                          <p className={`text-base leading-relaxed ${textSecondary}`}>{project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {project.tags.map((tag) => (
                            <span key={`${project.id}-${tag}`} className={tagTone}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div
                          className={`mt-auto flex flex-wrap items-center justify-between gap-4 border-t pt-6 ${isEven ? "border-[#016477]/10" : "border-white/25"
                            }`}
                        >
                          <p className={resultsTone}>{project.results}</p>
                          <Link to={`/projetos/${project.id}`} className={ctaTone}>
                            Ver estudo de caso
                            <svg
                              aria-hidden="true"
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="project-row py-16 sm:py-20" style={{ "--row-background": "#ffffff" }}>
        <Reveal className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 text-center">
          <p className="text-lg font-medium italic text-[#016477]">Vamos colaborar?</p>
          <h3 className="text-4xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[2.8rem]">
            Transformamos sua visão em experiências digitais memoráveis.
          </h3>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600">
            Reunimos especialistas em pesquisa, design e tecnologia para construir produtos que combinam desempenho e
            identidade. Conte com a gente para o próximo capítulo da sua marca.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/servicos"
              className="inline-flex items-center rounded-full border border-[#016477] px-8 py-3 text-sm font-semibold text-[#016477] transition-colors hover:bg-[#016477] hover:text-white"
            >
              Ver nossos serviços
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center rounded-full bg-[#016477] px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Falar com a equipe
            </Link>
          </div>
        </Reveal>
      </div>

      <div
        className="project-row py-16 sm:py-20 lg:py-28 lg:min-h-screen"
        style={{
          "--row-background": "#016477",
          "--row-radius": "0px",
          "--row-offset": "0px",
        }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 text-white lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.85fr)] lg:items-center">
          <Reveal className="space-y-6 text-left">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/75">Diga ola</p>
              <h3 className="text-4xl font-semibold leading-[1.34] sm:text-[2.9rem]">
                Pronto para criar algo extraordinario com a gente?
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-white/80">
                Estamos sempre abertos para novas ideias, desafios complexos e produtos que merecem ganhar o mundo. Um e-mail
                ou uma chamada já dão o primeiro passo.
              </p>
            </div>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center self-start rounded-full border border-white px-10 py-3 text-base font-semibold transition-transform hover:-translate-y-1 hover:bg-white hover:text-[#016477]"
            >
              Enviar uma mensagem
              <svg
                aria-hidden="true"
                className="ml-3 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative mx-auto flex max-w-3xl items-center justify-center">
              <img
                src={projectsIllustration}
                alt="Conexao tecnologica"
                className="relative z-10 w-full max-w-[520px] drop-shadow-[0_55px_140px_-50px_rgba(0,0,0,0.65)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
