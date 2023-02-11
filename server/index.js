const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
const client = path.resolve(__dirname, '../client/dist');
const mysql = require('mysql2');

require('dotenv').config()

// const connection = mysql.createConnection({
//   user: 'root',
//   password: process.env.DB_PASSWORD,
//   host: '127.0.0.1',
//   database: 'reviews',
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('connected')

// });


app.use(express.static(client));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})