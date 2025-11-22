'use client';

import type React from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { useEffect, useState } from 'react';
import { Sun, Moon, Github, Linkedin, Instagram } from 'lucide-react';
import './globals.css';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode =
      localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <title>Portfólio</title>
        <meta name="description" content="Portfólio profissional" />
      </head>
      <body className={`font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-2xl font-bold text-primary hover:opacity-90"
                >
                  @cat.dalsan
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2">
                  <a
                    href="/"
                    className="text-foreground hover:text-primary transition"
                  >
                    Portfolio
                  </a>
                  <a
                    href="/servicos"
                    className="text-foreground hover:text-primary transition"
                  >
                    Serviços
                  </a>
                </div>

                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition flex items-center justify-center cursor-pointer mr-10 ml-5"
                  aria-label="Alternar tema"
                >
                  {isDark ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>

                {/* social icons moved here so they're next to theme toggle */}
                <div className="flex items-center gap-1 mr-2">
                  <a
                    href="https://github.com/Catyz00"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className="text-foreground hover:text-primary transition-colors transform hover:scale-110 p-1 rounded-full hover:bg-primary/10"
                  >
                    <Github className="h-6 w-6" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/catarina-dalsan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="text-foreground hover:text-primary transition-colors transform hover:scale-110 p-1 rounded-full hover:bg-primary/10"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>

                  <a
                    href="https://instagram.com/cat.dalsan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                    className="text-foreground hover:text-primary transition-colors transform hover:scale-110 p-1 rounded-full hover:bg-primary/10"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-border bg-card py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
              <p>© 2025 @cat.dalsan. Todos os direitos reservados.</p>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
