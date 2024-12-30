const http = require('http')
const { readFileSync } = require('fs')

// Get all files
const homePage = readFileSync('./navbarApp/index.html')
const homeStyles = readFileSync('./navbarApp/styles.css')
const homeImage = readFileSync('./navbarApp/logo.svg')
const homeLogic = readFileSync('./navbarApp/browserApp.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)

  // Home Page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // About Page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>About Page</h1>')
    res.end()
  }
  // Styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  // Image/Logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }
  // Logic
  else if (url === '/browserApp.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)