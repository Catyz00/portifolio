"use client"
import ProjectCarousel from "@/components/project-carousel"
import AboutSection from "@/components/about-section"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero: ocupa a viewport inicial e centraliza o conteúdo */}
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-6">
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6">{`<CatarinaRibeiro/>`}</h1>
          <p className="text-2xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            Desenvolvedora Front End
          </p>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
