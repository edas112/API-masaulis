const mongoose = require('mongoose');
const paslaugosSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
});

const Paslauga = mongoose.model('Paslauga', paslaugosSchema);

module.exports = Paslauga;
