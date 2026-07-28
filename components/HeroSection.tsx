"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function HeroSection() {
  const { t } = useLanguage();
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="sobre" className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-start justify-center container mx-auto px-4 min-h-[80vh] relative overflow-hidden">
      {/* Elemento de fundo Tech/Monospace */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 text-[15rem] md:text-[25rem] font-mono font-bold text-surface/10 select-none pointer-events-none z-[-1]" aria-hidden="true">
        &lt;/&gt;
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.div
          variants={fadeUpVariants}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-zinc-200 dark:border-zinc-800/50 text-sm font-medium text-text/80 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          {t("heroBadge")}
        </motion.div>

        <motion.h1
          variants={fadeUpVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text mb-6 leading-tight"
        >
          {t("heroTitleBase")} <span className="text-accent">{t("heroTitleHighlight")}</span>
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          className="text-lg md:text-xl text-text/70 max-w-2xl mb-10 leading-relaxed"
        >
          <strong className="text-text font-medium">Kaio Freire.</strong> {t("heroDescription").replace("Kaio Freire. ", "")}
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mt-2"
        >
          {/* Botão Primário */}
          <a
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus:outline-none transition-colors shadow-sm w-full sm:w-auto"
            aria-label="Ver seção de projetos"
          >
            {t("btnProjects")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          {/* Grupo de Download de Currículos */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="assets/cv-en.pdf"
              download="cv-en.pdf"
              target="_blank"
              className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 px-5 py-3 rounded-full border-2 border-text/90 text-text font-medium hover:bg-surface focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus:outline-none transition-all shadow-sm"
              aria-label="Download Resume in English"
            >
              <Download className="h-4 w-4 text-accent" aria-hidden="true" />
              <span className="text-sm">{t("btnResumeEN")}</span>
            </a>

            <a
              href="assets/cv-en.pdf"
              download="cv-pt.pdf"
              target="_blank"
              className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 px-5 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-text font-medium hover:bg-surface hover:border-accent/50 dark:hover:border-accent/50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus:outline-none transition-all shadow-sm"
              aria-label="Baixar Currículo em Português"
            >
              <Download className="h-4 w-4 text-accent" aria-hidden="true" />
              <span className="text-sm">{t("btnResumePT")}</span>
            </a>
          </div>
        </motion.div>

        {/* Links Sociais */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800/50"
        >
          <a
            href="https://github.com/pouskzin"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm font-medium border-b-2 border-accent/60 hover:border-accent pb-0.5 transition-colors text-text/80 hover:text-text"
          >
            GitHub
            <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://www.linkedin.com/in/kaio-freire/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm font-medium border-b-2 border-accent/60 hover:border-accent pb-0.5 transition-colors text-text/80 hover:text-text"
          >
            LinkedIn
            <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://instagram.com/pousk01"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm font-medium border-b-2 border-accent/60 hover:border-accent pb-0.5 transition-colors text-text/80 hover:text-text"
          >
            Instagram
            <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}