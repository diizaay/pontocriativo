import React from "react";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";

const alignmentClasses = {
  start: "items-start",
  center: "items-center",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
};

const SectionWrapper = ({ children, bg = "bg-white", theme = "white", align = "start" }) => (
  <section
    data-nav-theme={theme}
    className={`relative flex min-h-screen ${alignmentClasses[align] ?? alignmentClasses.start} ${justifyClasses[align] ?? justifyClasses.start
      } overflow-hidden py-16 sm:py-20 lg:py-24 ${bg}`}
  >
    {children}
  </section>
);

const aboutSections = [
  {
    key: "who-we-are",
    theme: "white",
    bg: "bg-white",
    layout: "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]",
    image: {
      gradient: "from-[#e3ecff] via-[#f5f8ff] to-[#fdfdff]",
      label: "Quem somos",
      description:
        "Mais de cinco anos cocriando produtos digitais ao lado de startups e grandes empresas em Angola e além.",
    },
    content: {
      eyebrow: "Nossa origem",
      title: "A CriaTec nasceu conectando talento, estratégia e proximidade com cada cliente.",
      description:
        "Fundamos o estúdio para entregar experiência ponta a ponta — da descoberta ao deploy. Cada projeto recebe um squad dedicado que trabalha como extensão do seu time, com transparência, rituais claros e métricas compartilhadas.",
      cta: {
        label: "Trabalhar conosco",
        to: "/contato",
      },
    },
  },
  {
    key: "what-we-value",
    theme: "white",
    bg: "bg-white",
    layout: "lg:grid-cols-[minmax(0,1fr)]",
    values: [
      { title: "Integridade", description: "Construímos relações duradouras com confiança e comunicação franca." },
      { title: "Flexibilidade", description: "Adaptações rápidas a novos contextos de negócio a cada sprint." },
      { title: "Colaboração", description: "Times híbridos com especialistas que trabalham lado a lado com você." },
      { title: "Mentalidade de negócio", description: "Toda entrega acompanha indicadores e relevância para o seu resultado." },
    ],
  },
  {
    key: "why-choose-us",
    theme: "blue",
    bg: "bg-[#016477]",
    layout: "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]",
    reasons: [
      {
        title: "Design estratégico",
        description:
          "Pesquisadores e designers atuam em pares, garantindo decisões baseadas em dados e hipóteses testadas cedo.",
      },
      {
        title: "Processos enxutos",
        description:
          "Sprints curtas, priorização semanal e governança leve. Você acompanha todo o roadmap em tempo real.",
      },
      {
        title: "Entrega mensurável",
        description:
          "Cada release vem com métricas, aprendizados e próximos passos claros para manter evolução contínua.",
      },
    ],
    support: {
      title: "Como podemos ajudar?",
      description:
        "Desenhe com a gente um plano de 90 dias para a sua próxima iniciativa digital e veja o impacto desde a primeira semana.",
      cta: {
        label: "Falar com especialistas",
        to: "/contato",
      },
    },
  },
  {
    key: "how-we-work",
    theme: "white",
    bg: "bg-white",
    process: {
      eyebrow: "Como trabalhamos",
      title: "Trabalhamos em um projeto por vez, com foco total no seu produto.",
      description:
        "Cada squad assume uma iniciativa por vez, garantindo foco profundo, comunicação contínua e resultados consistentes. Atuamos como parte do seu time interno, sem a burocracia de contratação.",
      cta: {
        label: "Explorar nosso processo",
        to: "/servicos",
      },
    },
    logos: ["LR Store", "Paga Aki", "Atlas Cargo", "Clínica Aurora", "Coletivo Vila", "Studio Horizonte"],
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <SectionWrapper theme="blue" bg="bg-[#016477]" align="center">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 text-center sm:px-6 lg:px-8">
          <Reveal as="h1" className="text-[2.9rem] font-semibold leading-[1.4] tracking-[-0.035em] text-white sm:text-[3.4rem]">
            Sobre nós
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Construímos produtos digitais em colaboração com os clientes, combinando estratégia, pesquisa, design e
            engenharia em cada etapa — sempre com foco em métricas de negócio e evolução contínua.
          </Reveal>
        </div>
      </SectionWrapper>

      {aboutSections.map((section, index) => {
        if (section.key === "who-we-are") {
          return (
            <SectionWrapper key={section.key} theme={section.theme} bg={section.bg}>
              <div className={`mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:${section.layout} lg:px-8`}>
                <Reveal
                  delay={80}
                  className="order-2 flex flex-col justify-center gap-6 rounded-[32px] bg-slate-50 p-10 lg:order-1"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#016477]/70">{section.content.eyebrow}</span>
                  <h2 className="text-3xl font-semibold leading-[1.38] tracking-[-0.03em] text-[#07173d] sm:text-[2.6rem]">
                    {section.content.title}
                  </h2>
                  <p className="text-base leading-relaxed text-slate-600">{section.content.description}</p>
                  <Link
                    to={section.content.cta.to}
                    className="inline-flex w-max items-center gap-3 rounded-full border border-[#016477] px-6 py-3 text-sm font-semibold text-[#016477] transition hover:bg-[#016477] hover:text-white"
                  >
                    {section.content.cta.label}
                  </Link>
                </Reveal>

                <Reveal
                  delay={200}
                  className="order-1 flex flex-col items-center justify-center gap-6 rounded-[32px] bg-white shadow-[0_30px_100px_-70px_rgba(0,77,163,0.45)] lg:order-2"
                >
                  <div className="flex min-h-[340px] w-full flex-col items-center justify-center gap-5 px-8 text-center">
                    <span className="rounded-full border border-[#016477]/15 bg-[#eaf2ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.36em] text-[#016477]">
                      {section.image.label}
                    </span>
                    <p className="max-w-sm text-sm leading-relaxed text-slate-600">{section.image.description}</p>
                  </div>
                </Reveal>
              </div>
            </SectionWrapper>
          );
        }

        if (section.key === "what-we-value") {
          return (
            <SectionWrapper key={section.key} theme="white" bg="bg-white">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#016477]/70">
                    O que valorizamos
                  </span>
                  <h3 className="text-3xl font-semibold tracking-[-0.02em] text-[#07173d] sm:text-[2.5rem]">
                    Nossa forma de trabalhar apoiada em valores que movem times digitais.
                  </h3>
                </Reveal>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {section.values.map((value, valueIndex) => (
                    <Reveal
                      key={value.title}
                      delay={valueIndex * 120}
                      className="relative overflow-hidden rounded-[28px] border border-[#e1e8f8] bg-[#f8faff] p-6 shadow-[0_28px_80px_-60px_rgba(0,77,163,0.35)] transition-transform duration-500 hover:-translate-y-2"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#016477]/70">{value.title}</span>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.description}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          );
        }

        if (section.key === "why-choose-us") {
          return (
            <SectionWrapper key={section.key} theme="blue" bg="bg-[#016477] text-white">
              <Reveal className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:px-8">
                <div className="space-y-6">
                  <Reveal className="space-y-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75">Por que escolher a gente</span>
                    <h3 className="text-3xl font-semibold leading-[1.38] tracking-[-0.02em] text-white sm:text-[2.6rem]">
                      Transformamos estratégia em produtos digitais que evoluem continuamente.
                    </h3>
                  </Reveal>
                  <div className="grid gap-5">
                    {section.reasons.map((reason, reasonIndex) => (
                      <Reveal
                        key={reason.title}
                        delay={reasonIndex * 140}
                        className="rounded-[24px] border border-white/20 bg-white/12 p-6 backdrop-blur transition hover:bg-white/18"
                      >
                        <h4 className="text-lg font-semibold leading-[1.38] text-white">{reason.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-white/80">{reason.description}</p>
                      </Reveal>
                    ))}
                  </div>
                </div>
                <Reveal
                  delay={220}
                  className="flex flex-col justify-between rounded-[32px] border border-white/20 bg-white/12 p-8 backdrop-blur"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75">Como podemos ajudar?</span>
                    <h4 className="mt-4 text-2xl font-semibold leading-[1.38] text-white">{section.support.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">{section.support.description}</p>
                  </div>
                  <Link
                    to={section.support.cta.to}
                    className="mt-6 inline-flex w-max items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#016477] transition hover:-translate-y-0.5"
                  >
                    {section.support.cta.label}
                  </Link>
                </Reveal>
              </Reveal>
            </SectionWrapper>
          );
        }

        if (section.key === "how-we-work") {
          return (
            <SectionWrapper key={section.key} theme="white" bg="bg-white">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
                <Reveal className="flex-1 space-y-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#016477]/70">{section.process.eyebrow}</span>
                  <h3 className="text-3xl font-semibold leading-[1.38] tracking-[-0.02em] text-[#07173d] sm:text-[2.6rem]">{section.process.title}</h3>
                  <p className="text-base leading-relaxed text-slate-600">{section.process.description}</p>
                  <Link
                    to={section.process.cta.to}
                    className="inline-flex w-max items-center gap-3 rounded-full border border-[#016477] px-6 py-3 text-sm font-semibold text-[#016477] transition hover:bg-[#016477] hover:text-white"
                  >
                    {section.process.cta.label}
                  </Link>
                </Reveal>
                <Reveal delay={120} className="flex-1 rounded-[30px] border border-[#dfe6ff] bg-[#f5f8ff] p-10">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#016477]/70">Confiado por</span>
                  <div className="mt-6 grid gap-6 text-slate-600 sm:grid-cols-2">
                    {section.logos.map((logo) => (
                      <div key={logo} className="rounded-2xl border border-[#e3ebff] bg-white px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.26em] text-[#07173d]">
                        {logo}
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </SectionWrapper>
          );
        }

        return null;
      })}

      <SectionWrapper theme="blue" bg="bg-[#016477] text-white" align="center">
        <div className="relative mx-auto max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
          <Reveal className="space-y-4">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/75">
              Manifesto
            </span>
            <h4 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-[2.6rem]">
              Projetamos futuros digitais com equipes que acreditam em transformação contínua.
            </h4>
            <p className="text-base leading-relaxed text-white/85">
              Parcerias de longo prazo, pares disciplinados e entregas frequentes. Esse é o modelo que mantém nossos
              clientes na dianteira e nos desafia a buscar evoluções constantes a cada sprint.
            </p>
          </Reveal>
          <Reveal delay={160} className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contato"
              className="btn-soft-elevate inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#016477] transition-transform hover:-translate-y-0.5"
            >
              Conversar sobre um projeto
            </Link>
            <Link
              to="/servicos"
              className="inline-flex items-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:border-white"
            >
              Conhecer nossos serviços
            </Link>
          </Reveal>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutPage;
