const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'test'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected to database')

});

module.exports = {
  connection
}