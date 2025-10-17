import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { mockData } from "../data/mock";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const serviceEnhancements = {
  1: {
    focus: ["Descoberta com stakeholders", "Jornadas, dores e oportunidades priorizadas"],
    deliverables: ["Mapa de oportunidades", "Roadmap de MVP", "Modelo de governança com indicadores"],
  },
  2: {
    focus: ["Design system escalável", "Protótipos navegaveis validados com usuários"],
    deliverables: ["Biblioteca de componentes", "Guia de linguagem visual", "Plano de iteração continua"],
  },
  3: {
    focus: ["Arquitetura moderna", "Deploys frequentes com observabilidade"],
    deliverables: ["Mapa de integrações", "Pipeline CI/CD", "Playbook operacional com SLAs"],
  },
  4: {
    focus: ["Narrativa omnichannel consistente", "Conteúdos conectados a resultados de negócio"],
    deliverables: ["Manual de storytelling", "Calendário editorial", "Kit de assets multimídia"],
  },
  5: {
    focus: ["Auditoria técnica completa", "Workshops orientados a dados e tendencias"],
    deliverables: ["Blueprint tecnológico recomendado", "Plano de evolução em sprints", "Relatorio executivo de riscos"],
  },
  6: {
    focus: ["Monitoramento 24/7", "Backlog de evolução alinhado a impacto"],
    deliverables: ["Runbook de incidentes", "Painel de observabilidade", "Backlog trimestral priorizado"],
  },
};

const practicePillars = [
  {
    label: "Imersão orientada a dados",
    copy: "Pesquisamos usuários, processos e indicadores para definir objetivo comum e mapear riscos reais.",
  },
  {
    label: "Sprints de co-criação",
    copy: "Workshops, protótipos navegaveis e validação com usuários antes de escrever qualquer linha de código.",
  },
  {
    label: "Entrega contínua",
    copy: "Roadmaps quinzenais, releases incrementais e governança de design system para manter consistência.",
  },
  {
    label: "Evolução compartilhada",
    copy: "KPIs monitorados, experimentos constantes e backlog priorizado junto ao time do cliente.",
  },
];

const processSteps = [
  {
    range: "Semanas 0-2",
    title: "Kickoff e descoberta",
    copy: "Imersão com stakeholders, definição de objetivos, mapeamento de jornada atual e priorização de hipóteses.",
  },
  {
    range: "Semanas 3-8",
    title: "Design + entrega iterativa",
    copy: "Sprints curtas com protótipos, validação qualitativa e releases incrementais orientados por dados.",
  },
  {
    range: "Continuo",
    title: "Escala e suporte",
    copy: "Monitoramos indicadores, alimentamos backlog e estruturamos squads para evolução continua.",
  },
];

const accentGradients = [
  "from-white via-[#f5f9ff] to-white",
  "from-white via-[#f3f8ff] to-white",
  "from-white via-[#f4f9ff] to-white",
];

