import { useEffect, useState } from "react"

import { AppLayout } from "../../layouts/AppLayout"

import { api } from "../../services/api"

import { useAuth } from "../../hooks/useAuth"

interface Product {
  id: string
  name: string
  price: number
  stock: number
  category: string
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([])

  const { user } = useAuth()

  async function fetchProducts() {
    const response = await api.get("/products")

    setProducts(response.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Produtos
          </h1>

          <p className="text-zinc-400 mt-2">
            Gerencie os produtos do sistema
          </p>
        </div>

        {user?.role === "admin" && (
          <button className="bg-violet-600 px-5 h-12 rounded-xl font-semibold text-white">
            Novo Produto
          </button>
        )}
      </div>

      <div className="bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-900">
            <tr>
              <th className="text-left p-4 text-zinc-300">
                Nome
              </th>

              <th className="text-left p-4 text-zinc-300">
                Categoria
              </th>

              <th className="text-left p-4 text-zinc-300">
                Preço
              </th>

              <th className="text-left p-4 text-zinc-300">
                Estoque
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t border-zinc-800"
              >
                <td className="p-4 text-white">
                  {product.name}
                </td>

                <td className="p-4 text-zinc-300">
                  {product.category}
                </td>

                <td className="p-4 text-zinc-300">
                  R$ {product.price}
                </td>

                <td className="p-4 text-zinc-300">
                  {product.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  )
}