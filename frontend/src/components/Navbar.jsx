import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoLight from "../assets/logobranco.png";
import logoDark from "../assets/logo.png";
import { mockData } from "../data/mock";

const navItems = [
  { label: "Projetos", path: "/projetos" },
  { label: "Serviços", path: "/servicos", megaMenu: true },
  { label: "Sobre", path: "/sobre" },
  { label: "Indústrias", path: "/industrias" },
];

const navThemes = {
  blue: {
    base: "bg-transparent border-b border-transparent text-white",
    solid:
      "bg-[#004da3]/92 border-b border-white/15 text-white shadow-[0_20px_40px_-24px_rgba(0,0,0,0.45)] backdrop-blur-md",
    link: "text-white/70 hover:text-white",
    linkActive: "text-white",
    button: "bg-white text-[#004da3] shadow-[0_20px_48px_-22px_rgba(255,255,255,0.55)]",
    mobileBg: "bg-[#004da3]",
    icon: "bg-white",
  },
  white: {
    base: "bg-transparent border-b border-transparent text-slate-900",
    solid:
      "bg-white/92 border-b border-slate-200 text-slate-900 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.18)] backdrop-blur-md",
    link: "text-slate-500 hover:text-slate-900",
    linkActive: "text-slate-900",
    button: "bg-[#004da3] text-white shadow-[0_18px_36px_-18px_rgba(0,77,163,0.5)]",
    mobileBg: "bg-white",
    icon: "bg-slate-900",
  },
  cyan: {
    base: "bg-transparent border-b border-transparent text-white",
    solid:
      "bg-[#44beee]/90 border-b border-white/20 text-white shadow-[0_20px_48px_-30px_rgba(0,0,0,0.35)] backdrop-blur-md",
    link: "text-white/80 hover:text-white",
    linkActive: "text-white",
    button: "bg-[#004da3] text-white shadow-[0_18px_36px_-18px_rgba(0,77,163,0.4)]",
    mobileBg: "bg-[#44beee]",
    icon: "bg-white",
  },
  navy: {
    base: "bg-transparent border-b border-transparent text-white",
    solid:
      "bg-[#0B56AC]/92 border-b border-white/15 text-white shadow-[0_20px_48px_-30px_rgba(0,0,0,0.35)] backdrop-blur-md",
    link: "text-white/70 hover:text-white",
    linkActive: "text-white",
    button: "bg-white text-[#0B56AC] shadow-[0_20px_48px_-22px_rgba(255,255,255,0.45)]",
    mobileBg: "bg-[#0B56AC]",
    icon: "bg-white",
  },
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [navThemeKey, setNavThemeKey] = useState("blue");
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const navThemeKeyRef = useRef(navThemeKey);

  const theme = useMemo(() => navThemes[navThemeKey] ?? navThemes.blue, [navThemeKey]);
  const servicesMenuItems = useMemo(
    () =>
      mockData.services.map((service) => ({
        label: service.title,
        description: service.description,
        slug: `servico-${slugify(service.title)}`,
      })),
    [],
  );

  const mobileLinkClasses =
    navThemeKey === "white" ? "text-slate-700 hover:text-[#004da3]" : "text-white/90 hover:text-white";
  const mobileServiceItemClasses =
    navThemeKey === "white"
      ? "rounded-2xl border border-[#004da3]/20 bg-white px-4 py-3 text-sm font-medium text-[#004da3] transition-colors hover:bg-[#004da3] hover:text-white"
      : "rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white hover:text-[#004da3]";
  const mobileMenuBorder = navThemeKey === "white" ? "border-slate-200" : "border-white/20";
  const mobileDividerBorder = navThemeKey === "white" ? "border-slate-200/80" : "border-white/15";
  const desktopCtaBase =
    "inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#004da3]/30";
  const mobileCtaBase =
    "inline-flex items-center rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#004da3]/30";
  const mobileMenuCtaBase =
    "group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.32em] transition-[background-color,transform] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#004da3]/30";

  useEffect(() => {
    navThemeKeyRef.current = navThemeKey;
  }, [navThemeKey]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(true), 60);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let rafId = null;

    const updateTheme = () => {
      const sections = Array.from(document.querySelectorAll("[data-nav-theme]"));
      if (!sections.length) return;

      const viewportTarget = window.innerHeight * 0.35;
      let closestTheme = null;
      let smallestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
          return;
        }
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportTarget);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestTheme = section.getAttribute("data-nav-theme") || "blue";
        }
      });

      if (closestTheme && closestTheme !== navThemeKeyRef.current) {
        setNavThemeKey(closestTheme);
      }
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateTheme();
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateTheme();

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const clearHoverTimeout = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openServicesMenu = () => {
    clearHoverTimeout();
    setServicesMenuOpen(true);
  };

  const closeServicesMenu = (delay = 120) => {
    clearHoverTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      setServicesMenuOpen(false);
    }, delay);
  };

  const logoSrc = navThemeKey === "white" ? logoDark : logoLight;

  return (
    <header
      onMouseLeave={() => closeServicesMenu()}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-700 ease-in-out navbar-reveal ${
        visible ? "navbar-reveal-visible" : ""
      } ${scrolled ? theme.solid : theme.base}`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoSrc} alt="Ponto Criativo" className="h-10 w-auto transition-opacity duration-500 sm:h-12" />
        </Link>

        <nav className="relative hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isMegaItem = Boolean(item.megaMenu);
            const isActive = isMegaItem
              ? location.pathname.startsWith(item.path ?? "")
              : location.pathname === item.path;
            const baseClasses = `text-sm font-medium transition-colors ${
              isActive ? theme.linkActive : theme.link
            }`;

            if (isMegaItem) {
              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    className={`${baseClasses} flex items-center gap-1`}
                    onMouseEnter={openServicesMenu}
                    onFocus={openServicesMenu}
                    onClick={() => (servicesMenuOpen ? closeServicesMenu(0) : openServicesMenu())}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        closeServicesMenu(0);
                      }
                    }}
                    aria-haspopup="true"
                    aria-expanded={servicesMenuOpen}
                  >
                    {item.label}
                    <svg
                      aria-hidden="true"
                      className={`h-3 w-3 transition-transform duration-200 ${servicesMenuOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                className={baseClasses}
                onMouseEnter={() => closeServicesMenu(80)}
                onFocus={() => closeServicesMenu(0)}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            to="/contato"
            className={`${desktopCtaBase} ${theme.button}`}
            onMouseEnter={() => closeServicesMenu(80)}
            onFocus={() => closeServicesMenu(0)}
          >
            Fale conosco
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            to="/contato"
            className={`${mobileCtaBase} ${theme.button}`}
          >
            Falar conosco
          </Link>

          <button
            type="button"
            onClick={() => {
              setOpen((prev) => {
                const next = !prev;
                if (!next) {
                  setMobileServicesOpen(false);
                }
                return next;
              });
              closeServicesMenu(0);
            }}
            className="relative flex h-12 w-12 items-center justify-center"
            aria-label="Abrir menu"
          >
            <span
              className={`absolute h-0.5 w-6 rounded transition-transform ${open ? "translate-y-0 rotate-45" : "-translate-y-2"} ${theme.icon}`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded transition-opacity ${open ? "opacity-0" : "opacity-100"} ${theme.icon}`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded transition-transform ${open ? "translate-y-0 -rotate-45" : "translate-y-2"} ${theme.icon}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-x-0 top-full hidden justify-center md:flex transition-all duration-200 ${
          servicesMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-3 opacity-0 invisible"
        }`}
      >
        <div
          className="pointer-events-auto w-[min(92vw,980px)] rounded-3xl border border-slate-200 bg-white px-10 py-8 shadow-[0_48px_120px_-60px_rgba(15,23,42,0.55)]"
          onMouseEnter={openServicesMenu}
          onMouseLeave={() => closeServicesMenu()}
        >
          <div className="grid gap-6 md:grid-cols-3">
            {servicesMenuItems.map((service) => (
              <Link
                key={service.slug}
                to={`/servicos#${service.slug}`}
                onClick={() => closeServicesMenu(0)}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white/80 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#004da3]/30 hover:shadow-[0_32px_80px_-60px_rgba(0,77,163,0.35)]"
              >
                <span className="text-sm font-semibold text-[#002d64]">{service.label}</span>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{service.description}</p>
                <span className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#004da3] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Explorar
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t ${mobileMenuBorder} ${theme.mobileBg}`}
      >
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-y-auto px-4 pb-6 pt-4">
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => {
                if (item.megaMenu) {
                  return (
                    <div key={item.label} className="space-y-3">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className={`flex w-full items-center justify-between text-xs font-semibold uppercase tracking-[0.26em] ${mobileLinkClasses}`}
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-list"
                      >
                        <span>{item.label}</span>
                        <svg
                          aria-hidden="true"
                          className={`h-3 w-3 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                      <div
                        id="mobile-services-list"
                        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                          mobileServicesOpen ? "max-h-[360px] opacity-100 pt-2" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="grid max-h-[300px] gap-2 overflow-y-auto pr-1">
                          {servicesMenuItems.map((service) => (
                            <Link
                              key={service.slug}
                              to={`/servicos#${service.slug}`}
                              className={mobileServiceItemClasses}
                              onClick={() => {
                                setOpen(false);
                                setMobileServicesOpen(false);
                                closeServicesMenu(0);
                              }}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-base font-medium ${mobileLinkClasses}`}
                    onClick={() => {
                      setOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className={`border-t ${mobileDividerBorder} px-4 py-4`}>
            <Link
              to="/contato"
              className={`${mobileMenuCtaBase} ${theme.button}`}
              onClick={() => setOpen(false)}
            >
              Falar conosco
              <svg
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
