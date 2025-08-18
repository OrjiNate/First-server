const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.send('How fa guys, users section')
})

app.get('/forget-password', (req, res) => {
  res.send('This is forget password route')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
