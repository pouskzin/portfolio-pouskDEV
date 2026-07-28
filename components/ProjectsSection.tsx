"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "@/hooks/useLanguage";

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t("proj1Title"),
      description: t("proj1Desc"),
      techs: ["PHP", "MySQL", "MVC", "Webhooks"],
      imageUrl: "",
      repoUrl: "https://github.com/pouskzin/Pkz-Sneakers",
      deployUrl: "#"
    },
    {
      id: 2,
      title: t("proj2Title"),
      description: t("proj2Desc"),
      techs: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
      imageUrl: "",
      repoUrl: "https://github.com/pouskzin/API-de-Gerenciamento-de-Tarefas-To-Do-List-2.0-",
      deployUrl: "#"
    },
    {
      id: 3,
      title: t("proj3Title"),
      description: t("proj3Desc"),
      techs: ["Next.js", "TypeScript", "Tailwind CSS", "UX/UI"],
      imageUrl: "",
      repoUrl: "#",
      deployUrl: "https://coitz-barbearia.vercel.app"
    }
  ];

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projetos" className="container mx-auto px-4 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-16 tracking-tight text-center md:text-left">
          {t("projectsTitle")}<span className="text-accent">.</span>
        </h2>

        <div className="flex flex-col gap-16" aria-label="Lista de estudos de caso e projetos">
          {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeUpVariants}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-0 bg-surface/5 border border-zinc-200 dark:border-zinc-800/50 rounded-[2rem] overflow-hidden group hover:bg-surface/10 hover:border-accent/50 dark:hover:border-accent/50 transition-all focus-within:ring-2 focus-within:ring-accent`}
                tabIndex={0}
              >
              {/* Imagem / Mockup */}
              <div
                className={`w-full md:w-1/2 bg-background min-h-[320px] flex flex-col items-center justify-center relative overflow-hidden transition-colors ${index % 2 !== 0 ? 'md:border-l border-zinc-200 dark:border-zinc-800/50' : 'md:border-r border-zinc-200 dark:border-zinc-800/50'}`}
                aria-hidden="true"
              >
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={`Captura de tela do projeto ${project.title}`} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-text/30 group-hover:text-text/50 transition-colors">
                    <FaGithub className="w-12 h-12" />
                    <span className="font-mono text-sm uppercase tracking-widest">{t("projectsMockupImg")}</span>
                  </div>
                )}
              </div>

              {/* Informações */}
              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-text mb-5 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text/70 leading-relaxed text-lg mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10" aria-label="Tecnologias utilizadas">
                  {project.techs.map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded-md bg-surface/10 border border-zinc-200 dark:border-zinc-800/50 text-text/90 text-xs font-mono font-medium uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <a
                    href={project.repoUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800/50 bg-surface/5 hover:bg-surface/20 text-text font-medium transition-colors text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus:outline-none font-mono"
                    aria-label={`Ver repositório do projeto ${project.title} no GitHub`}
                  >
                    <FaGithub className="w-4 h-4" aria-hidden="true" />
                    {t("projectsRepoBtn")}
                  </a>
                  <a
                    href={project.deployUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-text text-background hover:bg-text/90 font-mono font-semibold transition-colors text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus:outline-none"
                    aria-label={`Acessar a versão publicada do projeto ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    {t("projectsDeployBtn")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
