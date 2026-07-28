"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
      role="banner"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="font-mono text-xl font-bold tracking-tighter hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus:outline-none rounded-sm transition-colors"
          aria-label="Kaio Freire - Ir para a página inicial"
        >
          Kaio Freire
        </Link>

        <nav
          className="hidden md:flex items-center gap-6 text-sm font-medium"
          aria-label="Navegação principal"
        >
          <Link href="#sobre" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus:outline-none rounded-sm transition-colors">
            {t("navAbout")}
          </Link>
          <Link href="#projetos" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus:outline-none rounded-sm transition-colors">
            {t("navProjects")}
          </Link>
          <Link href="#experiencia" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus:outline-none rounded-sm transition-colors">
            {t("navExperience")}
          </Link>
          <Link href="#contato" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus:outline-none rounded-sm transition-colors">
            {t("navContact")}
          </Link>
        </nav>

        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Configurações de acessibilidade e idioma"
        >
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 p-2 rounded-md bg-transparent text-text hover:bg-surface hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus:outline-none transition-colors"
            aria-label="Alternar idioma"
            title="Alternar idioma"
          >
            <Globe className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm font-medium">{language === "pt" ? "EN" : "PT"}</span>
          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md bg-transparent text-text hover:bg-surface hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus:outline-none transition-colors"
            aria-label={mounted && theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
            title="Alternar tema"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
            <span className="sr-only">Alternar tema</span>
          </button>
        </div>
      </div>
    </header >
  );
}
