const BASE_URL = "https://api.jetprintapp.com/api"

const API_KEY = "MmWczjb1_AgRrPmV3_WMS"
const CLIENT_ID = "SpAL24QcYL0o3__FD0Gu5"

export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "Client-Id": CLIENT_ID
    }
  })

  const data = await res.json()
  return data
}
