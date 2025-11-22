"use client"

import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { useEffect, useState } from "react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode =
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", String(newDarkMode))

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

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
              <div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="text-2xl font-bold text-primary hover:opacity-90"
                >
                  @cat.dalsan
                </a>
              </div>

              <div className="flex items-center gap-6">
                <a href="/" className="text-foreground hover:text-primary transition">
                  Portfolio
                </a>
                <a href="/servicos" className="text-foreground hover:text-primary transition">
                  Serviços
                </a>

                {/* (CV link moved to hero) */}

                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? "☀️" : "🌙"}
                </button>
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-border bg-card py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
              <p>© 2025 Portfólio. Todos os direitos reservados.</p>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  )
}