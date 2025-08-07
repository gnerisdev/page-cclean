import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Target, Eye, Heart, Shield, Star, Users } from "lucide-react";
import { mockData } from "../mock";

const Vision = () => {
  const { aboutUs, company } = mockData;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${company.whatsapp}?text=Olá! Gostaria de conhecer mais sobre os valores da CC Clean.`, '_blank');
  };

  const valueIcons = [Shield, Star, Users, Heart, Target, Eye];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Nossos Princípios
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visão e Valores
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Os princípios que guiam nosso trabalho e definem nossa identidade há mais de 30 anos.
          </p>
        </div>
      </section>

      {/* Missão, Visão e Valores Overview */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Missão */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  {aboutUs.mission}
                </p>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  {aboutUs.vision}
                </p>
              </CardContent>
            </Card>

            {/* Valores Preview */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
                <p className="text-gray-600 leading-relaxed">
                  Princípios sólidos que orientam cada decisão e cada ação em nossa empresa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores Detalhados */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada valor representa um compromisso que assumimos com nossos clientes e colaboradores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutUs.values.map((value, index) => {
              const IconComponent = valueIcons[index] || Star;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">{value}</h3>
                    <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full w-12 group-hover:w-full transition-all duration-300"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Aplicamos Nossos Valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como Aplicamos Nossos Valores
            </h2>
            <p className="text-xl text-gray-600">
              Nossos valores não são apenas palavras, são ações concretas no dia a dia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Na Seleção de Profissionais</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Verificação rigorosa de antecedentes criminais
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Treinamento contínuo em técnicas de limpeza
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Avaliação de características pessoais e éticas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">No Atendimento ao Cliente</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Atendimento personalizado e humanizado
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Cumprimento rigoroso de prazos e horários
                  </li>
                  <li className="flex items-start">
                    <Eye className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Transparência em processos e preços
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Na Execução dos Serviços</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Uso de produtos e equipamentos de qualidade
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Protocolos de segurança rigorosos
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Cuidado especial com pertences pessoais
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">No Relacionamento</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Comunicação clara e respeitosa
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Foco na satisfação do cliente
                  </li>
                  <li className="flex items-start">
                    <Eye className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Feedback constante e melhoria contínua
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experimente nossos valores na prática
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Permita que nossa equipe demonstre como esses valores fazem a diferença no seu dia a dia.
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Solicitar Atendimento
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Vision;