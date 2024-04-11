const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('labas ka tu');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
