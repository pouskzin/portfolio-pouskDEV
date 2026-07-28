import { Star, GitFork } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export async function LaboratorySection() {
  let repos: any[] = [];
  let error = false;

  try {
    // Faz o fetch de repositórios do usuário 'pouskzin' ordenados pelos atualizados recentemente
    const res = await fetch("https://api.github.com/users/pouskzin/repos?sort=updated&per_page=10&type=owner", {
      next: { revalidate: 3600 } // Cache Server-side por 1 hora
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    repos = await res.json();
  } catch (err) {
    error = true;
  }

  // Filtra forks para manter originalidade (se desejar) e limita a 6
  const displayRepos = repos.filter(repo => !repo.fork).slice(0, 6);

  const getLanguageColor = (lang: string) => {
    switch (lang?.toLowerCase()) {
      case 'java': return '#b07219';
      case 'typescript': return '#3178c6';
      case 'javascript': return '#f1e05a';
      case 'php': return '#4F5D95';
      case 'html': return '#e34c26';
      case 'css': return '#563d7c';
      case 'vue': return '#41b883';
      case 'python': return '#3572A5';
      default: return '#8b949e';
    }
  };

  if (error || displayRepos.length === 0) {
    return (
      <div className="w-full p-10 border border-zinc-200 dark:border-zinc-800/50 rounded-[2rem] text-center bg-surface/20 flex flex-col items-center">
        <FaGithub className="w-10 h-10 text-text/30 mb-4" />
        <p className="text-text/70 text-lg">Não foi possível carregar os repositórios do GitHub no momento.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayRepos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-between h-full p-6 bg-background border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-accent/50 dark:hover:border-accent/50 hover:shadow-sm transition-colors group"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaGithub className="w-5 h-5 text-text/50 group-hover:text-accent transition-colors" />
              <h4 className="font-bold text-text truncate group-hover:text-accent transition-colors text-lg" title={repo.name}>
                {repo.name}
              </h4>
            </div>

            <p className="text-sm text-text/70 line-clamp-2 leading-relaxed mb-6">
              {repo.description || "Nenhuma descrição detalhada disponível."}
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs font-medium text-text/70">
            {repo.language && (
              <div className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getLanguageColor(repo.language) }}
                />
                <span>{repo.language}</span>
              </div>
            )}

            <div className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Star className="w-4 h-4" />
              <span>{repo.stargazers_count}</span>
            </div>

            <div className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <GitFork className="w-4 h-4" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
