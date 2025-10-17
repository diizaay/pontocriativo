import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import heroIllustration from "../assets/ilustration.svg";

const Hero = () => {
  return (
    <section
      data-nav-theme="blue"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#004da3] via-[#004da3] to-[#44beee] pt-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-white/10 blur-[160px]" />
        <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-[#44beee]/40 blur-[220px]" />
        <div className="absolute bottom-[-140px] left-1/3 h-72 w-72 rounded-full bg-white/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.85fr)]">
          <Reveal className="space-y-8">
            <h1 className="text-4xl font-semibold leading-[1.45] tracking-[-0.03em] sm:text-5xl lg:text-[3.7rem]">
              Desenhamos produtos digitais que aceleram negócios ambiciosos.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              Estratégia, pesquisa e design trabalhando juntos para lançar experiências digitais memoráveis em tempo recorde.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#004da3] shadow-[0_24px_48px_-18px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5"
              >
                Falar com especialistas
              </Link>
              <Link
                to="/projetos"
                className="inline-flex items-center rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white/90 transition-transform hover:-translate-y-0.5 hover:bg-white/10"
              >
                Ver nossos projetos
              </Link>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="relative mx-auto flex max-w-3xl items-center justify-center">
              <div className="absolute inset-0 -translate-y-16 scale-[1.25] rounded-full bg-[#44beee]/40 blur-[220px] opacity-70" />
              <img
                src={heroIllustration}
                alt="Ilustração de tecnologia"
                className="relative z-10 w-full max-w-[560px] opacity-75 drop-shadow-[0_55px_150px_-60px_rgba(5,24,68,0.7)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
