const Paslauga = require('../models/creatPaslaugos');
const {
  postPaslaugaValidation,
} = require('../validation/postPaslaugaValidation');

async function postPaslauga(props) {
  console.log(props);

  postPaslaugaValidation(props);

  const response = await Paslauga.create(props);

  return response;
}

module.exports = postPaslauga;
