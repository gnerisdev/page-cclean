import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Users, Target, Award, Clock } from "lucide-react";
import { mockData } from "../mock";

const About = () => {
  const { aboutUs, company } = mockData;

  const stats = [
    { icon: Clock, value: "30+", label: "Anos de Experiência" },
    { icon: Users, value: "5000+", label: "Clientes Atendidos" },
    { icon: Award, value: "100%", label: "Satisfação Garantida" },
    { icon: Target, value: "24h", label: "Resposta de Orçamento" }
  ];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${company.whatsapp}?text=Olá! Gostaria de conhecer mais sobre a CC Clean.`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            {company.yearsOfExperience}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {aboutUs.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {aboutUs.description}
          </p>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  {aboutUs.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  {aboutUs.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa História
            </h2>
          </div>
          
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">O Início (1994)</h3>
                    <p className="text-gray-600">
                      A CC Clean nasceu do sonho de oferecer serviços de limpeza de qualidade superior. 
                      Começamos com uma pequena equipe e uma grande visão: transformar ambientes e 
                      proporcionar bem-estar aos nossos clientes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Crescimento e Expansão (2000-2010)</h3>
                    <p className="text-gray-600">
                      Ao longo dos anos, expandimos nossos serviços e nossa equipe. Investimos em 
                      treinamento contínuo e tecnologia para sempre oferecer o melhor aos nossos clientes. 
                      Nossa reputação de confiabilidade se consolidou no mercado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Excelência Consolidada (2010-Hoje)</h3>
                    <p className="text-gray-600">
                      Hoje somos referência em São Paulo, com milhares de clientes satisfeitos. 
                      Continuamos investindo em inovação, sustentabilidade e desenvolvimento 
                      de nossa equipe para manter nossa posição de liderança no mercado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Faça parte da nossa história
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se aos milhares de clientes que confiam na CC Clean 
            para manter seus ambientes impecáveis.
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Fale Conosco
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;