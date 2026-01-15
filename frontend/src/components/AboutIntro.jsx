import React from "react";
import Reveal from "./Reveal";

const highlights = [
  {
    title: "Produtos Digitais",
    description:
      "Experiências web e mobile com foco em performance e usabilidade, pensadas para escalar negócios.",
  },
  {
    title: "Branding & Identidade",
    description: "Construímos marcas digitais consistentes, com sistemas visuais robustos e memoráveis.",
  },
  {
    title: "Pesquisa & Estratégia",
    description: "Descobrimos oportunidades reais por meio de dados, entrevistas e testes contínuos.",
  },
];

const AboutIntro = () => {
  return (
    <section
      data-nav-theme="white"
      className="bg-white py-24 text-slate-900 md:flex md:min-h-screen md:items-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <Reveal className="space-y-6">
          <span className="inline-flex rounded-full border border-[#016477]/20 bg-[#00a3ab]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#016477]">
            Sobre nós
          </span>
          <h2 className="text-3xl font-semibold leading-[1.45] tracking-[-0.02em] sm:text-4xl">
            Produto, marca e tecnologia se encontram para criar experiências memoráveis.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            Trabalhamos lado a lado com equipes visionárias para lançar produtos digitais que unem propósito, estética e
            performance. Cada projeto nasce de pesquisa profunda e desenho estratégico.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 100}
              className="rounded-3xl bg-[#016477] p-8 text-white shadow-[0_32px_90px_-60px_rgba(0,77,163,0.45)] transition-transform duration-500 hover:-translate-y-3 hover:bg-[#00a3ab] hover:text-[#016477] reveal-slide-right"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white hover:text-[#016477]">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;

