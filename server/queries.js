const Pool = require('pg').Pool
const pool = new Pool({
  user: '<your_username>',
  host: 'localhost',
  database: 'linktree_app',
  port: 5432,
})

const getLinks = (request, response) => {
    pool.query('SELECT * FROM urls ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const createLink = (request, response) => {
    const { link_name, link_url } = request.body
  
    pool.query('INSERT INTO urls (link_name, link_url) VALUES ($1, $2) RETURNING *', [link_name, link_url], (error, results) => {
      if (error) {
        response.status(500)
        throw error
      }
      response.status(201)
    })
  }



  const updateLink = (request, response) => {
    const id = parseInt(request.params.id)
    const { link_name, link_url } = request.body
  
    pool.query(
      'UPDATE urls SET link_name = $1, link_url = $2 WHERE id = $3',
      [link_name, link_url, id],
      (error, results) => {
        if (error) {
          response.status(500)
          throw error
        }
        response.status(200)
      }
    )
  }

  const deleteLink = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM urls WHERE id = $1', [id], (error, results) => {
      if (error) {
        response.status(500)
        throw error
      }
      response.status(200)
    })
  }

  module.exports = {
    getLinks,
    createLink,
    updateLink,
    deleteLink,
  }