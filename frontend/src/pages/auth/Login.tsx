import { useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/useAuth"

export function Login() {
  const { signIn } = useAuth()

  const navigate = useNavigate()

  function handleAdmin() {
    signIn("admin")

    navigate("/")
  }

  function handleUser() {
    signIn("user")

    navigate("/")
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800 w-full max-w-md">
        <h1 className="text-4xl font-bold text-white mb-8">
          MiniCommerce
        </h1>

        <div className="space-y-4">
          <button
            onClick={handleAdmin}
            className="w-full h-14 rounded-xl bg-violet-600 text-white font-semibold"
          >
            Entrar como Admin
          </button>

          <button
            onClick={handleUser}
            className="w-full h-14 rounded-xl bg-zinc-800 text-white font-semibold"
          >
            Entrar como Usuário
          </button>
        </div>
      </div>
    </div>
  )
}