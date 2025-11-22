'use client';

import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name?.trim()) newErrors.name = 'Nome é obrigatório.';
    if (!formData.email?.trim()) newErrors.email = 'Email é obrigatório.';
    if (!formData.message?.trim())
      newErrors.message = 'Mensagem é obrigatória.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const errorMessage = Object.values(newErrors).filter(Boolean).join(' ');
      toast({
        title: 'Erro',
        description: errorMessage || 'Preencha os campos obrigatórios.',
        variant: 'destructive',
      });
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    toast({ title: 'Sucesso', description: 'Mensagem enviada com sucesso.' });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const whatsappLink = `https://wa.me/5511994505049?text=Olá! Gostaria de conversar sobre um projeto.`;

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Contact Information */}
      <div className="md:col-span-1 space-y-6">
        <div className="bg-card border border-border p-6 rounded-lg">
          <div className="flex items-start gap-4 mb-6">
            <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <a
                href="mailto:catarina.dalsan@outlook.com"
                className="text-primary hover:underline"
              >
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
      <form
        onSubmit={handleSubmit}
        className="md:col-span-2 space-y-6 bg-card border border-border p-8 rounded-lg"
      >
        <div>
          <label
            htmlFor="name"
            className={`block text-sm font-medium mb-2 ${
              errors.name ? 'text-destructive' : 'text-foreground'
            }`}
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg bg-background text-foreground border ${
              errors.name
                ? 'border-destructive focus:ring-destructive'
                : 'border-border focus:ring-primary'
            } focus:outline-none focus:ring-2`}
            placeholder="Seu nome"
            aria-invalid={errors.name ? true : false}
            aria-describedby={errors.name ? 'error-name' : undefined}
          />
          {errors.name && (
            <p id="error-name" className="text-sm text-destructive mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className={`block text-sm font-medium mb-2 ${
              errors.email ? 'text-destructive' : 'text-foreground'
            }`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg bg-background text-foreground border ${
              errors.email
                ? 'border-destructive focus:ring-destructive'
                : 'border-border focus:ring-primary'
            } focus:outline-none focus:ring-2`}
            placeholder="seu@email.com"
            aria-invalid={errors.email ? true : false}
            aria-describedby={errors.email ? 'error-email' : undefined}
          />
          {errors.email && (
            <p id="error-email" className="text-sm text-destructive mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className={`block text-sm font-medium mb-2 ${
              errors.message ? 'text-destructive' : 'text-foreground'
            }`}
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-2 rounded-lg bg-background text-foreground border ${
              errors.message
                ? 'border-destructive focus:ring-destructive'
                : 'border-border focus:ring-primary'
            } focus:outline-none focus:ring-2 resize-none`}
            placeholder="Sua mensagem aqui..."
            aria-invalid={errors.message ? true : false}
            aria-describedby={errors.message ? 'error-message' : undefined}
          />
          {errors.message && (
            <p id="error-message" className="text-sm text-destructive mt-1">
              {errors.message}
            </p>
          )}
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
      {/* Toaster (renders toasts) - rendered here to guarantee visibility */}
      <Toaster />
    </div>
  );
}
