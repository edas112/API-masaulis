const { Types } = require('mongoose');

function updateFooterValidation(id, body) {
  if (
    !body ||
    (!body.hasOwnProperty('title') &&
      !body.hasOwnProperty('number') &&
      !body.hasOwnProperty('email') &&
      !body.hasOwnProperty('adres'))
  ) {
    throw new Error('netinkami duomenys');
  }

  if (!body?.title?.trim()) {
    throw new Error('Pavadinimas privalomas');
  }
  if (!body?.number?.trim()) {
    throw new Error('Telefonas privalomas');
  }
  if (!body?.email?.trim()) {
    throw new Error('Email privalomas');
  }
  if (!body?.adres?.trim()) {
    throw new Error('Adres privalomas');
  }

  if (!Types.ObjectId.isValid(id)) {
    throw new Error('ID yra privalomas');
  }
}

module.exports = { updateFooterValidation };
