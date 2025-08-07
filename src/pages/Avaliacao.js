import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Star, Quote, MapPin, Calendar, Filter } from "lucide-react";
import { mockData } from "../mock";

const Avaliacao = () => {
  const { testimonials, company } = mockData;
  const [filter, setFilter] = useState("all");

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${company.whatsapp}?text=Olá! Vi as avaliações de vocês e gostaria de solicitar um orçamento.`, '_blank');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  const stats = [
    { value: "4.9", label: "Avaliação Média", icon: "⭐" },
    { value: "1.250+", label: "Avaliações", icon: "📝" },
    { value: "98%", label: "Recomendariam", icon: "👍" },
    { value: "5000+", label: "Clientes Atendidos", icon: "🏠" }
  ];

  const filteredTestimonials = filter === "all" 
    ? testimonials 
    : testimonials.filter(t => filter === "recent" ? t.date.includes("2025") : t.rating === 5);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Avaliações dos Clientes
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que nossos clientes dizem
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Mais de 30 anos construindo relacionamentos baseados na confiança e qualidade. 
            Veja o que pensam quem já experimentou nossos serviços.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-6">
            {renderStars(5)}
            <span className="text-2xl font-bold text-gray-900 ml-2">4.9/5</span>
            <span className="text-gray-600">• 1.250+ avaliações</span>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Avaliações Verificadas
            </h2>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="all">Todas as avaliações</option>
                <option value="recent">Mais recentes</option>
                <option value="top">5 estrelas</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <Quote className="w-6 h-6 text-blue-600 opacity-50" />
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {testimonial.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">Nenhuma avaliação encontrada para este filtro.</p>
            </div>
          )}
        </div>
      </section>

      {/* Reconhecimentos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Reconhecimentos e Certificações
            </h2>
            <p className="text-xl text-gray-600">
              Nossa qualidade é reconhecida por clientes e instituições
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Prêmio Excelência 2024
                </h3>
                <p className="text-gray-600">
                  Reconhecida como uma das melhores empresas de limpeza de São Paulo
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Certificação ISO
                </h3>
                <p className="text-gray-600">
                  Processos certificados em qualidade e gestão de serviços
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Top 5 no Google
                </h3>
                <p className="text-gray-600">
                  Entre as 5 empresas de limpeza mais bem avaliadas na região
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimento em Destaque */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6 opacity-50" />
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8 italic">
                "Já usei outros serviços de limpeza, mas a CC Clean é incomparável. 
                Há 3 anos que trabalho com eles e nunca me decepcionaram. 
                Profissionalismo, pontualidade e carinho com nossa casa. 
                Recomendo de olhos fechados!"
              </blockquote>
              <div className="flex items-center justify-center space-x-2 mb-4">
                {renderStars(5)}
              </div>
              <cite className="text-lg font-semibold text-gray-900">
                Mariana Oliveira
              </cite>
              <p className="text-gray-600 mt-1">Cliente há 3 anos - Moema, SP</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Como Avaliamos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como Mantemos a Qualidade
            </h2>
            <p className="text-xl text-gray-600">
              Processos contínuos para garantir sua satisfação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Feedback Constante",
                description: "Coletamos sua opinião após cada serviço",
                icon: "💬"
              },
              {
                title: "Supervisão Regular",
                description: "Acompanhamento presencial periódico",
                icon: "👁️"
              },
              {
                title: "Treinamento Contínuo",
                description: "Nossa equipe está sempre se aprimorando",
                icon: "📚"
              },
              {
                title: "Melhoria Contínua",
                description: "Implementamos sugestões dos clientes",
                icon: "⚡"
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Faça parte dos nossos clientes satisfeitos
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a milhares de pessoas que já descobriram a diferença da CC Clean. 
            Solicite seu orçamento e comprove nossa qualidade!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Solicitar Orçamento
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

export default Avaliacao;