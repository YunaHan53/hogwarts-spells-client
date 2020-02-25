'use strict'

const store = require('./../store')

$('#create-spell-button').click(function () {
  $('#message').removeClass()
  $('#message').text('Create your Spell Here!')
  $('#change-password').trigger('reset')
  $('#create-spell').show()
})

const onCreateSpellSuccess = function (response) {
  $('#message').removeClass()
  $('#message').text('New Spell Created!')
  $('#message').addClass('success-message')
  // store.data = response.spell
  $('#change-password').trigger('reset')
}

const onCreateSpellFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Create New Spell Failed 😭')
}

module.exports = {
  onCreateSpellSuccess,
  onCreateSpellFailure
}
