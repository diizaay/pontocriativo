import React from "react";
import Reveal from "./Reveal";
import pontoEcologico from "../assets/partners/ecologico.png";
import essenciaArtesanal from "../assets/partners/ARTE3.png";
import naHora from "../assets/partners/nahora.png";
import lrStore from "../assets/partners/lr.png";
import inovaAngola from "../assets/partners/inova.png";
import tecnoMais from "../assets/partners/tecno.png";
import casaDosTemperos from "../assets/partners/temperos.png";
import aguasPereira from "../assets/partners/agua.png";

const partners = [
  { name: "Ponto Ecológico", logo: pontoEcologico },
  { name: "Essência Artesanal", logo: essenciaArtesanal },
  { name: "Na Hora", logo: naHora },
  { name: "LR Store", logo: lrStore },
  { name: "Inova Angola", logo: inovaAngola },
  { name: "Tecno +", logo: tecnoMais },
  { name: "Casa dos Temperos", logo: casaDosTemperos },
  { name: "Águas Pereira", logo: aguasPereira },
];

const GlobalPartners = () => {
  return (
    <section
      data-nav-theme="blue"
      className="relative overflow-hidden bg-[#01233c] py-24 text-white md:flex md:min-h-screen md:items-center"
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <Reveal className="space-y-4 text-center md:text-left">
          <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/70 backdrop-blur">
            Parcerias globais
          </span>
          <h2 className="max-w-[720px] text-3xl font-semibold leading-[1.45] tracking-[-0.02em] text-white sm:text-4xl">
            Mais de 30 marcas confiam na CriaTec para lançar e evoluir experiências digitais de alto impacto.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <Reveal
              key={partner.name}
              delay={index * 80}
              className="group relative overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-6 text-center shadow-[0_18px_48px_-24px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:border-white hover:bg-white"
            >
              <div className="pointer-events-none absolute inset-0 translate-y-6 rounded-3xl bg-gradient-to-br from-white/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
              <div className="relative flex h-24 items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-14 w-auto transition duration-300 group-hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;
