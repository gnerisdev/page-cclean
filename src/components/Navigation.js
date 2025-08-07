import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Phone } from "lucide-react";
import { mockData } from "../mock";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Início" },
    { path: "/quem-somos", label: "Quem somos" },
    { path: "/visao-valores", label: "Visão e valores" },
    { path: "/diaristas", label: "Diaristas" },
    { path: "/mensalistas", label: "Mensalistas" },
    { path: "/avaliacao", label: "Avaliação" },
    { path: "/contato", label: "Contato" }
  ];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${mockData.company.whatsapp}?text=Olá! Gostaria de solicitar uma proposta de limpeza.`, '_blank');
  };

  return (
    <>
      {/* Desktop Sidebar - Always Open */}
      <div className="hidden lg:flex">
        <div className="fixed left-0 top-0 h-full w-[250px] bg-blue-600 text-white z-50 flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-blue-500">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">CC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">CC Clean</h1>
                <span className="text-xs text-blue-100">{mockData.company.yearsOfExperience}</span>
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 py-6">
            <div className="space-y-2 px-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-white text-blue-600 shadow-lg"
                      : "text-blue-100 hover:bg-blue-700 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t border-blue-500">
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
            >
              <Phone className="w-4 h-4 mr-2" />
              Solicitar uma proposta
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Top Navigation */}
      <nav className="lg:hidden bg-white shadow-lg sticky top-0 z-50">
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CC</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">CC Clean</h1>
                <span className="text-xs text-gray-600">{mockData.company.yearsOfExperience}</span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${
                        location.pathname === item.path
                          ? "text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-6 border-t">
                    <Button
                      onClick={() => {
                        handleWhatsApp();
                        setIsOpen(false);
                      }}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Solicitar Proposta
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;