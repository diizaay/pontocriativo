import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { mockData } from "../data/mock";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const HomeServicesRail = () => {
  const services = useMemo(
    () =>
      mockData.services.map((service, index) => ({
        ...service,
        slug: `servico-${slugify(service.title)}`,
        index: String(index + 1).padStart(2, "0"),
      })),
    [],
  );

  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const trackRef = useRef(null);
  const animationFrame = useRef(null);

  const [sectionHeight, setSectionHeight] = useState("auto");
  const [offset, setOffset] = useState(0);

  const updateMeasurements = () => {
    if (!stickyRef.current || !trackRef.current) return;
    const stickyHeight = stickyRef.current.offsetHeight;
    const trackWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollableDistance = Math.max(0, trackWidth - viewportWidth);
    setSectionHeight(stickyHeight + scrollableDistance);
    return scrollableDistance;
  };

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const handleResize = () => updateMeasurements();
    let resizeObserver = null;

    if ("ResizeObserver" in window) {
      resizeObserver = new window.ResizeObserver(() => {
        updateMeasurements();
      });
      if (trackRef.current) {
        resizeObserver.observe(trackRef.current);
      }
    }

    window.addEventListener("resize", handleResize);
    updateMeasurements();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (animationFrame.current) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !stickyRef.current || !trackRef.current) return;

      if (animationFrame.current) {
        window.cancelAnimationFrame(animationFrame.current);
      }

      animationFrame.current = window.requestAnimationFrame(() => {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const stickyHeight = stickyRef.current.offsetHeight;
        const maxOffset = Math.max(
          0,
          trackRef.current.scrollWidth - stickyRef.current.offsetWidth,
        );
        const totalScrollable = sectionRef.current.offsetHeight - stickyHeight;

        if (totalScrollable <= 0) {
          setOffset(0);
          return;
        }

        const progress = Math.min(
          Math.max(-sectionRect.top / totalScrollable, 0),
          1,
        );

        setOffset(progress * maxOffset);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-nav-theme="white"
      style={{ height: sectionHeight }}
      className="relative bg-white text-[#0b2247]"
    >

      <div
        ref={stickyRef}
        className="sticky top-20 mx-auto flex h-[76vh] min-h-[520px] w-full max-w-6xl flex-col justify-center gap-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="space-y-6">
          <span className="inline-flex items-center gap-3 rounded-full border border-[#c6daf7] bg-[#f2f7ff] px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#0f3b70]">
            Serviços
          </span>
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.45] tracking-[-0.03em] text-[#0a1f3f] sm:text-[3rem]">
              Impacto em cada etapa da jornada digital
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Rolando a página, explore os serviços que conectam estratégia,
              design e tecnologia para acelerar seus resultados.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max gap-8 transition-transform duration-150 ease-out will-change-transform"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/servicos#${service.slug}`}
                className="group home-service-card relative flex min-h-[360px] w-[300px] flex-col gap-6 overflow-hidden rounded-[28px] border border-[#d6e5fb] bg-white/95 p-7 text-left shadow-[0_36px_110px_-70px_rgba(15,38,70,0.35)] transition-transform duration-300 hover:-translate-y-2 sm:w-[330px]"
              >

                <div className="relative flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-[#5a77a6]">
                  <span>{service.index}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c7dcff] text-[#0f3b70] transition group-hover:border-[#0f3b70] group-hover:bg-[#0f3b70]/10">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>

                <div className="relative space-y-4">
                  <h3 className="text-2xl font-semibold leading-[1.38] text-[#0f264e]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                </div>

                <div className="relative space-y-2 text-[0.7rem] uppercase tracking-[0.22em] text-[#5a77a6]">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={`${service.slug}-${feature}-${index}`} className="flex items-center gap-3">
                      <span className="h-px flex-1 bg-[#d1dff3] transition-colors group-hover:bg-[#0f3b70]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesRail;
