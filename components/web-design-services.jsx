'use client';

import { useState } from 'react';
import {
  Check,
  Code,
  Palette,
  Smartphone,
  CheckCircle2,
  Lock,
} from 'lucide-react';

export default function WebDesignServices() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'landing',
      name: 'Landing Page',
      price: 'A partir de R$ 1.500',
      icon: Smartphone,
      image: '/lp-auto.png',
      // abre WhatsApp
      link: 'https://www.affinityprime.com.br/seguro-auto-justos',
      description: 'Página otimizada para conversão',
      details: [
        'Design responsivo moderno',
        'Otimização para SEO básico',
        'Formulário de contato',
        'Analytics integrado',
        'Até 5 revisões',
      ],
    },
    {
      id: 'corporate',
      name: 'Site Corporativo',
      price: 'A partir de R$ 3.000',
      icon: Palette,
      image: '/affinityprime.jpeg',
      // exemplo: página externa / case
      link: 'https://www.affinityprime.com.br',
      description: 'Presença profissional online',
      details: [
        'Design personalizado',
        'Blog integrado',
        'Portfolio de trabalhos',
        'Seção de serviços',
        'Otimização de performance',
      ],
      popular: true,
    },
    {
      id: 'app',
      name: 'Aplicação Web',
      price: 'A partir de R$ 8.000',
      icon: Code,
      image: '/primesecure.jpeg',
      // link externo (card bloqueado) - mantido
      // link: 'https://www.affinityprime.com.br/seguro-auto-justos',
      description: 'Aplicação robusta e escalável',
      details: [
        'Funcionalidades avançadas',
        'Banco de dados',
        'Sistema de usuários',
        'Dashboard administrativo',
      ],
    },
  ];

  const selectedSvc = services.find((s) => s.id === selectedService);

  // Número de WhatsApp usado no formulário de contato
  const WHATSAPP_NUMBER = '5511994505049';

  const getWhatsAppUrl = (svc) => {
    const text = `Olá! Gostaria de solicitar orçamento para ${svc.name} (${svc.price}).`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleRequest = () => {
    if (!selectedSvc) return;
    const url = getWhatsAppUrl(selectedSvc);
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <h2 className="text-4xl font-bold text-primary">Desenvolvimento Web</h2>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Crio sites e aplicações web profissionais que transformam sua presença
          digital e impulsionam seu negócio.
        </p>
      </div>

      {/* Services Grid - mostrar 3 cards por linha a partir de telas md */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => {
          const IconComponent = service.icon;
          const isLocked = service.id === 'app';
          return (
            <div
              key={service.id}
              className={`rounded-lg border transition relative flex flex-col h-full ${
                service.popular
                  ? 'border-secondary bg-card shadow-lg'
                  : 'border-border bg-card'
              } ${
                isLocked
                  ? 'opacity-60 cursor-not-allowed'
                  : 'cursor-pointer hover:border-primary'
              } ${
                selectedService === service.id ? 'ring-2 ring-green-500' : ''
              }`}
              onClick={() => !isLocked && setSelectedService(service.id)}
              aria-disabled={isLocked}
            >
              {isLocked && (
                <div className="absolute top-3 right-3 z-20">
                  <div className="bg-muted/80 text-foreground rounded-full p-1 shadow">
                    <Lock size={18} />
                  </div>
                </div>
              )}
              {selectedService === service.id && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-green-500 rounded-full p-1 shadow-lg">
                    <CheckCircle2
                      size={28}
                      className="text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              )}

              {/* Preview image for all services (show for locked too so heights align) */}
              <div className="w-full overflow-hidden rounded-t-lg relative">
                <div className="h-40 sm:h-44 w-full">
                  <img
                    src={service.image}
                    alt={`${service.name} preview`}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                {service.popular && (
                  <div className="absolute top-2 left-2 z-20 rounded-md bg-green-500 text-secondary-foreground px-3 py-1 text-center font-semibold text-sm">
                    Mais Procurado
                  </div>
                )}
              </div>

              <div className="p-8 space-y-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {service.name}
                    </h3>
                    <p className="text-foreground/70">{service.description}</p>
                  </div>
                  <IconComponent
                    className="text-secondary shrink-0"
                    size={32}
                  />
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-primary">
                  {service.price}
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-foreground/80"
                    >
                      <Check
                        size={20}
                        className="text-secondary mt-0.5 shrink-0"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Per-card Link Button (abre WhatsApp com mensagem pré-preenchida) */}
                <div className="pt-4">
                  {(() => {
                    const href =
                      service.link === 'whatsapp'
                        ? getWhatsAppUrl(service)
                        : service.link;
                    return (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-disabled={isLocked}
                        className={`inline-block px-4 py-2 rounded-md font-semibold transition ${
                          isLocked
                            ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-60'
                            : 'bg-secondary text-secondary-foreground hover:opacity-90'
                        }`}
                        onClick={(e) => {
                          if (isLocked) e.preventDefault();
                        }}
                      >
                        {isLocked ? 'Em breve' : 'Visualizar Demonstração'}
                      </a>
                    );
                  })()}
                </div>

                {/* CTA por cartão removido - use o botão único abaixo */}
              </div>
            </div>
          );
        })}
      </div>

      {/* Botão único que abre WhatsApp */}
      <div className="text-center mt-6">
        <button
          disabled={!selectedService}
          onClick={handleRequest}
          className={`mx-auto px-6 py-3 rounded-lg font-semibold transition ${
            selectedService
              ? 'bg-green-500 text-white hover:opacity-90'
              : 'bg-muted text-muted-foreground cursor-not-allowed opacity-60'
          }`}
        >
          {selectedService
            ? `Solicitar ${selectedSvc?.name} — ${selectedSvc?.price}`
            : 'Escolha um serviço'}
        </button>
      </div>

      {/* Process Section */}
      <div className="grid md:grid-cols-4 gap-6 py-8">
        {[
          { step: '1', title: 'Briefing', desc: 'Entendemos seus objetivos' },
          { step: '2', title: 'Design', desc: 'Criamos o layout ideal' },
          { step: '3', title: 'Desenvolvimento', desc: 'Construímos seu site' },
          {
            step: '4',
            title: 'Entrega',
            desc: 'Lançamos com suporte adicional no primeiro mês',
          },
        ].map((item) => (
          <div key={item.step} className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-3">
              {item.step}
            </div>
            <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
            <p className="text-sm text-foreground/70">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="bg-card border border-border rounded-lg p-8 space-y-6">
        <h3 className="text-2xl font-bold text-primary">
          Por que me escolher?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Experiência',
              desc: 'Os melhores projetos entregues',
            },
            {
              title: 'Tecnologia Moderna',
              desc: 'Utilizo as melhores ferramentas e práticas',
            },
            {
              title: 'Suporte no Primeiro mês',
              desc: 'Estou aqui para ajudar sempre que precisar',
            },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-semibold text-foreground text-lg">
                {item.title}
              </h4>
              <p className="text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center space-y-4">
        <h3 className="text-3xl font-bold">Pronto para começar?</h3>
        <p className="text-lg opacity-90">
          Vamos transformar sua ideia em um site incrível
        </p>
        <a
          href={`https://wa.me/5511994505049?text=${encodeURIComponent(
            'Olá! Gostaria de conversar sobre um projeto.',
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold inline-block"
        >
          Solicitar Proposta
        </a>
      </div>
    </div>
  );
}
