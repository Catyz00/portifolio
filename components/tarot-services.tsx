"use client"

import { useState } from "react"
import { Star, Clock, CheckCircle2 } from "lucide-react"

export default function TarotServices() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  const packages = [
    {
      id: "single",
      name: "Consulta Única",
      price: "R$ 50",
      duration: "15 minutos",
      description: "Leitura rápida com 3 cartas",
      features: [
        "Leitura de 3 cartas",
        "Interpretação detalhada",
        "Dúvida específica respondida",
        "Relatório em texto",
      ],
    },
    {
      id: "full",
      name: "Consulta Completa",
      price: "R$ 100",
      duration: "30 minutos",
      description: "Leitura profunda e contextualizada",
      features: [
        "Leitura de 7 cartas",
        "Análise profunda",
        "Múltiplas perspectivas",
        "Recomendações personalizadas",
        "Relatório detalhado",
      ],
      popular: true,
    },
    {
      id: "premium",
      name: "Consultoria Premium",
      price: "R$ 200",
      duration: "60 minutos",
      description: "Sessão completa com acompanhamento",
      features: [
        "Leitura extensa",
        "Análise aprofundada",
        "Múltiplos métodos de leitura",
        "Dúvidas ilimitadas",
        "Plano de ação personalizado",
        "Acompanhamento por 30 dias",
      ],
    },
  ]

  const selectedPkg = packages.find((p) => p.id === selectedPackage)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <h2 className="text-4xl font-bold text-primary">Consultas de Tarô</h2>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Descubra respostas através da sabedoria ancestral do Tarô. Sessões personalizadas para orientação e
          autoconhecimento.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-lg border transition cursor-pointer transform hover:scale-105 relative ${
              pkg.popular ? "border-secondary bg-card shadow-lg" : "border-border bg-card hover:border-primary"
            } ${selectedPackage === pkg.id ? "ring-2 ring-green-500" : ""}`}
            onClick={() => setSelectedPackage(pkg.id)}
          >
            {/* Indicador de Seleção */}
            {selectedPackage === pkg.id && (
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-green-500 rounded-full p-1 shadow-lg">
                  <CheckCircle2 size={28} className="text-white" strokeWidth={2.5} />
                </div>
              </div>
            )}

            {pkg.popular && (
              <div className="bg-secondary text-secondary-foreground px-4 py-2 text-center font-semibold text-sm">
                Mais Popular
              </div>
            )}

            <div className="p-6 space-y-4">
              {/* Header */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                <p className="text-foreground/70">{pkg.description}</p>
              </div>

              {/* Price */}
              <div>
                <div className="text-4xl font-bold text-primary mb-1">{pkg.price}</div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Clock size={16} />
                  {pkg.duration}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground/80">
                    <Star size={16} className="text-secondary mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA removed from individual cards - use the single CTA below */}
            </div>
          </div>
        ))}
      </div>

      {/* CTA único: aparece abaixo dos preços */}
      <div className="text-center mt-6">
        <button
          disabled={!selectedPackage}
          onClick={() => {
            const pkg = packages.find((p) => p.id === selectedPackage)
            if (pkg) {
              // Aqui você pode abrir modal, redirecionar para checkout, abrir formulário, etc.
              // Por enquanto mostra um alerta simples.
              alert(`Agendando: ${pkg.name} — ${pkg.price}`)
            }
          }}
          className={`mx-auto px-6 py-3 rounded-lg font-semibold transition ${
            selectedPackage
              ? 'bg-green-500 text-white hover:opacity-90'
              : 'bg-muted text-muted-foreground cursor-not-allowed opacity-60'
          }`}
        >
          {selectedPackage
            ? `Agendar ${selectedPkg?.name} — ${selectedPkg?.price}`
            : 'Escolha um pacote'}
        </button>
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-8 py-8">
        <div className="bg-card border border-border rounded-lg p-8 space-y-4">
          <h3 className="text-2xl font-bold text-primary">Sobre as Leituras</h3>
          <p className="text-foreground/80 leading-relaxed">
            Minhas leituras de tarô combinam conhecimento clássico com intuição moderna. Cada carta tem múltiplas
            interpretações que variam conforme o contexto de sua vida.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Trabalho com diferentes spreads (disposições) para oferecer a melhor perspectiva sobre sua situação,
            ajudando você a fazer escolhas mais informadas.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 space-y-4">
          <h3 className="text-2xl font-bold text-primary">Como Funciona</h3>
          <ol className="space-y-3 text-foreground/80">
            <li className="flex gap-3">
              <span className="font-bold text-primary">1.</span>
              <span>Escolha seu pacote e agende a consulta</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">2.</span>
              <span>Compartilhe sua dúvida ou tema de interesse</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">3.</span>
              <span>Receba uma leitura intuitiva e personalizada</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">4.</span>
              <span>Obtenha orientação e recomendações práticas</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-primary text-center">Depoimentos</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Maria S.",
              text: "A leitura foi muito precisa e ajudou a esclarecer minhas dúvidas!",
            },
            {
              name: "João P.",
              text: "Excelente atendimento, com interpretações profundas e úteis.",
            },
            {
              name: "Ana C.",
              text: "Recomendo! As insights foram transformadoras para minha vida.",
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div className="flex gap-1 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground/80 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-foreground">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
