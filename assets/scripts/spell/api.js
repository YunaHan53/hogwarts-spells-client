'use strict'

const config = require('./../config')
const store = require('./../store')

const createSpell = function (data) {
  return $.ajax({
    url: config.apiUrl + '/spells',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createSpell
}
