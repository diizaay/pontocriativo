import React, { useMemo } from "react";
import Reveal from "./Reveal";

const principles = [
  "Foco absoluto no usuário",
  "Discovery contínuo",
  "Sprints colaborativos",
  "Design system escalável",
  "Delivery orientado a métricas",
  "Time dedicado sob medida",
  "Suporte e evolução",
  "Tecnologia adequada ao contexto",
];

const PrinciplesSection = () => {
  const [leftColumn, rightColumn] = useMemo(() => {
    const left = principles.filter((_, index) => index % 2 === 0);
    const right = principles.filter((_, index) => index % 2 !== 0);
    return [left, right];
  }, []);

  return (
    <section
      data-nav-theme="blue"
      className="bg-[#016477] py-24 text-white md:flex md:min-h-screen md:items-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl space-y-4">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur">
            Nossos princípios
          </span>
          <h2 className="text-3xl font-semibold leading-[1.45] tracking-[-0.02em] sm:text-4xl">
            Um framework vivo que mantém estratégia e execução alinhadas.
          </h2>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {[{ list: leftColumn, animation: "animate-column-up" }, { list: rightColumn, animation: "animate-column-down" }].map(
            (column, columnIndex) => (
              <div key={columnIndex} className="relative h-[520px] overflow-hidden">
                <div className={`grid gap-4 ${column.animation}`}>
                  {[...column.list, ...column.list].map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="rounded-3xl bg-white/15 px-6 py-10 text-white shadow-[0_24px_60px_-40px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:-translate-y-2 hover:bg-white/25"
                    >
                      <p className="text-lg font-semibold leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
