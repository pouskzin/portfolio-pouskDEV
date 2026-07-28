"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/hooks/useLanguage";

export function ContactSection() {
  const { t } = useLanguage();

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-background border-t border-zinc-200 dark:border-zinc-800/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">

          {/* Coluna Esquerda: Informações de Contato */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
              {t("contactTitle")}<span className="text-accent">{t("contactTitleHighlight")}.</span>
            </h2>
            <p className="text-text/70 text-lg mb-12 max-w-md leading-relaxed font-mono">
              {t("contactDesc")}
            </p>

            <div className="flex flex-col gap-6 mb-12" aria-label="Canais de comunicação direta">
              <a
                href="mailto:kaioaugustofreire@gmail.com"
                className="flex items-center gap-4 text-text/80 hover:text-accent transition-colors group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus:outline-none rounded-md w-fit"
                aria-label="Enviar e-mail para Kaio Freire"
              >
                <div className="p-3 rounded-full bg-surface/50 border border-zinc-200 dark:border-zinc-800 group-hover:border-accent/50 dark:group-hover:border-accent/50 transition-colors" aria-hidden="true">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">kaioaugustofreire@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center gap-4" aria-label="Redes sociais">
              <a
                href="https://linkedin.com/in/kaio-freire"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface/30 border border-zinc-200 dark:border-zinc-800 text-text/80 hover:text-accent hover:bg-surface hover:border-accent/50 dark:hover:border-accent/50 transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus:outline-none"
                aria-label="Acessar perfil no LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/pouskzin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface/30 border border-zinc-200 dark:border-zinc-800 text-text/80 hover:text-accent hover:bg-surface hover:border-accent/50 dark:hover:border-accent/50 transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus:outline-none"
                aria-label="Acessar perfil no GitHub"
              >
                <FaGithub className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            <form
              action="https://formspree.io/f/xzdnozgz"
              method="POST"
              className="bg-surface/5 border border-zinc-200 dark:border-zinc-800/50 hover:border-accent/50 dark:hover:border-accent/50 transition-colors rounded-3xl p-8 md:p-10 flex flex-col gap-6"
              aria-label="Formulário de Contato"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-text/90">{t("contactNameLabel")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  className="w-full bg-surface/10 border border-surface/30 rounded-xl px-4 py-3 text-text placeholder:text-text/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-shadow font-mono text-sm"
                  placeholder={t("contactNamePlaceholder")}
                  aria-label="Insira seu nome completo"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-text/90">{t("contactEmailLabel")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={150}
                  className="w-full bg-surface/10 border border-zinc-200 dark:border-zinc-800/50 rounded-xl px-4 py-3 text-text placeholder:text-text/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-shadow font-mono text-sm"
                  placeholder={t("contactEmailPlaceholder")}
                  aria-label="Insira seu e-mail"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-text/90">{t("contactMessageLabel")}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={1000}
                  className="w-full bg-surface/10 border border-zinc-200 dark:border-zinc-800/50 rounded-xl px-4 py-3 text-text placeholder:text-text/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-shadow resize-y font-mono text-sm"
                  placeholder={t("contactMessagePlaceholder")}
                  aria-label="Escreva sua mensagem"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-accent text-white font-bold font-mono tracking-wider text-lg rounded-xl px-6 py-4 hover:bg-accent/90 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus:outline-none"
                aria-label="Enviar mensagem"
              >
                {t("contactSendBtn")}
                <Send className="w-5 h-5" aria-hidden="true" />
              </button>

              <p className="text-xs text-center text-text/50 mt-2">
                {t("contactSecurityNote")}
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
