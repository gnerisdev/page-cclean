import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Calendar, Star, Shield, CheckCircle, ArrowRight, Users, Clock } from "lucide-react";
import { mockData } from "../mock";

const Mensalistas = () => {
  const { mensalistaServices, company } = mockData;

  const handleWhatsApp = (serviceName = "") => {
    const message = serviceName 
      ? `Olá! Gostaria de solicitar uma proposta para o serviço: ${serviceName}.`
      : `Olá! Gostaria de solicitar uma proposta para serviços de mensalista.`;
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const benefits = [
    {
      icon: Users,
      title: "Profissional Fixa",
      description: "A mesma pessoa sempre, criando vínculo e confiança"
    },
    {
      icon: Calendar,
      title: "Cronograma Personalizado",
      description: "Frequência e horários adaptados à sua rotina"
    },
    {
      icon: Star,
      title: "Supervisão Constante",
      description: "Acompanhamento regular da qualidade do serviço"
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Profissionais com seguro e verificação completa"
    }
  ];

  const advantages = [
    "Economia de até 30% comparado a diaristas avulsas",
    "Profissional que conhece suas preferências",
    "Cronograma fixo sem necessidade de remarcar",
    "Supervisão e treinamento contínuo",
    "Substituição garantida em caso de falta",
    "Relatórios mensais de atividades"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Serviços de Mensalista
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mensalistas Dedicadas
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Profissionais fixas para manter sua casa ou escritório sempre limpo. 
            Economia, praticidade e qualidade garantida todos os meses.
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

      {/* Vantagens */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vantagens de ter uma Mensalista
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

      {/* Planos Disponíveis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossos Planos de Mensalista
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano que melhor se adapta à sua necessidade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mensalistaServices.map((service, index) => (
              <Card key={service.id} className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group ${index === 1 ? 'ring-2 ring-blue-600' : ''}`}>
                <CardContent className="p-8">
                  {index === 1 && (
                    <Badge className="mb-4 bg-blue-600 text-white">
                      Mais Popular
                    </Badge>
                  )}
                  
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
                      <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">Frequência: {service.frequency}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-900">Inclui:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleWhatsApp(service.title)}
                    className={`w-full transition-colors ${
                      index === 1 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-900'
                    }`}
                  >
                    Escolher Este Plano
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por que Mensalista */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que escolher uma Mensalista?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Uma mensalista oferece muito mais que limpeza eventual. É uma parceria de longo prazo que traz benefícios únicos.
              </p>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Calendar className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Rotina Organizada</h3>
                  </div>
                  <p className="text-gray-600">
                    Com dia e horário fixos, você pode organizar melhor sua agenda e ter a tranquilidade de uma casa sempre limpa.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Relacionamento de Confiança</h3>
                  </div>
                  <p className="text-gray-600">
                    A mesma profissional sempre cria um vínculo de confiança e conhece suas preferências e necessidades específicas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <Star className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Economia Comprovada</h3>
                  </div>
                  <p className="text-gray-600">
                    Mensalistas custam até 30% menos que diaristas avulsas, oferecendo melhor custo-benefício a longo prazo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Como Contratar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como Contratar
            </h2>
            <p className="text-xl text-gray-600">
              Processo simples e transparente para sua comodidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consulta Inicial",
                description: "Conversamos sobre suas necessidades, frequência desejada e preferências."
              },
              {
                step: "2", 
                title: "Seleção da Profissional",
                description: "Escolhemos a mensalista ideal com base no seu perfil e localização."
              },
              {
                step: "3",
                title: "Período de Adaptação",
                description: "Primeiras semanas com acompanhamento para garantir a satisfação."
              },
              {
                step: "4",
                title: "Parceria Estabelecida",
                description: "Rotina estabelecida com supervisão contínua e suporte sempre disponível."
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
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
                  Posso trocar de mensalista se não me adaptar?
                </h3>
                <p className="text-gray-600">
                  Sim! Temos um período de adaptação e, se necessário, podemos fazer a troca por outra profissional sem custo adicional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  E se minha mensalista ficar doente ou faltar?
                </h3>
                <p className="text-gray-600">
                  Garantimos substituição imediata por outra profissional qualificada para não interromper sua rotina de limpeza.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Existe contrato de fidelidade?
                </h3>
                <p className="text-gray-600">
                  Não exigimos contratos longos. Você pode cancelar com 30 dias de antecedência, mantendo total flexibilidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Como é feito o controle de qualidade?
                </h3>
                <p className="text-gray-600">
                  Realizamos supervisões regulares, recebemos feedback constante e mantemos comunicação direta para garantir excelência.
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
            Transforme sua rotina com uma Mensalista
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Mais tempo livre, casa sempre limpa e economia garantida. 
            Solicite uma proposta personalizada agora mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleWhatsApp()}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Solicitar Proposta via WhatsApp
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

export default Mensalistas;