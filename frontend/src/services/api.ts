import axios from "axios"

export const api = axios.create({
  baseURL: "https://iff-ecommerce-1.onrender.com/",
})