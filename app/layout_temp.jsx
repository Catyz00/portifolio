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
        <link rel="icon" href="/iconeeu.ico" />
        <link rel="apple-touch-icon" href="/iconeeu.ico" />
      </head>
      <body className={` antialiased`}>
