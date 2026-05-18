import {
  createContext,
  useState,
  type ReactNode,
} from "react"

interface User {
  name: string
  role: "admin" | "user"
}

interface AuthContextData {
  user: User | null
  signIn: (role: "admin" | "user") => void
  logout: () => void
}

interface Props {
  children: ReactNode
}

export const AuthContext =
  createContext({} as AuthContextData)

export function AuthProvider({
  children,
}: Props) {
  const [user, setUser] =
    useState<User | null>(null)

  function signIn(role: "admin" | "user") {
    setUser({
      name: role === "admin"
        ? "Administrador"
        : "Usuário",
      role,
    })
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}