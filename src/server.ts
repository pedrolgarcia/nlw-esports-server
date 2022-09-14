import express from "express"

const app = express()

app.get("/ads", (request, response) => {
  response.json({
    "hello": "world"
  })
})

app.listen(3000)