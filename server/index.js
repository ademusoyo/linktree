const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Linktree Server using postgres and express' })
})

app.get('/links', db.getLinks)
app.post('/links', db.createLink)
app.put('/links/:id', db.updateLink)
app.delete('/links/:id', db.deleteLink)

app.listen(port, () => {
    console.log(`Hello! App running on port ${port}.`)
})