import { Suspense } from "react";
import { LaboratorySection } from "./LaboratorySection";
import { LaboratorySkeleton } from "./LaboratorySkeleton";

export function Laboratory() {
  return (
    <section id="laboratorio" className="container mx-auto px-4 py-24 border-t border-zinc-200 dark:border-zinc-800/50 bg-surface/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">
          Laboratório
        </h2>
        <p className="text-text/70 mb-12 text-lg max-w-2xl leading-relaxed">
          Explorando ideias, estudando novas tecnologias e construindo ferramentas de código aberto (via GitHub).
        </p>

        {/* Suspense Boundary para o Server Component que faz o Fetch */}
        <Suspense fallback={<LaboratorySkeleton />}>
          <LaboratorySection />
        </Suspense>
      </div>
    </section>
  );
}
