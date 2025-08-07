import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useToast } from "../hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send,
  CheckCircle
} from "lucide-react";
import { mockData } from "../mock";

const Contato = () => {
  const { company } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${company.whatsapp}?text=Olá! Gostaria de solicitar um orçamento.`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${company.phone}`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${company.email}`, '_blank');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em até 24 horas. Obrigado!",
      });

      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Resposta mais rápida",
      value: company.phone,
      action: handleWhatsApp,
      color: "green",
      badge: "Recomendado"
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "Ligue diretamente",
      value: company.phone,
      action: handleCall,
      color: "blue"
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Resposta em até 24h",
      value: company.email,
      action: handleEmail,
      color: "purple"
    }
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "07:00 - 18:00" },
    { day: "Sábado", hours: "08:00 - 16:00" },
    { day: "Domingo", hours: "Fechado" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Entre em Contato
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fale Conosco
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Estamos prontos para atender você! Entre em contato e receba uma proposta personalizada em até 24 horas.
          </p>
        </div>
      </section>

      {/* Formas de Contato */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Escolha a melhor forma de contato
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={method.action}>
                  <CardContent className="p-8 text-center">
                    {method.badge && (
                      <Badge className="mb-4 bg-green-600 text-white">
                        {method.badge}
                      </Badge>
                    )}
                    <div className={`w-16 h-16 bg-${method.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${method.color}-200 transition-colors`}>
                      <IconComponent className={`w-8 h-8 text-${method.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="font-semibold text-gray-900 mb-6">{method.value}</p>
                    <Button 
                      className={`w-full bg-${method.color}-600 hover:bg-${method.color}-700 text-white`}
                      onClick={(e) => {
                        e.stopPropagation();
                        method.action();
                      }}
                    >
                      Entrar em Contato
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ou envie uma mensagem
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário abaixo e retornaremos em até 24 horas
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-2"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Serviço de interesse</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diarista">Diarista</SelectItem>
                        <SelectItem value="mensalista">Mensalista</SelectItem>
                        <SelectItem value="pos-obra">Limpeza Pós-Obra</SelectItem>
                        <SelectItem value="comercial">Limpeza Comercial</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2 min-h-[120px]"
                    placeholder="Descreva suas necessidades, frequência desejada, tamanho do ambiente, etc."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Informações da Empresa */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Endereço e Horários */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informações da Empresa
              </h2>
              
              <Card className="border-0 shadow-lg mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Endereço</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {company.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-4">Horário de Atendimento</h3>
                      <div className="space-y-3">
                        {businessHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-gray-700">{schedule.day}</span>
                            <span className="font-medium text-gray-900">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Nossos Compromissos */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nossos Compromissos
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Resposta em 24h",
                    description: "Garantimos retorno para todos os contatos em até 24 horas úteis."
                  },
                  {
                    icon: CheckCircle,
                    title: "Orçamento Gratuito",
                    description: "Todos os orçamentos são gratuitos e sem compromisso de contratação."
                  },
                  {
                    icon: CheckCircle,
                    title: "Atendimento Personalizado",
                    description: "Cada cliente é único e merece um atendimento sob medida."
                  },
                  {
                    icon: CheckCircle,
                    title: "Transparência Total",
                    description: "Preços claros, sem taxas ocultas ou surpresas desagradáveis."
                  }
                ].map((commitment, index) => {
                  const IconComponent = commitment.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-2">
                              {commitment.title}
                            </h3>
                            <p className="text-gray-600">
                              {commitment.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre em contato agora mesmo e descubra como podemos transformar seus ambientes. 
            Atendimento rápido e orçamento gratuito!
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar no WhatsApp Agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contato;