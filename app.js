const express = require('express')
const bodyParser = require('body-parser')

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(shopRoutes)
app.use(adminRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`)
})