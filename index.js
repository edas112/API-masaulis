const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const paslaugaGetterRouter = require('./routes/paslaugaGetter.routes');
const paslaugaSetterRouter = require('./routes/paslaugaSetter.routes');
const footerSetterRouter = require('./routes/footerSetter.routes');
const footerGetterRouter = require('./routes/footerGetter.routes');
const userRouter = require('./routes/user.routes');
const verifyJWT = require('./middleware/verifyJWT');

const corsOptions = {
  origin: ['http://localhost:5173', 'https://masaulis.netlify.app'],

  optionsSuccessStatus: 200,
};

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors(corsOptions));

app.use('/kortele', verifyJWT, paslaugaGetterRouter);
app.use('/kortele', verifyJWT, paslaugaSetterRouter);
app.use('/user', userRouter);
app.use('/footer', verifyJWT, footerSetterRouter);
app.use('/footer', verifyJWT, footerGetterRouter);
app.get('/', (req, res) => res.send('Express on Vercel'));

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
