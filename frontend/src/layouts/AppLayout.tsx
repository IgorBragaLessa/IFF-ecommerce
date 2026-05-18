import type { ReactNode } from "react"

import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"

interface Props {
  children: ReactNode
}

export function AppLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-zinc-900 text-white">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}