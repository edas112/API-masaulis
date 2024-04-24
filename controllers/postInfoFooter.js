const Footer = require('../models/infoFooter');
const { infoFooterValidation } = require('../validation/infoFooterValidation');

async function postInfoFooter(props) {
  console.log(props);

  infoFooterValidation(props);

  const response = await Footer.create(props);

  return response;
}

module.exports = postInfoFooter;
