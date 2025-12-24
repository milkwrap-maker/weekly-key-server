export default function handler(req, res) {
  const now = new Date()

  // Calculate week number (UTC)
  const start = new Date(Date.UTC(now.getUTCFullYear(), 0, 1))
  const week = Math.floor(
    (now - start) / (7 * 24 * 60 * 60 * 1000)
  )

  // Deterministic pseudo-random generator
  function seededRandom(seed) {
    let x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }

  const number = Math.floor(seededRandom(week * 1337) * 9000) + 1000
  const key = `Key${number}`

  res.status(200).json({
    key,
    week
  })
}
