const pool = require('../database/connection')

const getPeople = (req, res) => {
  pool.query('SELECT * FROM people ORDER BY id ASC', (err, data) => {
    if(err) throw err 
    res.status(200).json(data.rows)
  })
}

module.exports = getPeople 
