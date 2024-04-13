const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('vercel');
});

const paslaugaSetterRouter = require('./routes/paslaugaSetter.routes');

app.use('/paslaugos', paslaugaSetterRouter);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Database conect');
  } catch (err) {
    console.log('Error', err.message);
  }
};

connectDB();

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
