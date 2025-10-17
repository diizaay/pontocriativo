import React from "react";
import { mockData } from "../data/mock";
import Reveal from "./Reveal";

const principles = [
  {
    title: "Pesquisa viva",
    description:
      "Desk research, entrevistas e testes em campo para descobrir oportunidades reais antes de qualquer tela.",
  },
  {
    title: "Sprints estratégicos",
    description:
      "Workshops colaborativos e definição de métricas de sucesso para orientar cada decisão de produto.",
  },
  {
    title: "Design systems escaláveis",
    description:
      "Bibliotecas modulares e guidelines que garantem consistência visual e velocidade de evolução.",
  },
  {
    title: "Entrega contínua",
    description:
      "Squads multifuncionais cuidando do produto no dia a dia, com suporte pós-lançamento orientado por dados.",
  },
];

const workflow = [
  "Descoberta e pesquisa em campo com usuários e stakeholders.",
  "Workshops de estratégia e posicionamento com o time do cliente.",
  "Design systems e prototipagem de alta fidelidade para acelerar decisões.",
  "Suporte contínuo com melhorias orientadas por dados reais.",
];

const About = () => {
  const { about } = mockData;

  return (
    <section id="about" className="bg-[#f2f6ff] py-24 md:min-h-screen md:flex md:items-center">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            {about.title}
          </span>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-4xl leading-[1.35]">
            {about.subtitle}
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            {about.description}
          </p>
        </Reveal>

        <Reveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-100 bg-white px-6 py-8 shadow-[0_36px_100px_-60px_rgba(0,77,163,0.3)]"
            >
              <p className="text-3xl font-semibold text-slate-900 sm:text-4xl">{stat.number}</p>
              <p className="mt-3 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-white via-white to-accent p-10 shadow-[0_40px_110px_-70px_rgba(0,77,163,0.35)]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Nossos princípios de trabalho</h3>
              <p className="text-base leading-relaxed text-slate-600">
                Do discovery ao lançamento, conectamos estratégia, pesquisa, design e engenharia para criar produtos que
                evoluem continuamente.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-slate-600">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-slate-900">{principle.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="space-y-6 rounded-3xl border border-slate-100 bg-white p-10 shadow-[0_32px_90px_-60px_rgba(0,77,163,0.25)]">
          <h3 className="text-lg font-semibold text-slate-900">Como trabalhamos</h3>
          <p className="text-base leading-relaxed text-slate-600">
            Unimos estratégia, UX research, design e tecnologia em ciclos rápidos para garantir entregas consistentes e mensuráveis.
          </p>
          <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            {workflow.map((item, index) => (
              <li key={index} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
