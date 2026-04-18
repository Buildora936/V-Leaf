export default async function handler(req, res) {

  const apiKey = process.env.JETPRINT_API_KEY

  try {

    const response = await fetch("https://open.jetprintapp.com/api/product/list", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json"
      }
    })

    const data = await response.text()

    res.status(200).json({
      success: true,
      raw: data
    })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }

}
