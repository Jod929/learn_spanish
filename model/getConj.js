const connection = require('../server/db-connection.js');

module.exports = {
  getConj: (query) => {
    let query = 'SELECT * FROM conj';
      return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
          if (err) reject(err);
          resolve(results);
        })
      })
  }
}