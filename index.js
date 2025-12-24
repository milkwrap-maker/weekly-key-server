import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.get("/key", (req, res) => {
  const now = new Date()
  const start = new Date(Date.UTC(now.getUTCFullYear(), 0, 1))
  const week = Math.floor((now - start) / (7 * 24 * 60 * 60 * 1000))

  function seededRandom(seed) {
    let x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }

  const number = Math.floor(seededRandom(week * 1337) * 9000) + 1000
  const key = `Key${number}`

  res.json({ key, week })
})

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})
