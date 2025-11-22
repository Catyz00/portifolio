'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

function AnimatedProfile() {
  const lines = [
    '  nome: "Catarina Dalsan",',
    '  idade: 23,',
    '  local: "São Paulo - SP",',
    '  area: "Front-End",',
  ];

  const [visibleCount, setVisibleCount] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timersRef = useRef<number[]>([]);
  const animatingRef = useRef(false);

  useEffect(() => {
    // respect reduced motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisibleCount(lines.length);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // When entering: clear any pending timers and start the pulse sequence
            timersRef.current.forEach((id) => clearTimeout(id));
            timersRef.current = [];
            animatingRef.current = true;

            // Reveal lines
            setVisibleCount(lines.length);

            // Run highlight pulse sequence for each line
            lines.forEach((_, idx) => {
              const onDelay = idx * 300 + 100;
              const offDelay = onDelay + 300;

              const tOn = window.setTimeout(
                () => setHighlightIndex(idx),
                onDelay,
              );
              timersRef.current.push(tOn);

              const tOff = window.setTimeout(
                () => setHighlightIndex(null),
                offDelay,
              );
              timersRef.current.push(tOff);
            });

            // Mark animation as finished after sequence completes so it can run again later
            const finish = window.setTimeout(() => {
              animatingRef.current = false;
            }, lines.length * 300 + 400);
            timersRef.current.push(finish);
          } else {
            // When leaving: clear timers and hide the lines
            timersRef.current.forEach((id) => clearTimeout(id));
            timersRef.current = [];
            setHighlightIndex(null);
            setVisibleCount(0);
            animatingRef.current = false;
          }
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      timersRef.current.forEach((id) => clearTimeout(id));
      timersRef.current = [];
    };
  }, []);

  return (
    <div ref={containerRef} className="ml-4 mt-2 space-y-2">
      {lines.map((line, idx) => (
        <div
          key={idx}
          className={`flex items-baseline gap-2 transition-colors duration-300 ${
            highlightIndex === idx ? 'bg-white/5 rounded px-2 py-0.5' : ''
          }`}
        >
          <span
            className={`text-sm font-mono text-white/90 block w-full overflow-hidden whitespace-pre`}
            style={{
              opacity: idx < visibleCount ? 1 : 0,
              transform: idx < visibleCount ? 'none' : 'translateY(6px)',
              transition: 'opacity 300ms, transform 300ms',
            }}
          >
            {line}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function AboutSection() {
  // Typing effect for the "<!-- sobre mim -->" heading
  const headingText = '<!-- sobre mim -->';
  const [typed, setTyped] = useState('');
  const headingRef = useRef<HTMLElement | null>(null);
  const typingRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    // If user prefers reduced motion, show full text immediately and don't animate
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTyped(headingText);
      return;
    }

    const el = headingRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Start typing only if not already animating
            if (isAnimatingRef.current) return;
            isAnimatingRef.current = true;
            let i = 0;
            const speed = 40;
            setTyped('');
            typingRef.current = window.setInterval(() => {
              i += 1;
              setTyped(headingText.slice(0, i));
              if (i >= headingText.length) {
                if (typingRef.current) {
                  clearInterval(typingRef.current);
                  typingRef.current = null;
                }
                isAnimatingRef.current = false;
              }
            }, speed);
          } else {
            // When heading leaves view and animation is not running, reset so it can play again on next entry
            if (!isAnimatingRef.current) setTyped('');
          }
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (typingRef.current) {
        clearInterval(typingRef.current);
        typingRef.current = null;
      }
    };
  }, []);

  return (
    <div className="space-y-12 my-50">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <div className="space-y-6">
          <div>
            <h2
              className="text-4xl font-bold text-primary mb-4 text-center"
              aria-live="polite"
              ref={headingRef}
            >
              {typed}
              <span className="ml-1 inline-block animate-pulse" aria-hidden>
                {typed.length < headingText.length ? '|' : ''}
              </span>
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sou desenvolvedora web apaixonada por criar experiências digitais,
              com 1 ano de experiência como estagiária e foco em React, Next.js
              e tecnologias modernas.
              <br />
              <br />
              Minha jornada começou em 2022, estudando web design em cursos
              online, o que despertou meu interesse pelo desenvolvimento
              front-end e me levou a buscar uma formação mais sólida.
              <br />
              <br />
              Em 2023, entrei no curso de Análise e Desenvolvimento de Sistemas
              e, no ano seguinte, conquistei meu primeiro estágio, onde pude
              aplicar meus conhecimentos em projetos reais e colaborar com
              equipes talentosas. Essa vivência fortaleceu minhas habilidades e
              confirmou minha paixão pelo front-end.
              <br />
              <br />
              Além da área tech, sou amante dos animais, gosto de viajar,
              conhecer novas culturas e músicas. No meu tempo livre, costumo
              jogar videogame e praticar atividades ao ar livre, como trilhas e
              passeios de bicicleta.
            </p>
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
                {/* Programmatic animated code block */}
                <div
                  ref={(el) => {
                    // keep ref on the outer container for IntersectionObserver
                    // (the actual observer is managed below)
                    void el;
                  }}
                  className="bg-[#0f1724] border border-[#2b2f3a] rounded-lg p-4 font-mono text-sm text-white w-68 h-68 overflow-auto"
                >
                  <pre className="mt-3 whitespace-pre-wrap text-[#7ee787]">
                    const perfil = [
                  </pre>

                  <AnimatedProfile />

                  <pre className="mt-3 text-[#7ee787]">];</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
