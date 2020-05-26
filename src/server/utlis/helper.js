/* eslint-disable no-console */
const isEmpty = require('../utlis/isEmpty');
var slugify = require('slugify');
const formatResponse = (status = 500, err = '', data = [], errors = []) => {
  return {
    status,
    message: err && err.message ? err.message : err,
    data,
    errors
  };
};

module.exports = {
  formatResponse
};