const ServicesPage = () => {
  const services = useMemo(
    () =>
      mockData.services.map((service, index) => ({
        ...service,
        slug: `servico-${slugify(service.title)}`,
        accent: accentGradients[index % accentGradients.length],
      })),
    [],
  );

  const [activeSlug, setActiveSlug] = useState(services[0]?.slug ?? "");

  useEffect(() => {
    if (!services.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);

        if (visible.length > 0) {
          setActiveSlug(visible[0].target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.2,
      },
    );

    const elements = services
      .map((service) => document.getElementById(service.slug))
      .filter((element) => element !== null);

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [services]);

  return (
    <div className="services-page bg-white text-slate-900">
      <section
        data-nav-theme="blue"
        className="relative overflow-hidden bg-[#004da3] pt-32 pb-24 text-white"
      >
        <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal as="h1" delay={120} className="mt-6 text-[2.7rem] font-semibold leading-[1.34] tracking-[-0.035em] sm:text-[3.2rem]">
            Estrategia, design e tecnologia para produtos digitais completos.
          </Reveal>
          <Reveal
            as="p"
            delay={240}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Combinamos discovery, UX, UI e engenharia para tirar ideias do papel ou evoluir plataformas existentes. Cada
            projeto recebe um squad dedicado, com rituais, indicadores e entregaveis claros do kickoff a evolução.
          </Reveal>
        </div>
      </section>

      <section data-nav-theme="white" className="relative border-t border-[#e1e8f8] bg-white pb-24 pt-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-transparent to-transparent" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
          <aside className="hidden lg:block lg:w-[240px]">
            <div className="sticky top-28 space-y-3">
              {services.map((service, index) => {
                const isActive = activeSlug === service.slug;
                return (
                  <Link
                    key={service.slug}
                    to={`/servicos#${service.slug}`}
                    className={`group flex items-start gap-3 rounded-2xl border px-4 py-3 transition ${
                      isActive
                        ? "border-[#0b2a68] bg-[#0b2a68]/5 text-[#0b2a68]"
                        : "border-transparent text-slate-500 hover:border-[#0b2a68]/20 hover:text-[#0b2a68]"
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.32em]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex flex-col gap-1">
                      <span className="text-sm font-semibold">{service.title}</span>
                      <span className="text-[0.62rem] uppercase tracking-[0.34em] text-[#0b2a68]/50">Explorar</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </aside>

          <div className="flex-1 space-y-28">
            {services.map((service, index) => {
              const enhancement = serviceEnhancements[service.id] ?? { focus: [], deliverables: [] };
              const baseDelay = index * 140;

              return (
                <article
                  key={service.id}
                  id={service.slug}
                  className="services-section scroll-mt-28"
                  data-service-index={String(index + 1).padStart(2, "0")}
                >
                  <div className="group relative overflow-hidden rounded-[36px] border border-[#d8e3ff] bg-white shadow-[0_44px_140px_-70px_rgba(11,42,104,0.45)] transition-transform duration-600 ease-out hover:-translate-y-3 hover:shadow-[0_54px_160px_-60px_rgba(11,42,104,0.5)]">
                    <div className="relative grid min-h-[72vh] gap-10 overflow-hidden p-8 sm:p-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:p-14">
                      <Reveal delay={baseDelay + 80} className="services-visual hidden h-full w-full max-w-[320px] flex-none flex-col justify-between rounded-[32px] bg-[#e8f1ff] p-8 text-[#0b2a68] lg:flex">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0b2a68]/70">
                            Servico {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-4 text-lg font-semibold leading-[1.34] text-[#07173d]">
                            {service.title.split(" ")[0]}
                          </h3>
                        </div>
                        {enhancement.focus.length > 0 && (
                          <ul className="space-y-3 text-sm text-[#0b2a68]/80">
                            {enhancement.focus.slice(0, 3).map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-[#0b2a68]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </Reveal>

                      <div className="flex flex-col gap-10">
                        <div className="space-y-6">
                          <Reveal
                            as="span"
                            delay={baseDelay}
                            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b2a68]/70"
                          >
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <span className="h-px w-10 bg-[#0b2a68]/15" />
                            <span>Servico</span>
                          </Reveal>

                          <Reveal delay={baseDelay + 120}>
                            <h2 className="text-4xl font-semibold leading-[1.34] tracking-[-0.025em] text-[#07173d] sm:text-[2.75rem]">
                              {service.title}
                            </h2>
                          </Reveal>

                          <Reveal
                            as="p"
                            delay={baseDelay + 220}
                            className="max-w-2xl text-[1.05rem] leading-relaxed text-slate-600"
                          >
                            {service.description}
                          </Reveal>
                        </div>

                        <Reveal delay={baseDelay + 300}>
                          <div className="flex flex-wrap gap-3">
                            {service.features.map((feature, featureIndex) => (
                              <span
                                key={`${service.slug}-${feature}-${featureIndex}`}
                                className="services-feature-chip inline-flex items-center gap-2 rounded-full border border-[#bcd5ff] bg-[#e8f1ff]/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b2a68]"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </Reveal>

                        {enhancement.deliverables.length > 0 && (
                          <Reveal delay={baseDelay + 380}>
                            <div className="grid gap-4 rounded-[30px] border border-[#d4e3ff] bg-[#f4f8ff] p-6 sm:grid-cols-2">
                              {enhancement.deliverables.map((item) => (
                                <div key={item} className="text-sm font-medium text-[#0b2a68]">
                                  {item}
                                </div>
                              ))}
                            </div>
                          </Reveal>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section data-nav-theme="white" className="relative overflow-hidden bg-gradient-to-br from-white via-[#f5f8ff] to-white py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl grid gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,0.8fr)] lg:px-8 lg:items-center">
          <div className="space-y-8">
            <Reveal
              as="span"
              className="inline-flex rounded-full border border-[#d5e1ff] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b2a68]/70"
            >
              Método em ação
            </Reveal>
            <Reveal
              as="h2"
              delay={140}
              className="text-3xl font-semibold leading-[1.35] tracking-[-0.02em] text-[#07173d] sm:text-[2.6rem]"
            >
              Alinhamos estratégia, execução e resultados com um processo colaborativo.
            </Reveal>
            <Reveal as="p" delay={240} className="max-w-2xl text-base leading-relaxed text-slate-600">
              Trabalhamos em ciclos curtos com visibilidade total para o seu time. Da definição de objetivos a releases e
              aprendizado contínuo, mantemos foco em impacto de negócio e experiência do usuário.
            </Reveal>

            <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
              {practicePillars.map((item, itemIndex) => (
                <Reveal
                  key={item.label}
                  delay={320 + itemIndex * 120}
                  className="practice-pillars-card rounded-3xl border border-[#dbe6ff] bg-white px-5 py-5"
                >
                  <h3 className="text-base font-semibold text-[#0b2a68]">{item.label}</h3>
                  <p className="mt-2 leading-relaxed">{item.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="practice-timeline space-y-5 rounded-[36px] border border-[#dbe6ff] bg-white p-8">
            {processSteps.map((phase, index) => (
              <Reveal
                key={phase.title}
                delay={360 + index * 160}
                className="practice-timeline-step rounded-3xl border border-[#e6edff] bg-white/80 p-6"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-[#0b2a68]/60">
                  <span>{phase.range}</span>
                  <span className="practice-progress-dot" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#07173d]">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{phase.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="blue" className="relative overflow-hidden bg-[#004da3] py-24 text-white">
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
          <Reveal className="space-y-6">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              Pronto para comecar?
            </span>
            <h3 className="text-3xl font-semibold leading-[1.35] tracking-[-0.02em] sm:text-[2.7rem]">
              Montamos um squad sob medida em menos de duas semanas.
            </h3>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/80">
              Compartilhe os objetivos da sua iniciativa digital e cocriamos um plano para os primeiros 90 dias, com
              entregas, rituais e indicadores alinhados.
            </p>
          </Reveal>

          <Reveal delay={120} className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contato"
              className="btn-soft-elevate inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0b2a68] transition-transform hover:-translate-y-0.5"
            >
              Agendar conversa
            </Link>
            <Link
              to="/sobre"
              className="inline-flex items-center rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:border-white"
            >
              Conhecer a equipe
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
