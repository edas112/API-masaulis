const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const paslaugaGetterRouter = require('./routes/paslaugaGetter.routes');
const paslaugaSetterRouter = require('./routes/paslaugaSetter.routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/paslaugos', paslaugaGetterRouter);
app.use('/paslaugos', paslaugaSetterRouter);
app.use('/user', require('./routes/user.routes'));

app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

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
