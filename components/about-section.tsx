"use client"

import { Github, Linkedin, Instagram } from "lucide-react"

export default function AboutSection() {
  return (
    <div className="space-y-12 my-50">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">&lt;!-- sobre mim --&gt;</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sou desenvolvedora web apaixonada por criar experiências digitais incríveis. Com 1 ano de experiência em desenvolvimento web como estagiária, especializo-me em React, Next.js e tecnologias modernas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">Expertise</h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Desenvolvimento Frontend (React, Next.js, Tailwind CSS)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Design Responsivo e UX/UI
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Integração com APIs e Serviços
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Conecte-se</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Catyz00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="text-foreground hover:text-primary transition-colors transform hover:scale-110 p-2 rounded-full hover:bg-primary/10"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/catarina-dalsan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="text-foreground hover:text-primary transition-colors transform hover:scale-110 p-2 rounded-full hover:bg-primary/10"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a
                href="https://instagram.com/cat.dalsan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="text-foreground hover:text-primary transition-colors transform hover:scale-110 p-2 rounded-full hover:bg-primary/10"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Images Grid + visual "array" representation */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 items-start">
            <div className="rounded-full overflow-hidden bg-muted aspect-square w-52 h-52 mx-auto">
              <img src="/perfil.jpeg" alt="Profissional" className="w-full h-full object-cover" />
            </div>

            {/* Visual code-like array (static) - titles are H1 and infos are p */}
            <div className="col-span-2 md:col-span-1">
              <div className="max-w-md mx-auto">

                <div className="bg-[#0f1724] border border-[#2b2f3a] rounded-lg p-4 font-mono text-sm text-[#9ca3af]">
                  <pre className="mt-3 whitespace-pre-wrap">const perfil = [</pre>

                  <div className="ml-4 mt-2 space-y-2">
                    <div className="flex items-baseline gap-3">
                      <h1 className="text-base text-primary font-bold">nome</h1>
                      <p className="text-foreground/90">: "Catarina Dalsan",</p>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <h1 className="text-base text-primary font-bold">idade</h1>
                      <p className="text-foreground/90">: 23,</p>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <h1 className="text-base text-primary font-bold">local</h1>
                      <p className="text-foreground/90">: "São Paulo - SP",</p>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <h1 className="text-base text-primary font-bold">area</h1>
                      <p className="text-foreground/90">: "Front-End",</p>
                    </div>
                  </div>

                  <pre className="mt-3">];</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
