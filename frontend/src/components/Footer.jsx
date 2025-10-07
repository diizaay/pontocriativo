import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { mockData } from '../data/mock';

const Footer = () => {
  const { contact, company } = mockData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#004D8C] to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_63478c61-1a96-49a6-bfd8-9b0bbcce4533/artifacts/ghzrkv5h_Prancheta%201.png"
              alt="Ponto Criativo"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">{company.tagline}</p>
            <p className="text-gray-400 text-sm">
              {company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#3BB1E0] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-[#3BB1E0] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-[#3BB1E0] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-gray-300 hover:text-[#3BB1E0] transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/industrias" className="text-gray-300 hover:text-[#3BB1E0] transition-colors">
                  Indústrias
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>UI/UX Design</li>
              <li>Desenvolvimento Web</li>
              <li>Aplicativos Mobile</li>
              <li>Branding Digital</li>
              <li>Consultoria Tech</li>
              <li>Suporte & Manutenção</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#3BB1E0]" />
                <a href={`mailto:${contact.email}`} className="hover:text-[#3BB1E0] transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#3BB1E0]" />
                <a href={`tel:${contact.phone}`} className="hover:text-[#3BB1E0] transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#3BB1E0]" />
                <span>{contact.address}</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href={contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#3BB1E0] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#3BB1E0] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#3BB1E0] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ponto Criativo. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/privacidade" className="hover:text-[#3BB1E0] transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="hover:text-[#3BB1E0] transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;