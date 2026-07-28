"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export function TechStackSection() {
  const { t } = useLanguage();

  const techCategories = [
    {
      title: t("techCatBackend"),
      skills: ["Java", "Spring Boot", "PHP"],
    },
    {
      title: t("techCatFrontend"),
      skills: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      title: t("techCatDb"),
      skills: ["MySQL", "PostgreSQL"],
    },
  ];

  return (
    <section id="tecnologias" className="py-24 md:py-32 bg-background border-t border-zinc-200 dark:border-zinc-800/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">{t("techTitle")}<span className="text-accent">.</span></h2>
          <p className="text-text/70 max-w-2xl text-lg font-mono">
            {t("techSubtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-xl font-bold text-text mb-6 flex items-center font-mono">
                <span className="text-accent mr-2">[</span>
                {category.title}
                <span className="text-accent ml-2">]</span>
              </h3>
              <div 
                className="flex flex-wrap gap-3"
                role="list"
                aria-label={`Tecnologias de ${category.title}`}
              >
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    role="listitem"
                    className="px-4 py-2 text-sm font-mono font-medium rounded-md bg-surface/10 border border-zinc-200 dark:border-zinc-800/50 text-text/90 hover:border-accent/50 dark:hover:border-accent/50 hover:bg-surface/30 hover:text-text transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
