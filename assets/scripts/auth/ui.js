'use strict'

const store = require('./../store')

// Sign Up
const onSignUpSuccess = function (response) {
  console.log(response)
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message').text(response.user.email + ' successfully signed up!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onSignUpFailure = function (response) {
  console.log(response)
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Failed to sign up')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

// Sign In
const onSignInSuccess = function (response) {
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message').text(response.user.email + ' successfully signed in')
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  store.user = response.user
  // stuff hiding on sign in
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#home-message').hide()
  // buttons showing on sign in
  $('#create-spell-button').show()
  $('#show-spell-button').show()
  $('#update-spell-button').show()
  $('#password-button').show()
  $('#sign-out').show()
}

const onSignInFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Signed in failed. 😭')
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
}

// Change Password

$('#password-button').click(function () {
  $('#message').removeClass()
  $('#message').text('Change your password in the form below!')
  $('#change-password').trigger('reset')
  $('#create-spell').trigger('reset')
  // hide this stuff on password-button click
  $('#create-spell').hide()
  $('#update-spell').hide()
  $('#spell-content').hide()
  // show this stuff
  $('#change-password').show()
})

const onChangePasswordSuccess = function (response) {
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message').text('Changed Password Succeeded!')
  $('#change-password').trigger('reset')
  $('#create-spell').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('You can not change your password muahahaha!')
  $('#change-password').trigger('reset')
  $('#create-spell').trigger('reset')
}

// Sign Out
const onSignOutSuccess = function (response) {
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message').text('Sign Out Succeeded!')
  $('#change-password').hide()
  $('#change-password').trigger('reset')
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#password-button').hide()
  $('#create-spell-button').hide()
  $('#create-spell').trigger('reset')
  $('#create-spell').hide()
  $('#show-spell-button').hide()
  $('#update-spell').trigger('reset')
  $('#update-spell').hide()
  $('#spell-content').hide()
  store.user = null
}

const onSignOutFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Sign Out Failed 😭')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
