const { connection } = require('../server/db-connection.js');

module.exports = {
  getConj: () => {
    let query = 'SELECT * FROM conj JOIN verbs ON conj.conj_type = verbs.exp_key JOIN endings ON verbs.ending = endings.ending AND verbs.exp_key = endings.conj_type';

      return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
          if (err) reject(err);
          // console.log(results)
          resolve(results);
        })
      })
  }
}


// SELECT * FROM conj JOIN verbs ON conj.conj_type = verbs.exp_key JOIN endings ON verbs.ending = endings.ending;


// let query = 'SELECT * FROM conj JOIN verbs ON conj.conj_type = verbs.exp_key JOIN endings ON conj.conj_type = endings.conj_type';

// SELECT * FROM conj JOIN verbs ON conj.conj_type = verbs.exp_key JOIN endings ON verbs.ending = endings.ending AND verbs.exp_key = endings.conj_type;

// let query = 'SELECT * FROM conj JOIN verbs ON conj.conj_type = verbs.exp_key JOIN endings ON verbs.ending = endings.ending';