"use client"
import ProjectCarousel from "@/components/project-carousel"
import AboutSection from "@/components/about-section"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero: ocupa a viewport inicial e centraliza o conteúdo */}
      <section className="min-h-screen flex items-center justify-center bg-background relative">
          <div className="text-center px-6">
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6">{`<CatarinaRibeiro/>`}</h1>
            <p className="text-2xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
              Conheça meus projetos, serviços e desenvolvimento web e design.
            </p>

            {/* Download CV abaixo do subtítulo */}
            <div className="mt-6 flex justify-center">
              <a
                href="/Catarina_Ribeiro_CV.pdf"
                download
                className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:opacity-90 transition font-semibold"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Indicador visual pulsante (não interativo) posicionado mais abaixo */}
          <div
            aria-hidden="true"
            className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground shadow-lg opacity-100 animate-bounce pointer-events-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
      </section>

      {/* Projects Carousel */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary mb-8">Projetos em Destaque</h2>
        <ProjectCarousel />
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSection />
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Entre em Contato</h2>
        <ContactForm />
      </section>
    </div>
  )
}
