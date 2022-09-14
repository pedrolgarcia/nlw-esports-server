import express from "express"

const app = express()

app.get("/ads", (req, res) => {
  res.json({
    "hello": "world"
  })
})

app.listen(3000)