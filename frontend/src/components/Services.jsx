import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getServices } from "../services/api";
import { mockData } from "../data/mock";
import Reveal from "./Reveal";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getServices();
        if (Array.isArray(data) && data.length) {
          setServices(data);
        } else {
          setServices(mockData.services);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices(mockData.services);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const enhancedServices = useMemo(
    () =>
      services.map((service) => ({
        ...service,
        slug: `servico-${slugify(service.title)}`,
      })),
    [services],
  );

  const updateMeasurements = () => {
    if (!wrapperRef.current || !trackRef.current) return;
    const wrapperWidth = wrapperRef.current.clientWidth;
    const trackWidth = trackRef.current.scrollWidth;
    const newMaxOffset = Math.max(0, trackWidth - wrapperWidth);
    setMaxOffset(newMaxOffset);
  };

  useEffect(() => {
    updateMeasurements();
  }, [enhancedServices]);

  useEffect(() => {
    const handleResize = () => updateMeasurements();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !wrapperRef.current || !trackRef.current || maxOffset <= 0) {
        return;
      }

      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      frameRef.current = window.requestAnimationFrame(() => {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;

        const start = sectionTop - viewportHeight;
        const end = sectionTop + sectionHeight;
        const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
        const nextOffset = -progress * maxOffset;

        setOffset(nextOffset);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [maxOffset]);

  if (loading) {
    return (
      <section id="services" className="bg-[#05070f] py-24 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 text-center sm:px-6 lg:px-8">
          <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/25 border-t-white" />
          <p className="text-xs uppercase tracking-[0.32em] text-white/60">carregando serviços</p>
        </div>
      </section>
    );
  }

  if (!enhancedServices.length) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      id="services"
      data-nav-theme="white"
      className="relative overflow-hidden bg-[#05070f] py-24 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(68,190,238,0.2)_0%,_transparent_65%)]" />
        <div className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-[#05070f] via-[#05070f]/60 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-[#05070f] via-[#05070f]/60 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <Reveal className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-white/45">Serviços</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-light leading-none tracking-[-0.03em] text-white sm:text-[3.2rem]">
              <span className="font-serif italic text-white/75">Browse</span>{" "}
              <span className="font-semibold">by Category</span>
            </h2>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver todos os serviços
              <svg
                aria-hidden="true"
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <div
          ref={wrapperRef}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#05070f]/40 p-8 sm:p-10"
        >
          <div
            ref={trackRef}
            className="flex min-w-max gap-8 transition-transform duration-150 ease-out"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {enhancedServices.map((service) => (
              <Link
                key={service.slug}
                to={`/servicos#${service.slug}`}
                className="group relative flex min-h-[280px] min-w-[320px] max-w-[340px] flex-col justify-between gap-6 rounded-[32px] border border-white/10 bg-[#001a1e] p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_-60px_rgba(0,0,0,0.5)] sm:min-w-[360px] sm:max-w-[380px]"
              >
                <div className="space-y-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs font-semibold uppercase tracking-[0.26em] text-white/70 transition-colors group-hover:border-white/40 group-hover:text-white">
                    {service.title.split(" ")[0]}
                  </span>
                  <h3 className="text-2xl font-semibold leading-[1.34] text-white">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{service.description}</p>
                </div>

                <div className="space-y-3 text-[0.68rem] uppercase tracking-[0.3em] text-white/60">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={`${service.slug}-${feature}-${index}`} className="flex items-center gap-3">
                      <span className="h-px flex-1 bg-white/15 transition-all group-hover:bg-white/40" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all group-hover:border-white group-hover:text-white">
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
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
