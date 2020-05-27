/* eslint-disable no-console */
const isEmpty = require('../utlis/isEmpty');
var slugify = require('slugify');
const formatResponse = (status = 500, err = '', data = [], errors = []) => {
  console.log('formatResponse -> err', err);
  return {
    status,
    message: err && err.response && err.response.data ? err.response.data : err,
    data,
    errors
  };
};

module.exports = {
  formatResponse
};
