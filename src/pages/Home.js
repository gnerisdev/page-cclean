import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ChevronLeft, ChevronRight, Shield, Clock, Star, Heart, ArrowRight } from "lucide-react";
import { mockData } from "../mock";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { heroSlides, differentials, diaristaServices, mensalistaServices } = mockData;

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${mockData.company.whatsapp}?text=Olá! Gostaria de solicitar uma proposta de limpeza.`, '_blank');
  };

  const iconMap = {
    Shield,
    Clock,
    Star,
    Heart
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-[100vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <Badge variant="secondary" className="mb-4">
                    {mockData.company.yearsOfExperience}
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                    {slide.message}
                  </p>
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  >
                    {slide.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a CC Clean?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mais de 30 anos oferecendo serviços de limpeza de excelência
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Serviços Destacados */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Principais Serviços
            </h2>
            <p className="text-xl text-gray-600">
              Soluções completas para sua casa e empresa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Diaristas */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Serviços de Diaristas</h3>
              {diaristaServices.slice(0, 2).map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-gray-900">{service.title}</h4>
                      <Badge variant="outline">{service.price}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mensalistas */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Serviços de Mensalistas</h3>
              {mensalistaServices.slice(0, 2).map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-gray-900">{service.title}</h4>
                      <Badge variant="outline">{service.price}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              Solicitar Orçamento Grátis
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para ter um ambiente impecável?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre em contato conosco e receba uma proposta personalizada em até 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Falar no WhatsApp
            </Button>
            <Button
              onClick={() => window.location.href = '/contato'}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Ver Contatos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;