import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { mockData } from "../data/mock";

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

const IndustriesPage = () => {
  const { industries } = mockData;

  const info = useMemo(
    () => ({
      "E-commerce": {
        description:
          "Plataformas completas de vendas online com gestão de estoque, pagamentos e logística integrados.",
        solutions: ["Lojas virtuais", "Marketplaces", "Integração de pagamentos", "Gestão de estoque"],
      },
      Saúde: {
        description:
          "Sistemas para clínicas, hospitais e telemedicina com foco em segurança, LGPD e jornadas humanizadas.",
        solutions: ["Prontuário eletrônico", "Agendamento online", "Telemedicina", "Gestão de clínicas"],
      },
      Educação: {
        description:
          "Ecossistemas de aprendizagem, plataformas EAD e experiências imersivas que engajam estudantes.",
        solutions: ["LMS", "Aplicativos educacionais", "Gestão escolar", "Gamificação"],
      },
      Finanças: {
        description:
          "Soluções fintech, banking as a service e plataformas de investimento com foco em performance e compliance.",
        solutions: ["Carteiras digitais", "Plataformas de investimento", "Open finance", "Analytics em tempo real"],
      },
      Varejo: {
        description:
          "Experiências omnichannel conectando o físico ao digital com dados unificados e personalização.",
        solutions: ["PDV integrado", "Experiência mobile", "CRM e fidelização", "Inteligência de estoque"],
      },
      Tecnologia: {
        description: "Soluções SaaS, APIs e plataformas digitais escaláveis que suportam crescimento acelerado.",
        solutions: ["SaaS", "APIs e integrações", "Arquitetura escalável", "Observabilidade"],
      },
      Alimentação: {
        description:
          "Apps de delivery, gestão de operações e experiências digitais que aumentam recorrência e ticket médio.",
        solutions: ["Plataformas de pedidos", "Gestão de cardápios", "Kitchen display systems", "Programas de fidelidade"],
      },
      Logística: {
        description:
          "Sistemas de rastreamento, gestão de frotas e otimização de rotas para operações de alto volume.",
        solutions: ["Rastreamento em tempo real", "Gestão de frotas", "Otimização de rotas", "Monitoramento de SLAs"],
      },
    }),
    [],
  );

  return (
    <div className="bg-white text-slate-900">
      <SectionWrapper theme="blue" bg="bg-[#016477]" align="center">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 text-center sm:px-6 lg:px-8">
          <Reveal as="h1" className="text-[2.9rem] font-semibold leading-[1.4] tracking-[-0.035em] text-white sm:text-[3.4rem]">
            Indústrias que impulsionamos
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Atuamos como parceiro estratégico em diferentes setores, adaptando processos, times e tecnologia para gerar
            impacto mensurável desde o primeiro sprint.
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper theme="white" bg="bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#016477]/70">
              Nossas experiências
            </span>
            <h2 className="text-3xl font-semibold leading-[1.38] tracking-[-0.02em] text-[#07173d] sm:text-[2.6rem]">
              Do comércio ao healthtech: construímos experiências digitais relevantes para cada mercado.
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal
                key={industry.name}
                delay={index * 60}
                className="rounded-[28px] border border-[#e1e8f8] bg-[#f5f8ff] p-6 text-left shadow-[0_26px_80px_-60px_rgba(0,77,163,0.25)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_32px_90px_-50px_rgba(0,77,163,0.3)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#016477]/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[#07173d]">{industry.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{info[industry.name]?.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {industries.map((industry, index) => (
        <SectionWrapper
          key={industry.name}
          theme={index % 2 === 0 ? "white" : "blue"}
          bg={index % 2 === 0 ? "bg-white" : "bg-[#016477] text-white"}
          align="center"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:items-center lg:gap-14 lg:px-8">
            <Reveal delay={index * 40} className="space-y-6">
              <span
                className={`text-xs font-semibold uppercase tracking-[0.3em] ${index % 2 === 0 ? "text-[#016477]/70" : "text-white/80"
                  }`}
              >
                {String(index + 1).padStart(2, "0")} — Setor
              </span>
              <h3
                className={`text-3xl font-semibold leading-[1.38] tracking-[-0.02em] ${index % 2 === 0 ? "text-[#07173d]" : "text-white"
                  } sm:text-[2.6rem]`}
              >
                {industry.name}
              </h3>
              <p
                className={`text-base leading-relaxed ${index % 2 === 0 ? "text-slate-600" : "text-white/80"
                  }`}
              >
                {info[industry.name]?.description}
              </p>
            </Reveal>
            <Reveal delay={120 + index * 40} className="rounded-[30px] border border-[#e1e8f8] bg-[#f5f8ff] p-8 shadow-[0_32px_80px_-60px_rgba(0,77,163,0.3)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#016477]/70">
                Soluções entregues
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {info[industry.name]?.solutions.map((solution) => (
                  <span
                    key={`${industry.name}-${solution}`}
                    className="inline-flex items-center rounded-full border border-[#bcd5ff] bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#016477] transition-all duration-300 hover:-translate-y-1 hover:border-[#016477] hover:bg-[#016477] hover:text-white"
                  >
                    {solution}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </SectionWrapper>
      ))}

      <SectionWrapper theme="white" bg="bg-white">
        <div className="relative mx-auto max-w-4xl rounded-[36px] border border-[#dbe5f6] bg-white px-6 py-14 text-center shadow-[0_32px_96px_-68px_rgba(7,23,61,0.4)] sm:px-8 lg:px-12">
          <Reveal className="space-y-5">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#016477]/35 bg-[#f5f8ff] px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#016477]/80">
              Próximo passo
            </span>
            <h4 className="text-3xl font-semibold leading-[1.38] tracking-[-0.02em] text-[#07173d] sm:text-[2.6rem]">
              Não encontrou seu setor? Montamos squads híbridos prontos para qualquer vertical.
            </h4>
            <p className="text-base leading-relaxed text-slate-600">
              Conte para nós o contexto do seu negócio e desenhamos juntos um roadmap de impacto para os próximos 90 dias,
              com entregas claras desde as primeiras semanas.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Link
              to="/contato"
              className="btn-soft-elevate mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#016477] px-9 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Falar com especialistas
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default IndustriesPage;
