'use client';
import { useEffect, useRef, useState } from 'react';
import ProjectCarousel from '@/components/project-carousel';
import AboutSection from '@/components/about-section';
import ContactForm from '@/components/contact-form';
import ToolsGrid from '@/components/tools';

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  // Always type the plain name in the correct order
  // Include angle brackets and closing slash so they are typed too
  const fullTitle = '<CatarinaRibeiro/>';
  const [typedText, setTypedText] = useState('');
  const typingRef = useRef<number | null>(null);

  // Typing effect for the "<!-- projetos em destaque -->" heading
  const projectsFull = '<!-- projetos em destaque -->';
  const [projectsTyped, setProjectsTyped] = useState('');
  const projectsTypingRef = useRef<number | null>(null);
  const projectsHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const projectsAnimatingRef = useRef(false);

  // Typing effect for the "<!-- ferramentas e linguagens -->" heading
  const toolsFull = '<!-- ferramentas e linguagens -->';
  const [toolsTyped, setToolsTyped] = useState('');
  const toolsTypingRef = useRef<number | null>(null);
  const toolsHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const toolsAnimatingRef = useRef(false);

  // Typing effect for the "<!-- entre em contato -->" heading
  const contactFull = '<!-- entre em contato -->';
  const [contactTyped, setContactTyped] = useState('');
  const contactTypingRef = useRef<number | null>(null);
  const contactHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const contactAnimatingRef = useRef(false);

  useEffect(() => {
    if (!heroRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            // start typing once when visible
            if (!typingRef.current) {
              let i = 0;
              setTypedText('');
              // Use slice to deterministically set the typed text each tick
              typingRef.current = window.setInterval(() => {
                i += 1;
                setTypedText(fullTitle.slice(0, i));
                if (i >= fullTitle.length && typingRef.current) {
                  clearInterval(typingRef.current);
                  typingRef.current = null;
                }
              }, 70);
            }
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(heroRef.current);

    return () => {
      obs.disconnect();
      if (typingRef.current) {
        clearInterval(typingRef.current);
        typingRef.current = null;
      }
    };
  }, []);

  // Typing effect for projects heading — start when the heading enters the viewport
  useEffect(() => {
    // If user prefers reduced motion, show full text immediately and don't animate
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setProjectsTyped(projectsFull);
      return;
    }

    const el = projectsHeadingRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (projectsAnimatingRef.current) return;
            projectsAnimatingRef.current = true;
            let k = 0;
            const speed = 35;
            setProjectsTyped('');
            projectsTypingRef.current = window.setInterval(() => {
              k += 1;
              setProjectsTyped(projectsFull.slice(0, k));
              if (k >= projectsFull.length) {
                if (projectsTypingRef.current) {
                  clearInterval(projectsTypingRef.current);
                  projectsTypingRef.current = null;
                }
                projectsAnimatingRef.current = false;
              }
            }, speed);
          } else {
            if (!projectsAnimatingRef.current) setProjectsTyped('');
          }
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (projectsTypingRef.current) {
        clearInterval(projectsTypingRef.current);
        projectsTypingRef.current = null;
      }
    };
  }, [projectsFull]);

  // Typing effect for tools heading — start when the heading enters the viewport
  useEffect(() => {
    // If user prefers reduced motion, show full text immediately and don't animate
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setToolsTyped(toolsFull);
      return;
    }

    const el = toolsHeadingRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (toolsAnimatingRef.current) return;
            toolsAnimatingRef.current = true;
            let j = 0;
            const speed = 35;
            setToolsTyped('');
            toolsTypingRef.current = window.setInterval(() => {
              j += 1;
              setToolsTyped(toolsFull.slice(0, j));
              if (j >= toolsFull.length) {
                if (toolsTypingRef.current) {
                  clearInterval(toolsTypingRef.current);
                  toolsTypingRef.current = null;
                }
                toolsAnimatingRef.current = false;
              }
            }, speed);
          } else {
            if (!toolsAnimatingRef.current) setToolsTyped('');
          }
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (toolsTypingRef.current) {
        clearInterval(toolsTypingRef.current);
        toolsTypingRef.current = null;
      }
    };
  }, [toolsFull]);

  // Typing effect for contact heading — start when the heading enters the viewport
  useEffect(() => {
    // If user prefers reduced motion, show full text immediately and don't animate
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setContactTyped(contactFull);
      return;
    }

    const el = contactHeadingRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (contactAnimatingRef.current) return;
            contactAnimatingRef.current = true;
            let m = 0;
            const speed = 35;
            setContactTyped('');
            contactTypingRef.current = window.setInterval(() => {
              m += 1;
              setContactTyped(contactFull.slice(0, m));
              if (m >= contactFull.length) {
                if (contactTypingRef.current) {
                  clearInterval(contactTypingRef.current);
                  contactTypingRef.current = null;
                }
                contactAnimatingRef.current = false;
              }
            }, speed);
          } else {
            if (!contactAnimatingRef.current) setContactTyped('');
          }
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (contactTypingRef.current) {
        clearInterval(contactTypingRef.current);
        contactTypingRef.current = null;
      }
    };
  }, [contactFull]);

  return (
    <div className="space-y-16">
      {/* Hero: ocupa a viewport inicial e centraliza o conteúdo */}
      <section className="min-h-screen sm:min-h-[calc(100vh-64px)] flex items-center justify-center bg-background relative">
        <div
          ref={heroRef}
          className={`text-center px-4 sm:px-6 transition-all duration-700 ease-out ${
            heroVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary mb-4 sm:mb-6"
            style={{ transitionDelay: heroVisible ? '80ms' : '0ms' }}
          >
            {typedText}
            <span className="inline-block w-0.5 h-6 sm:h-8 align-middle bg-primary ml-2 animate-pulse" />
          </h1>
          <p
            className="text-base sm:text-lg md:text-2xl text-foreground/80 max-w-xl sm:max-w-2xl mx-auto"
            style={{ transitionDelay: heroVisible ? '160ms' : '0ms' }}
          >
            Conheça meus projetos, serviços e desenvolvimento web e design.
          </p>

          {/* Download CV abaixo do subtítulo */}
          <div className="mt-4 sm:mt-6 flex justify-center">
            <a
              href="/CV_Dev_CatarinaRibeiro_2025.pdf"
              download
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-secondary text-secondary-foreground hover:opacity-90 transition font-semibold inline-block w-full sm:w-auto text-center"
              style={{ transitionDelay: heroVisible ? '240ms' : '0ms' }}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Indicador visual pulsante (não interativo) posicionado mais abaixo - closer on small screens */}
        <div
          aria-hidden="true"
          className="absolute bottom-12 sm:bottom-24 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary text-secondary-foreground shadow-lg opacity-100 animate-bounce pointer-events-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSection />
      </section>

      {/* Projects Carousel */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-52"
      >
        <h2
          className="text-4xl font-bold text-primary mb-8 text-center"
          aria-live="polite"
          ref={projectsHeadingRef}
        >
          {projectsTyped}
          <span className="ml-1 inline-block animate-pulse" aria-hidden>
            {projectsTyped.length < projectsFull.length ? '|' : ''}
          </span>
        </h2>
        <ProjectCarousel />
      </section>

      {/* Tools Grid */}
      <section
        id="tools"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-52"
      >
        <h2
          className="text-4xl font-bold text-primary mb-8 text-center"
          aria-live="polite"
          ref={toolsHeadingRef}
        >
          {toolsTyped}
          <span className="ml-1 inline-block animate-pulse" aria-hidden>
            {toolsTyped.length < toolsFull.length ? '|' : ''}
          </span>
        </h2>
        <ToolsGrid />
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-bold text-primary mb-8 text-center"
          aria-live="polite"
          ref={contactHeadingRef}
        >
          {contactTyped}
          <span className="ml-1 inline-block animate-pulse" aria-hidden>
            {contactTyped.length < contactFull.length ? '|' : ''}
          </span>
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}
