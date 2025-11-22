'use client';

import { Github, Linkedin, Instagram } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="space-y-12 my-50">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">
              &lt;!-- sobre mim --&gt;
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sou desenvolvedora web apaixonada por criar experiências digitais
              incríveis. Com 1 ano de experiência em desenvolvimento web como
              estagiária, especializo-me em React, Next.js e tecnologias
              modernas.
              <br />
              <br />
              Minha trajetória começou em 2022, quando decidi mergulhar nos
              estudos de web design com cursos online. Desde então, comecei a me
              interessar cada vez mais pela área de desenvolvimento front-end, o
              que me levou a buscar uma formação mais sólida.
              <br />
              <br />
              Em 2023, ingressei no curso de Análise e Desenvolvimento de
              Sistemas, onde aprofundei meus conhecimentos e habilidades
              técnicas. No ano seguinte eu consegui meu primeiro estágio como
              desenvolvedora web, onde tive a oportunidade de aplicar meus
              conhecimentos em projetos reais e colaborar com equipes
              talentosas. Essa experiência me permitiu crescer profissionalmente
              e consolidar minha paixão pelo desenvolvimento front-end.
              <br />
              <br />
              Fora do trabalho, sou amante dos animais, adoro viajar e explorar
              novas culturas e músicas. Nas horas vagas, eu adoro jogar video
              game e praticar atividades ao ar livre, como trilhas e passeios de
              bicicleta.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Expertise
            </h3>
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
            <h3 className="text-lg font-semibold text-primary mb-3">
              Conecte-se
            </h3>
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
          <div className="flex flex-col items-center gap-4">
            <div className="overflow-hidden bg-muted aspect-square w-56 h-56 mx-auto rounded-full">
              <img
                src="/perfil.jpeg"
                alt="Profissional"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Visual code-like array (static) - titles are H1 and infos are p */}
            <div className="flex justify-center">
              <div>
                <div className="bg-[#0f1724] border border-[#2b2f3a] rounded-lg p-4 font-mono text-sm text-white w-68 h-68 overflow-auto">
                  <pre className="mt-3 whitespace-pre-wrap">
                    const perfil = [
                  </pre>

                  <div className="ml-4 mt-2 space-y-2">
                    <div className="flex items-baseline gap-3">
                      <h1 className="text-base font-bold text-white">nome</h1>
                      <p className="text-white">: "Catarina Dalsan",</p>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <h1 className="text-base font-bold text-white">idade</h1>
                      <p className="text-white">: 23,</p>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <h1 className="text-base font-bold text-white">local</h1>
                      <p className="text-white">: "São Paulo - SP",</p>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <h1 className="text-base font-bold text-white">area</h1>
                      <p className="text-white">: "Front-End",</p>
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
  );
}
