import { Link } from "react-router-dom"

import {
  Package,
  Users,
  LayoutDashboard,
} from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800 p-6">
      <h1 className="text-3xl font-bold text-violet-500 mb-10">
        MiniCommerce
      </h1>

      <nav className="space-y-2">
        <Link
          to="/"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-900"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/products"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-900"
        >
          <Package size={20} />
          Produtos
        </Link>

        <Link
          to="/users"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-900"
        >
          <Users size={20} />
          Usuários
        </Link>
      </nav>
    </aside>
  )
}