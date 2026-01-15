import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../data/mock";

const Footer = () => {
  const { company, contact } = mockData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: contact.social.linkedin,
      icon: (
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM5 8.75h4v11.5H5v-11.5zm6 0h3.82v1.62h.05c.53-.96 1.83-1.98 3.78-1.98 4.04 0 4.79 2.55 4.79 5.86v6h-4v-5.33c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8v5.43h-4v-11.5z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: contact.social.instagram,
      icon: (
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
          <rect width="16" height="16" x="4" y="4" rx="4" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <path d="M17.5 6.5h.01" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: contact.social.facebook,
      icon: (
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.5 9H16l-.39 2.84h-2.11V21h-3.14v-9.16H8.5V9h1.86V7.46C10.36 5.08 11.39 3 14.31 3c.99 0 1.84.07 2.09.1v2.7h-1.44c-1.13 0-1.36.53-1.36 1.3V9z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer-animated bg-[#016477] py-16 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-[0.3em] text-white/80">Escreva para nós</h4>
            <div className="space-y-2 text-sm">
              <p className="text-white/70 uppercase tracking-[0.26em]">Negócios</p>
              <a href={`mailto:${contact.email}`} className="block text-xl font-semibold text-white">
                {contact.email}
              </a>
              <p className="mt-4 text-white/70 uppercase tracking-[0.26em]">Telefone</p>
              <a href={`tel:${contact.phone}`} className="block text-xl font-semibold text-white">
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-[0.3em] text-white/80">Junte-se a nós</h4>
            <div className="space-y-4 text-sm leading-relaxed text-white/80">
              <div>
                <p className="text-base font-semibold text-white">Luanda</p>
                <p>Vila Alice, Luanda</p>
              </div>


            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-[0.3em] text-white/80">Redes sociais</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link group flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10"
                  aria-label={link.name}
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/20 pt-6 text-xs uppercase tracking-[0.3em] text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {currentYear} {company.name}. Todos os direitos reservados.
          </span>
          <div className="flex gap-4">
            <Link to="/privacidade" className="transition-colors hover:text-white">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="transition-colors hover:text-white">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

