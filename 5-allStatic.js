const express = require('express')
const path = require('path')

const app = express()

// Setup static and Middleware
app.use(express.static('./navbarApp'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbarApp/index.html'))
//   Adding to static assets
//   SSR-- Server Side Rendering
// })

app.all('*', (req, res) => {
  res.status(404).send('Resource not found')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})