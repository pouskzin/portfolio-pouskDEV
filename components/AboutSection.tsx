"use client";

import { motion, Variants } from "framer-motion";
import { Quote, Container, Wrench, GitBranch } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "@/hooks/useLanguage";

export function AboutSection() {
  const { t } = useLanguage();
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Bloco da Esquerda (2 Colunas) - Contém o Card Largo e o Quadrado */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Card 1: Largo (Soft Skills) */}
            <motion.div
              variants={fadeUpVariants}
              className="sm:col-span-2 bg-surface/10 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-8 flex flex-col justify-center transition-colors hover:bg-surface/20 hover:border-accent/50 dark:hover:border-accent/50 focus-within:ring-2 focus-within:ring-accent"
              tabIndex={0}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">{t("aboutTitle")}<span className="text-accent">.</span></h2>
              <p className="text-text/70 leading-relaxed text-base md:text-lg font-mono">
                {t("aboutP1Start")}<strong className="text-text/90">{t("aboutP1Comm")}</strong>{t("aboutP1And")}<strong className="text-text/90">{t("aboutP1Team")}</strong>{t("aboutP1Mid")}<strong className="text-text/90">{t("aboutP1Pro")}</strong>{t("aboutP1Mid2")}<strong className="text-text/90">{t("aboutP1Learn")}</strong>{t("aboutP1End")}
              </p>
            </motion.div>

            {/* Card 2: Quadrado (Citação) */}
            <motion.div
              variants={fadeUpVariants}
              className="sm:col-span-1 bg-surface/10 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-8 aspect-square flex flex-col items-start justify-center relative overflow-hidden group transition-colors hover:bg-surface/20 hover:border-accent/50 dark:hover:border-accent/50 focus-within:ring-2 focus-within:ring-accent"
              tabIndex={0}
            >
              <Quote className="text-accent h-8 w-8 mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
              <figure>
                <blockquote className="text-text/90 italic font-serif leading-relaxed text-sm">
                  {t("aboutQuote")}
                </blockquote>
              </figure>
            </motion.div>

            {/* Espaço Vazio Decorativo para manter a integridade do Grid */}
            <motion.div
              variants={fadeUpVariants}
              className="hidden sm:block sm:col-span-1 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700/50 opacity-50"
              aria-hidden="true"
            />
          </div>

          {/* Card 3: Vertical (Ferramentas de Infraestrutura) */}
          <motion.div
            variants={fadeUpVariants}
            className="md:col-span-1 bg-surface/10 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-8 flex flex-col transition-colors hover:bg-surface/20 hover:border-accent/50 dark:hover:border-accent/50"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 tracking-tight">{t("aboutInfraTitle")}<span className="text-accent">.</span></h2>

            <ul className="flex flex-col gap-5 flex-1" aria-label="Lista de ferramentas de infraestrutura e manutenção">
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-background flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-accent/50 dark:group-hover:border-accent/50 transition-colors">
                  <Container className="h-5 w-5 text-text/70 group-hover:text-accent transition-colors" aria-hidden="true" />
                </div>
                <span className="font-medium text-text/80 group-hover:text-text transition-colors">Docker</span>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-background flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-accent/50 dark:group-hover:border-accent/50 transition-colors">
                  <GitBranch className="h-5 w-5 text-text/70 group-hover:text-accent transition-colors" aria-hidden="true" />
                </div>
                <span className="font-medium text-text/80 group-hover:text-text transition-colors">Git</span>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-background flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-accent/50 dark:group-hover:border-accent/50 transition-colors">
                  <FaGithub className="h-5 w-5 text-text/70 group-hover:text-accent transition-colors" aria-hidden="true" />
                </div>
                <span className="font-medium text-text/80 group-hover:text-text transition-colors">GitHub</span>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-background flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-accent/50 dark:group-hover:border-accent/50 transition-colors">
                  <Wrench className="h-5 w-5 text-text/70 group-hover:text-accent transition-colors" aria-hidden="true" />
                </div>
                <span className="font-medium text-text/80 group-hover:text-text transition-colors">{t("aboutInfraMaint")}</span>
              </li>
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
