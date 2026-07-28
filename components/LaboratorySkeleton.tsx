export function LaboratorySkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div 
          key={i} 
          className="h-[180px] p-6 bg-surface/30 border border-zinc-200 dark:border-zinc-800 rounded-2xl animate-pulse flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-surface" />
              <div className="h-5 bg-surface rounded-md w-3/4" />
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-surface rounded-md w-full" />
              <div className="h-3 bg-surface rounded-md w-4/6" />
            </div>
          </div>
          <div className="flex gap-5 mt-6">
            <div className="h-4 w-16 bg-surface rounded-md" />
            <div className="h-4 w-12 bg-surface rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}
