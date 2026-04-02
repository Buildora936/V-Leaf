import { fetchProducts } from "./jetprint.js"
import { supabase } from "./supabase.js"

export async function getAllProducts() {

  // produits JetPrint
  const jetprint = await fetchProducts()

  // produits que tu ajouteras dans Supabase plus tard
  const { data: manual } = await supabase
    .from("products")
    .select("*")

  return {
    jetprint,
    manual
  }
}
