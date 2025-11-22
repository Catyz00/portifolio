'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'WebSite seguradora Prime Secure',
    description:
      'WebSite corretora de seguros/consórcios de automóveis, residenciais e empresariais.',
    image: '/primesecure.jpeg',
    link: 'https://primesecure.com.br',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'WebSite AffinityPrime',
    description:
      'WebSite corretora de seguros/consórcios de automóveis, residenciais e vida.',
    image: '/affinityprime.jpeg',
    link: 'https://affinityprime.com.br',
    technologies: ['Next.js', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Dashboard Vendas Analytics AffinityPrime',
    description:
      'Dashboard com gráficos em tempo real para análise de dados e métricas das vendas dos corretores.',
    image: '/dashaffinity.jpeg',
    link: 'https://portal.affinityprime.com.br',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
];

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[current];

  return (
    <div className="space-y-6">
      <div
        className="flex items-center justify-center relative"
        onTouchStart={(e) => {
          touchStartX.current = e.touches?.[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = e.changedTouches?.[0]?.clientX - touchStartX.current;
          // swipe threshold
          if (delta > 50) prev();
          else if (delta < -50) next();
          touchStartX.current = null;
        }}
      >
        {/* Left button placed outside the card (hidden on small screens) */}
        <button
          onClick={prev}
          className="absolute left-2 md:relative inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition z-20 mr-4"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-lg max-w-4xl w-full">
          {/* Image */}
          <div className="relative h-64 sm:h-80 md:h-[500px] overflow-hidden bg-muted">
            <img
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-foreground/80 text-sm sm:text-base md:text-lg">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action button moved below content */}
            <div className="mt-4 flex justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition w-full sm:w-auto justify-center"
              >
                <span>Visualizar</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right button placed outside the card (hidden on small screens) */}
        <button
          onClick={next}
          className="absolute right-2 md:relative inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition z-20 ml-4"
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Navigation (dots only) */}
      <div className="flex items-center justify-center">
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition ${
                index === current
                  ? 'bg-primary w-6 sm:w-8 h-3'
                  : 'bg-muted w-3 h-3'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="text-center text-sm text-muted-foreground">
        {current + 1} / {projects.length}
      </div>
    </div>
  );
}
