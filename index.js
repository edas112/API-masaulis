const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const paslaugaGetterRouter = require('./routes/paslaugaGetter.routes');
const paslaugaSetterRouter = require('./routes/paslaugaSetter.routes');
const footerSetterRouter = require('./routes/footerSetter.routes');
const footerGetterRouter = require('./routes/footerGetter.routes');
const userRouter = require('./routes/user.routes');

const corsOptions = {
  origin: ['http://localhost:5173', 'http://192.168.1.254'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors(corsOptions));

app.use('/kortele', paslaugaGetterRouter);
app.use('/kortele', paslaugaSetterRouter);
app.use('/user', userRouter);
app.use('/footer', footerSetterRouter);
app.use('/footer', footerGetterRouter);
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
