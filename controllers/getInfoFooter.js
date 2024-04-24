const Footer = require('../models/infoFooter');

async function getInfoFooter() {
  const response = await Footer.find({});

  return response;
}

module.exports = getInfoFooter;
