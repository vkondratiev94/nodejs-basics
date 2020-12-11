const express = require('express')

const app = express()

app.use('/add-product', (req, res, next) => {
  res.send('<h1>The "Add Product" Page</h1>')
})

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>')
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`)
})