"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function ExperienceSection() {
  const { t } = useLanguage();

  const timelineData = [
    {
      id: 1,
      title: t("expItem1Title"),
      company: "UniFio",
      date: t("expItem1Date"),
      description: t("expItem1Desc"),
      icon: GraduationCap,
    },
    {
      id: 2,
      title: t("expItem2Title"),
      company: "UENP",
      date: t("expItem2Date"),
      description: t("expItem2Desc"),
      icon: Briefcase,
    },
    {
      id: 3,
      title: t("expItem3Title"),
      company: "Supermercado São Marcos",
      date: t("expItem3Date"),
      description: t("expItem3Desc"),
      icon: Briefcase,
    },
    {
      id: 4,
      title: t("expItem4Title"),
      company: "IFPR",
      date: t("expItem4Date"),
      description: t("expItem4Desc"),
      icon: GraduationCap,
    },
  ];

  const complementaryCourses = [
    { id: 1, title: t("comp1Title"), entity: "Udemy", hours: "120h" },
    { id: 2, title: t("comp2Title"), entity: "Fundação Bradesco", hours: "16h" },
    { id: 3, title: t("comp3Title"), entity: "Fundação Bradesco", hours: "2h" },
  ];

  return (
    <section id="experiencia" className="py-24 md:py-32 bg-background border-t border-zinc-200 dark:border-zinc-800/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">{t("expTitle")}<span className="text-accent">.</span></h2>
          <p className="text-text/70 max-w-2xl text-lg font-mono">
            {t("expSubtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

          {/* Timeline - Ocupa 2 colunas no desktop */}
          <div className="lg:col-span-2 relative">
            {/* Linha vertical centralizada em mobile, à esquerda no desktop */}
            <div
              className="absolute left-8 lg:left-8 top-2 bottom-2 w-px bg-surface border-l border-dashed border-zinc-300 dark:border-zinc-700/50"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-10" role="list" aria-label="Linha do tempo de experiências e educação">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-24 pr-4"
                    role="listitem"
                  >
                    {/* Ícone da timeline */}
                    <div
                      className="absolute left-4 top-0 h-9 w-9 rounded-full bg-background border-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-center z-10 text-text/80 shadow-sm"
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="flex flex-col bg-surface/5 hover:bg-surface/10 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 hover:border-accent/50 dark:hover:border-accent/50 transition-colors focus-within:ring-2 focus-within:ring-accent" tabIndex={0}>
                      <span className="text-sm font-mono text-accent mb-2">{item.date}</span>
                      <h3 className="text-xl font-bold text-text mb-1">{item.title}</h3>
                      <span className="text-text/80 font-medium mb-3">{item.company}</span>
                      <p className="text-text/60 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Cursos Complementares - Lateral */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-28 bg-surface/5 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/50 hover:border-accent/50 dark:hover:border-accent/50 hover:bg-surface/10 transition-colors rounded-2xl p-8">
              <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" aria-hidden="true" />
                {t("expCourseTitle")}
              </h3>

              <ul className="flex flex-col gap-6" aria-label="Lista de cursos complementares">
                {complementaryCourses.map((course) => (
                  <li key={course.id} className="flex flex-col group">
                    <h4 className="text-text/90 font-medium group-hover:text-accent transition-colors">
                      {course.title}
                    </h4>
                    <div className="flex items-center justify-between mt-1 text-sm">
                      <span className="text-text/60">{course.entity}</span>
                      <span className="text-accent/80 font-mono bg-accent/10 px-2 py-0.5 rounded-md">
                        {course.hours}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
