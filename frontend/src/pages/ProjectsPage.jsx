import React from "react";
import Projects from "../components/Projects";
import Reveal from "../components/Reveal";

const ProjectsPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <section
        data-nav-theme="blue"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#01233c] pt-32 pb-24 text-white"
      >
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
