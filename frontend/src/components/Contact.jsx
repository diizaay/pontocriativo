import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../hooks/use-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const { submitContact } = await import("../services/api");
      const response = await submitContact(formData);

      toast({
        title: "Mensagem enviada!",
        description: response.message || "Entraremos em contato em breve.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <section id="contact" className="relative bg-white py-20 sm:py-24">
      <button
        type="button"
        onClick={handleClose}
        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#016477]/40 sm:right-10 sm:top-10"
        aria-label="Fechar página de contato"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[#016477]">
            Fale conosco
          </span>
          <h1 className="text-[clamp(2.6rem,9vw,4rem)] font-semibold leading-[1.35] tracking-[-0.02em] text-slate-900">
            Fale com a nossa equipe
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-14 space-y-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome completo *"
              className="h-14 rounded-none border-0 border-b border-slate-300 bg-transparent px-0 text-lg font-medium text-slate-900 placeholder:text-slate-400 focus-visible:border-[#016477] focus-visible:ring-0"
            />
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              className="h-14 rounded-none border-0 border-b border-slate-300 bg-transparent px-0 text-lg font-medium text-slate-900 placeholder:text-slate-400 focus-visible:border-[#016477] focus-visible:ring-0"
            />
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefone *"
              className="h-14 rounded-none border-0 border-b border-slate-300 bg-transparent px-0 text-lg font-medium text-slate-900 placeholder:text-slate-400 focus-visible:border-[#016477] focus-visible:ring-0"
            />
            <Input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="Empresa *"
              className="h-14 rounded-none border-0 border-b border-slate-300 bg-transparent px-0 text-lg font-medium text-slate-900 placeholder:text-slate-400 focus-visible:border-[#016477] focus-visible:ring-0"
            />
          </div>

          <Textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Detalhe objetivos, desafios e prazos *"
            className="rounded-none border-0 border-b border-slate-300 bg-transparent px-0 pb-6 text-lg font-medium text-slate-900 placeholder:text-slate-400 focus-visible:border-[#016477] focus-visible:ring-0"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#016477] px-10 text-sm font-semibold uppercase tracking-[0.32em] text-white transition-transform hover:-translate-y-0.5 hover:bg-[#003a82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#016477]/30 sm:w-auto"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            <svg
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
