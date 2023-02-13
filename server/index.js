const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
const client = path.resolve(__dirname, '../client/dist');
// const mysql = require('mysql2');

const connection = require('./db-connection.js')

require('dotenv').config()

app.use(express.static(client));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})