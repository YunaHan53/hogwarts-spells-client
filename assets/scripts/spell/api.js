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

// const index = function () {
//   return $.ajax({
//     url: app.host + '/books',
//     method: 'GET'
//   })
// }
//
const showSpell = function () {
  return $.ajax({
    url: config.apiUrl + '/spells',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSpell = function (data, updateForm) {
  return $.ajax({
    url: config.apiUrl + '/spells/' + updateForm,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteSpell = function (id) {
  return $.ajax({
    url: config.apiUrl + '/spells/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createSpell,
  showSpell,
  updateSpell,
  deleteSpell
}
