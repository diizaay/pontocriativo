import React, { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { mockData } from "../data/mock";

const Testimonials = () => {
  const { testimonials } = mockData;
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const title = useMemo(() => "O que nossos clientes dizem.", []);

  return (
    <section
      data-nav-theme="white"
      className="bg-white py-24 text-[#01233c] md:flex md:min-h-screen md:items-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <Reveal className="space-y-6">
          <span className="inline-flex rounded-full border border-[#01233c]/20 bg-[#01233c]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#01233c]">
            Depoimentos
          </span>
          <h2 className="text-4xl font-semibold leading-[1.45] tracking-[-0.03em] sm:text-5xl">{title}</h2>
        </Reveal>

        <Reveal delay={180} className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <p className="text-lg leading-relaxed text-[#01233c]/80">"{active.content}"</p>
          <div className="flex flex-col items-center gap-4 text-center">
            <img src={active.avatar} alt={active.name} className="h-28 w-28 rounded-full object-cover" />
            <div>
              <p className="text-base font-semibold">{active.name}</p>
              <p className="text-sm text-slate-500">{active.role}</p>
            </div>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#01233c] transition-transform hover:-translate-y-1 hover:border-[#01233c]/60 hover:bg-[#01233c]/5"
                aria-label="Depoimento anterior"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#01233c] transition-transform hover:-translate-y-1 hover:border-[#01233c]/60 hover:bg-[#01233c]/5"
                aria-label="Próximo depoimento"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;

