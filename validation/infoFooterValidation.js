function infoFooterValidation(props) {
  if (!props?.title?.trim()) {
    throw new Error('Title is required');
  }
  if (!props?.number?.trim()) {
    throw new Error('Number is required');
  }
  if (!props?.email?.trim()) {
    throw new Error('Email is required');
  }
  if (!props?.adres?.trim()) {
    throw new Error('Adres is required');
  }
}

module.exports = { infoFooterValidation };
