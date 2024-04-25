const mongoose = require('mongoose');
const footerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  adres: { type: String, required: true },
});

const Footer = mongoose.model('Footer', footerSchema);

module.exports = Footer;
