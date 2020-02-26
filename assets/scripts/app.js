'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const spellEvents = require('./spell/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#change-password').hide()
  $('#password-button').hide()
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#sign-out').hide()

  $('#create-spell-button').hide()
  $('#create-spell').hide()
  $('#create-spell').on('submit', spellEvents.onCreateSpell)

  $('#show-spell-button').hide()
  $('#show-spell-button').on('click', spellEvents.onShowSpell)

  $('#update-spell').hide()
  $('#update-spell').on('submit', spellEvents.onUpdateSpell)

  $('#spell-content').on('click', '.update-spell-button', spellEvents.onUpdateForm)
  $('#spell-content').on('click', '.delete-button', spellEvents.onDeleteSpell)
})
