export function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-5xl font-bold text-violet-500 mb-10">
        Mini E-commerce
      </h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-2">
            Produtos
          </h2>

          <p className="text-zinc-400">
            Gerencie os produtos do sistema.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-2">
            Usuários
          </h2>

          <p className="text-zinc-400">
            Gerencie os usuários do sistema.
          </p>
        </div>
      </div>
    </div>
  )
}