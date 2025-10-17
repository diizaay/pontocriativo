import React from "react";
import Projects from "../components/Projects";
import Reveal from "../components/Reveal";

const ProjectsPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <section
        data-nav-theme="blue"
        className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#003b8f] via-[#0059c5] to-[#44beee] pt-32 pb-24 text-white"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-white/15 blur-[160px]" />
          <div className="absolute right-0 top-10 h-[360px] w-[360px] rounded-full bg-[#44beee]/40 blur-[200px]" />
          <div className="absolute bottom-[-140px] left-1/4 h-64 w-64 rounded-full bg-white/10 blur-[150px]" />
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#012a67]/75 to-transparent" />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <Reveal className="space-y-6 text-center text-white md:space-y-8">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em]">
              Portfolio em destaque
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.34] tracking-[-0.02em] sm:text-5xl md:text-[3.4rem]">
              Soluções digitais que transformam negócios ambiciosos em referências do mercado.
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80">
              Selecionamos projetos que mostram como combinamos estratégia, pesquisa, design e tecnologia para construir
              experiências memoráveis com resultados concretos.
            </p>
          </Reveal>
        </div>
      </section>

      <Projects />
    </div>
  );
};

export default ProjectsPage;
