"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const whatsappLink = `https://wa.me/5511994505049?text=Olá! Gostaria de conversar sobre um projeto.`

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Contact Information */}
      <div className="md:col-span-1 space-y-6">
        <div className="bg-card border border-border p-6 rounded-lg">
          <div className="flex items-start gap-4 mb-6">
            <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <a href="mailto:catarina.dalsan@outlook.com" className="text-primary hover:underline">
                catarina.dalsan@outlook.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-secondary mt-1 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                Enviar mensagem
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6 bg-card border border-border p-8 rounded-lg">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Sua mensagem aqui..."
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold"
        >
          <Send size={20} />
          Enviar Mensagem
        </button>

        {submitted && (
          <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-700">
            Mensagem enviada com sucesso! Obrigado pelo contato.
          </div>
        )}
      </form>
    </div>
  )
}
