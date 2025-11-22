import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Palette,
  Layout,
  Layers,
  Bell,
  GitBranch,
  GithubIcon,
  StepBackIcon,
} from 'lucide-react';

type SkillLevel = 'basico' | 'medio' | 'avancado';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: SkillLevel;
  percentage: number;
  color: string;
}

const levelConfig: Record<SkillLevel, { label: string; percentage: number }> = {
  basico: { label: 'Básico', percentage: 40 },
  medio: { label: 'Médio', percentage: 70 },
  avancado: { label: 'Avançado', percentage: 95 },
};

const SkillsComponent: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills: Skill[] = [
    {
      name: 'TypeScript',
      icon: <Code2 className="w-6 h-6" />,
      level: 'avancado',
      percentage: levelConfig.basico.percentage,
      color: 'bg-blue-500',
    },
    {
      name: 'JavaScript',
      icon: <FileCode className="w-6 h-6" />,
      level: 'avancado',
      percentage: levelConfig.avancado.percentage,
      color: 'bg-yellow-500',
    },
    {
      name: 'React',
      icon: <Layers className="w-6 h-6" />,
      level: 'avancado',
      percentage: levelConfig.avancado.percentage,
      color: 'bg-cyan-500',
    },
    {
      name: 'Next.js',
      icon: <Layout className="w-6 h-6" />,
      level: 'medio',
      percentage: levelConfig.medio.percentage,
      color: 'bg-black',
    },
    {
      name: 'CSS',
      icon: <Palette className="w-6 h-6" />,
      level: 'avancado',
      percentage: levelConfig.avancado.percentage,
      color: 'bg-purple-500',
    },
    {
      name: 'UI/UX',
      icon: <Layout className="w-6 h-6" />,
      level: 'medio',
      percentage: levelConfig.medio.percentage,
      color: 'bg-pink-500',
    },
    {
      name: 'Git',
      icon: <GitBranch className="w-6 h-6" />,
      level: 'avancado',
      percentage: levelConfig.avancado.percentage,
      color: 'bg-green-600',
    },
    {
      name: 'GitHub',
      icon: <GithubIcon className="w-6 h-6" />,
      level: 'avancado',
      percentage: levelConfig.avancado.percentage,
      color: 'bg-gray-800',
    },
    {
      name: 'HTML',
      //   icon: <Html className="w-6 h-6" />,
      level: 'avancado',
      percentage: levelConfig.avancado.percentage,
      color: 'bg-orange-500',
    },
    {
      name: 'Tailwind CSS',
      icon: <Palette className="w-6 h-6" />,
      level: 'avancado',
      percentage: levelConfig.avancado.percentage,
      color: 'bg-teal-500',
    },
    {
      name: 'Redux',
      icon: <StepBackIcon className="w-6 h-6" />,
      level: 'medio',
      percentage: levelConfig.medio.percentage,
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="bg-background p-8">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-2xl">
            <Bell className="w-5 h-5 text-accent" />
            <span>Passe o mouse sobre cada skill para ver o progresso</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <button
              key={skill.name}
              type="button"
              className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-xl text-left"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`${skill.color} p-2 rounded-lg text-primary-foreground`}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {levelConfig[skill.level].label}
                    </span>
                  </div>
                </div>

                <div className="text-2xl font-bold text-foreground">
                  {hoveredIndex === index ? `${skill.percentage}%` : '—'}
                </div>
              </div>

              <div className="relative h-3 bg-muted/50 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width:
                      hoveredIndex === index ? `${skill.percentage}%` : '0%',
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary-foreground/20 to-transparent animate-pulse" />
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card/60 rounded-lg border border-border">
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-muted-foreground">Básico (≈40%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">Médio (≈70%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-muted-foreground">Avançado (≈95%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
