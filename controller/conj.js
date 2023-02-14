const { getConj } = require('../model/getConj.js');

module.exports = {
  conj: (req, res) => {
    return new Promise((resolve, reject) => {
      getConj(req)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }
}