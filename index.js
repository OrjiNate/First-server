const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.send('How fa guys, users section')
})
app.get('/messages', (req, res) => {
  res.send('this route gives list of messages')
})

app.get('/login', (req, res) => {
  res.send('Login successful!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
