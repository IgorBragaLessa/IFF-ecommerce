export function Header() {
  return (
    <header className="h-20 border-b border-zinc-800 bg-zinc-950 px-8 flex items-center justify-between">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm text-zinc-400">
            Bem-vindo
          </p>

          <strong>Igor</strong>
        </div>

        <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center font-bold">
          I
        </div>
      </div>
    </header>
  )
}