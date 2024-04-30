const { Types } = require('mongoose');
const {
  updateproductValidation,
} = require('../validation/updateproductValidation');
const Footer = require('../models/infoFooter');

async function updateFooter(id, body) {
  updateFooterValidation(id, body);

  const updatedProduct = await Footer.findByIdAndUpdate(id, body, {
    new: true,
  });

  return updatedFooter;
}

module.exports = updateFooter;
