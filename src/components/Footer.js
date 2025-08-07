import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { mockData } from "../mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${mockData.company.whatsapp}?text=Olá! Gostaria de mais informações sobre os serviços.`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Empresa */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">CC Clean</h3>
                <p className="text-sm text-gray-400">{mockData.company.yearsOfExperience}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas em limpeza residencial e comercial, oferecendo serviços de qualidade há mais de 30 anos.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li><Link to="/diaristas" className="text-gray-300 hover:text-white transition-colors text-sm">Diaristas</Link></li>
              <li><Link to="/mensalistas" className="text-gray-300 hover:text-white transition-colors text-sm">Mensalistas</Link></li>
              <li><span className="text-gray-300 text-sm">Limpeza Residencial</span></li>
              <li><span className="text-gray-300 text-sm">Limpeza Comercial</span></li>
              <li><span className="text-gray-300 text-sm">Limpeza Pós-Obra</span></li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/quem-somos" className="text-gray-300 hover:text-white transition-colors text-sm">Quem Somos</Link></li>
              <li><Link to="/visao-valores" className="text-gray-300 hover:text-white transition-colors text-sm">Visão e Valores</Link></li>
              <li><Link to="/avaliacao" className="text-gray-300 hover:text-white transition-colors text-sm">Avaliações</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-white transition-colors text-sm">Contato</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{mockData.company.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href={`tel:${mockData.company.phone}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {mockData.company.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${mockData.company.email}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {mockData.company.email}
                </a>
              </div>
              <button
                onClick={handleWhatsApp}
                className="flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} CC Clean. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;