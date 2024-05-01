const { Types } = require('mongoose');
const {
  updateFooterValidation,
} = require('../validation/updateFooterValidation');
const Footer = require('../models/infoFooter');

async function updateFooter(id, body) {
  updateFooterValidation(id, body);

  const updatedFooter = await Footer.findByIdAndUpdate(id, body, {
    new: true,
  });

  return updatedFooter;
}

module.exports = updateFooter;
