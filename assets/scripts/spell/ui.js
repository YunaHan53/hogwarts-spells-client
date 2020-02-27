'use strict'

// const store = require('./../store')
const showSpell = require('./../templates/spells-listing.handlebars')

$('#create-spell-button').click(function () {
  $('#message').removeClass()
  $('#message').text('Create your Spell Here!')

  $('#change-password').trigger('reset')
  $('#create-spell').trigger('reset')
  $('#update-spell').trigger('reset')
  // stuff to hide on create button click
  $('#change-password').hide()
  $('#update-spell').hide()
  $('#spell-content').hide()
  // show this stuff
  $('#create-spell').show()
})

const onCreateSpellSuccess = function (response) {
  $('#message').removeClass()
  $('#message').text('New Spell Created!')
  $('#message').addClass('success-message')
  $('#create-spell').trigger('reset')
}

const onCreateSpellFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Create New Spell Failed 😭')
  $('#create-spell').trigger('reset')
}

$('#show-spell-button').click(function () {
  // $('#message').removeClass()
  $('#message').text('Here are all your spells!')
  $('#change-password').trigger('reset')
  $('#create-spell').trigger('reset')
  $('#update-spell').trigger('reset')
  // stuff to hide on show-button click
  $('#change-password').hide()
  $('#create-spell').hide()
  $('#update-spell').hide()
  // show this stuff
  $('#spell-content').show()
})

const onShowSpellSuccess = function (data) {
  // console.log(data)
  const printSpells = showSpell({spells: data.spells})
  $('#spell-content').html(printSpells)
}

const onShowSpellFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('You broke the database!!!')
  $('#create-spell').trigger('reset')
  $('#update-spell').trigger('reset')
}

$('.update-spell-button').click(function () {
  $('#message').text('Update Your Spell Here!')
  $('#change-password').trigger('reset')
  $('#create-spell').trigger('reset')
  $('#update-spell').trigger('reset')
  // stuff to hide on update button click
  $('#change-password').hide()
  $('#create-spell').hide()
  // show this stuff
  $('#update-spell').show()
})

const onUpdateSpellSuccess = function (response) {
  $('#message').removeClass()
  $('#message').text('Woohoo! Update Success!')
  $('#message').addClass('success-message')
  $('#update-spell').trigger('reset')
  // store.data = response.spell
}

const onUpdateSpellFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('NOOOOOOOO!!!')
  $('#update-spell').trigger('reset')
}

const onDeleteSpellSuccess = function (response) {
  $('#message').removeClass()
  $('#message').text('Deleted!')
  $('#message').addClass('success-message')
}

const onDeleteSpellFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('You can\'t delete your spell muahahahaha!')
}

module.exports = {
  onCreateSpellSuccess,
  onCreateSpellFailure,
  onShowSpellSuccess,
  onShowSpellFailure,
  onUpdateSpellSuccess,
  onUpdateSpellFailure,
  onDeleteSpellSuccess,
  onDeleteSpellFailure
}
