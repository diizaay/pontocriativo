import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../services/api";
import { mockData } from "../data/mock";
import Reveal from "./Reveal";

const HomeProjectsStack = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        if (Array.isArray(data) && data.length) {
          setProjects(data);
        } else {
          setProjects(mockData.projects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects(mockData.projects);
      }
    };

    fetchProjects();
  }, []);

  const featuredProjects = useMemo(() => projects.slice(0, 4), [projects]);

  const stackRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    setVisibleCards([]);
  }, [featuredProjects]);

  useEffect(() => {
    if (!stackRef.current || !featuredProjects.length) return undefined;

    const cards = Array.from(stackRef.current.querySelectorAll("[data-project-card]"));
    if (!cards.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-project-index") ?? "-1");
            if (!Number.isNaN(index)) {
              setVisibleCards((prev) => {
                if (prev.includes(index)) return prev;
                const next = [...prev, index];
                next.sort((a, b) => a - b);
                return next;
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -15%" },
    );

    cards.forEach((card, index) => {
      card.setAttribute("data-project-index", String(index));
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [featuredProjects]);

  if (!featuredProjects.length) {
    return null;
  }

  return (
    <section
      id="featured-projects"
      data-nav-theme="white"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f4f8ff] to-white py-24 text-[#0f1e3b] sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#d9e9ff]/40 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <Reveal className="space-y-6 text-left md:text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#6c8ac0]">
            Projetos em destaque
          </p>
          <h2 className="text-3xl font-semibold leading-[1.4] tracking-[-0.03em] sm:text-4xl md:text-[3rem]">
            Cada projeto e um capitulo diferente da nossa parceria com times ambiciosos.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
            Selecionamos alguns estudos de caso para mostrar como combinamos estratégia, design e engenharia na
            construção de experiências digitais completas.
          </p>
        </Reveal>

        <div ref={stackRef} className="relative space-y-16">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const cardGradientStops = isEven
              ? ["rgba(255,255,255,0.95)", "rgba(236,244,255,0.92)", "rgba(223,235,255,0.9)"]
              : ["rgba(255,255,255,0.95)", "rgba(231,243,255,0.92)", "rgba(214,232,255,0.9)"];
            const tagTone = isEven
              ? "bg-[#e7f1ff] text-[#0f3b72] border-[#b9d4ff]"
              : "bg-[#f0f6ff] text-[#25508f] border-[#c7dcff]";
            const isCardVisible = visibleCards.includes(index);

            return (
              <article key={project.id} className="relative min-h-[80vh]">
                <div className="sticky top-28" style={{ zIndex: index + 1 }}>
                  <div
                    data-project-card
                    data-project-index={index}
                    className={`group relative mx-auto flex h-full w-full max-w-4xl flex-col gap-10 rounded-[32px] border border-[#d7e7ff] p-8 shadow-[0_40px_120px_-80px_rgba(15,40,70,0.28)] backdrop-blur transition-all duration-700 ease-out md:p-12 ${
                      isCardVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${cardGradientStops.join(", ")})`,
                      transitionDelay: `${index * 140}ms`,
                    }}
                  >
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,1fr)] lg:items-center">
                      <div className="relative overflow-hidden rounded-[28px] border border-[#d7e7ff] bg-white/70">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full max-h-[400px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0" />
                      </div>

                      <div className="space-y-6">
                        <Reveal delay={index * 60}>
                          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#5a77a6]">
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <span className="h-px w-14 bg-[#a8c4f1]" />
                            <span className="tracking-[0.2em] text-[#5a77a6]">{project.category}</span>
                          </div>
                          <h3 className="mt-4 text-3xl font-semibold leading-[1.32] text-[#0f264e] md:text-[2.5rem]">
                            {project.title}
                          </h3>
                          <p className="text-base leading-relaxed text-slate-600">{project.description}</p>
                        </Reveal>

                        <Reveal delay={120 + index * 60} className="flex flex-wrap gap-3">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={`${project.id}-${tag}`}
                              className={`rounded-full border px-4 py-2 text-[0.75rem] font-medium uppercase tracking-[0.18em] ${tagTone}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </Reveal>

                        <Reveal delay={180 + index * 60}>
                          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 text-sm text-[#284472]">
                            <span className="font-medium text-[#0f3c70]">{project.results}</span>
                            <Link
                              to={`/projetos/${project.id}`}
                              className="inline-flex items-center gap-3 rounded-full border border-[#bcd5ff] px-5 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#0f3c70] transition-colors hover:border-[#0f3c70] hover:bg-[#0f3c70]/10"
                            >
                              Ver estudo de caso
                              <svg
                                aria-hidden="true"
                                className="h-3 w-3"
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
                        </Reveal>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <Reveal delay={200} className="flex justify-center">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-3 rounded-full border border-[#bcd5ff] px-10 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3c70] transition-all hover:-translate-y-0.5 hover:border-[#0f3c70] hover:bg-[#0f3c70]/10"
          >
            Ver todos os projetos
            <svg
              aria-hidden="true"
              className="h-3 w-3"
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
      </div>
    </section>
  );
};

export default HomeProjectsStack;
