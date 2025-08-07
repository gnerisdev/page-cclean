import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Clock, Star, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { mockData } from "../mock";

const Diaristas = () => {
  const { diaristaServices, company } = mockData;

  const handleWhatsApp = (serviceName = "") => {
    const message = serviceName 
      ? `Olá! Gostaria de solicitar uma proposta para o serviço: ${serviceName}.`
      : `Olá! Gostaria de solicitar uma proposta para serviços de diarista.`;
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const benefits = [
    {
      icon: Shield,
      title: "Profissionais Verificadas",
      description: "Todas passam por checagem de antecedentes"
    },
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "Adaptamos aos seus horários disponíveis"
    },
    {
      icon: Star,
      title: "Satisfação Garantida",
      description: "Se não ficar satisfeito, voltamos sem custo"
    },
    {
      icon: CheckCircle,
      title: "Produtos Inclusos",
      description: "Levamos todos os produtos de limpeza"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Serviços de Diarista
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Diaristas Profissionais
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Profissionais qualificadas para deixar sua casa ou escritório impecável. 
            Flexibilidade de horários e qualidade garantida.
          </p>
          <Button
            onClick={() => handleWhatsApp()}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que escolher nossas diaristas?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-blue-100 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Serviços Disponíveis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossos Serviços de Diarista
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o serviço que melhor atende às suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {diaristaServices.map((service) => (
              <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {service.price}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <Clock className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">Duração: {service.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-900">Inclui:</h4>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleWhatsApp(service.title)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-blue-700 transition-colors"
                  >
                    Solicitar Este Serviço
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Processo simples e transparente para contratar nossa diarista
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Faça seu Pedido</h3>
                <p className="text-gray-600">
                  Entre em contato via WhatsApp ou telefone. Conte-nos suas necessidades e preferências de horário.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Receba o Orçamento</h3>
                <p className="text-gray-600">
                  Em até 24 horas você receberá um orçamento detalhado com valor, data e horário do serviço.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Aproveite o Resultado</h3>
                <p className="text-gray-600">
                  Nossa profissional chegará no horário combinado e deixará seu ambiente impecável.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Preciso fornecer produtos de limpeza?
                </h3>
                <p className="text-gray-600">
                  Não! Nossas diaristas levam todos os produtos e equipamentos necessários para realizar o serviço com qualidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Posso escolher o horário de atendimento?
                </h3>
                <p className="text-gray-600">
                  Sim! Oferecemos flexibilidade de horários de segunda a sábado, das 7h às 18h. Agendamos conforme sua disponibilidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  E se eu não ficar satisfeito com o serviço?
                </h3>
                <p className="text-gray-600">
                  Temos garantia de satisfação! Se não ficar 100% satisfeito, voltamos para refazer o serviço sem custo adicional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  As profissionais são verificadas?
                </h3>
                <p className="text-gray-600">
                  Absolutamente! Todas passam por verificação de antecedentes, treinamento específico e avaliação contínua de desempenho.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para ter uma casa impecável?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Solicite agora mesmo um orçamento gratuito e sem compromisso. 
            Atendimento em até 24 horas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleWhatsApp()}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              WhatsApp: {company.phone}
            </Button>
            <Button
              onClick={() => window.location.href = '/contato'}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Ver Outros Contatos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diaristas;