import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { Login } from "../pages/auth/Login"

import { Products } from "../pages/products/Products"

import { ProtectedRoute } from "../components/ProtectedRoute"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}