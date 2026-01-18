import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const stats = [
  { value: "10", suffix: "+", label: "Especialistas" },
  { value: "30", suffix: "+", label: "Projetos" },
  { value: "5", suffix: "+", label: "Anos de atuação" },
  { value: "10", suffix: "+", label: "Indústrias" },

];

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState(() => stats.map(() => 0));

  useEffect(() => {
    if (hasAnimated) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.35 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return undefined;

    const targets = stats.map((stat) => parseInt(stat.value, 10));
    const duration = 1800;
    const start = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    let animationFrame;

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(progress);

      setDisplayValues(targets.map((target) => Math.round(target * eased)));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      data-nav-theme="white"
      className="bg-white py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <Reveal className="space-y-6">
          <div className="h-1 w-16 rounded-full bg-[#01233c]" />
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#01233c]/70">
              Impacto comprovado
            </p>
            <h2 className="text-3xl font-semibold leading-[1.45] tracking-[-0.02em] text-[#01233c] sm:text-4xl">
              Nossa história em números
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const target = parseInt(stat.value, 10);
            const current = Math.min(displayValues[index], target);
            const shouldPad = stat.value.startsWith("0");
            const formattedValue = shouldPad
              ? String(current).padStart(stat.value.length, "0")
              : String(current);

            return (
              <Reveal
                key={stat.label}
                delay={index * 90}
                className="group relative flex flex-col items-center overflow-hidden rounded-[32px] border border-[#01233c]/10 bg-white px-8 py-12 text-center shadow-[0_30px_80px_-60px_rgba(0,35,60,0.25)] transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-[32px] bg-[#01233c]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-baseline gap-2 text-5xl font-semibold text-[#01233c]">
                  <span>{formattedValue}</span>
                  <span className="text-3xl font-semibold text-[#00a3ab]">{stat.suffix}</span>
                </div>
                <p className="relative mt-5 text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                  {stat.label}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
