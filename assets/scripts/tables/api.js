'use strict'

const config = require('./../config')
// const store = require('./../store')

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signIn
}
