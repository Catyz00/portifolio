'use client';

import { Inconsolata } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { useEffect, useState } from 'react';
import { Sun, Moon, Github, Linkedin, Instagram, Menu, X } from 'lucide-react';
import './globals.css';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inconsolata',
});

export default function RootLayout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <title>CatarinaRibeiro</title>

        <meta name="description" content="Portfólio profissional" />
        {/* Use requested flaticon ICO */}
        <link rel="icon" href="/iconeeu.ico" />
        <link rel="apple-touch-icon" href="/iconeeu.ico" />
      </head>
      <body className={`${inconsolata.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
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
                    className="text-foreground hover:text-primary transition px-3 py-2"
                  >
                    Portfolio
                  </a>
                  <a
                    href="/servicos"
                    className="text-foreground hover:text-primary transition px-3 py-2"
                  >
                    Serviços
                  </a>
                </div>

                {/* mobile menu toggle (visible only on small screens) */}
                <button
                  onClick={() => setMenuOpen((s) => !s)}
                  className="sm:hidden p-2 rounded-lg bg-muted hover:bg-muted/80 transition flex items-center justify-center mr-3"
                  aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                  aria-expanded={menuOpen}
                >
                  {menuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>

                <button
                  onClick={toggleDarkMode}
                  className="hidden sm:inline-flex p-2 rounded-lg bg-muted hover:bg-muted/80 transition flex items-center justify-center cursor-pointer mr-0 sm:mr-4"
                  aria-label="Alternar tema"
                >
                  {isDark ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>

                {/* social icons moved here so they're next to theme toggle (hidden on small screens) */}
                <div className="hidden sm:flex items-center gap-1 mr-2">
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

            {/* Mobile collapsed menu */}
            <div
              className={`sm:hidden ${menuOpen ? 'block' : 'hidden'} px-4 pb-4`}
            >
              <div className="flex flex-col gap-2">
                <a
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-foreground hover:text-primary transition px-3 py-2 rounded"
                >
                  Portfolio
                </a>
                <a
                  href="/servicos"
                  onClick={() => setMenuOpen(false)}
                  className="text-foreground hover:text-primary transition px-3 py-2 rounded"
                >
                  Serviços
                </a>

                <div className="flex items-center justify-start gap-2 pt-2">
                  <button
                    onClick={() => {
                      toggleDarkMode();
                      setMenuOpen(false);
                    }}
                    className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition flex items-center justify-center"
                    aria-label="Alternar tema"
                  >
                    {isDark ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </button>

                  <a
                    href="https://github.com/Catyz00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition p-2 rounded"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/catarina-dalsan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition p-2 rounded"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/cat.dalsan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition p-2 rounded"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
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
