const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.send('How fa guys, users section')
})

app.get('/register', (req, res) => {
  res.send('registration successful')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
