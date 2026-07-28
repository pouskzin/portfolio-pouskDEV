"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer 
      className="bg-surface py-12 border-t border-zinc-200 dark:border-zinc-800/50 mt-auto"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Semantic figure for Quote */}
        <figure className="max-w-2xl flex flex-col items-center">
          <blockquote className="text-lg italic text-text/90 mb-6 font-serif leading-relaxed">
            {t("aboutQuote")}
          </blockquote>
          <figcaption>
            <cite className="font-mono text-sm font-semibold text-accent not-italic">
              {t("footerQuoteAuthor")}
            </cite>
          </figcaption>
        </figure>
      </div>
    </footer>
  );
}
