const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
const client = path.resolve(__dirname, '../client/dist');

app.use(express.static(client));

const connection = require('./db-connection.js');

const { conj } = require('../controller/conj.js');


app.get('/conj', (req, res) => {

  conj(req, res)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err)
      res.send(500)
    })

  // res.send('Here is the conj data');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})