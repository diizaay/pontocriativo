import React from "react";
import Reveal from "./Reveal";

const steps = [
  {
    label: "01",
    title: "Kickoff & descoberta",
    description: "Imersão com stakeholders, definição de objetivos e alinhamento de métricas de sucesso.",
  },
  {
    label: "02",
    title: "Pesquisa & estratégia",
    description: "Mapeamento de jornadas, benchmarking e priorização de hipóteses com base em dados.",
  },
  {
    label: "03",
    title: "Design & validação",
    description: "Sprints de prototipagem, testes com usuários e refinamento colaborativo.",
  },
  {
    label: "04",
    title: "Entrega & evolução",
    description: "Handoff acompanhado, instrumentação de métricas e roadmap contínuo de melhorias.",
  },
];

const WorkflowSection = () => {
  return (
    <section
      data-nav-theme="white"
      className="bg-white py-24 md:flex md:min-h-screen md:items-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-14 px-4 text-center sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl space-y-4 text-center">
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#01233c]">
            Como trabalhamos
          </span>
          <h2 className="text-3xl font-semibold leading-[1.45] tracking-[-0.02em] text-[#01233c] sm:text-4xl">
            Um fluxo colaborativo e iterativo para transformar estratégia em produto.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#01233c]/80">
            Construímos parceria total com o seu time para evoluir cada etapa: do kickoff à entrega, sem perder ritmo
            nem visão estratégica.
          </p>
        </Reveal>

        <div className="flex w-full max-w-5xl flex-col gap-6">
          {steps.map((step, index) => (
            <Reveal
              key={step.label}
              delay={index * 90}
              className="workflow-card relative flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-10 text-[#01233c] shadow-[0_30px_80px_-60px_rgba(15,23,42,0.18)] text-center transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_36px_120px_-56px_rgba(15,23,42,0.24)]"
              style={{ "--stack-depth": steps.length - index }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                {step.label}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#01233c]/80">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
