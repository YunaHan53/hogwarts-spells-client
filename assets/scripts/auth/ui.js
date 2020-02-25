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
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#home-message').hide()
  $('#create-spell-button').show()
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
  $('#change-password').show()
})

const onChangePasswordSuccess = function (response) {
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message').text('Changed Password Succeeded!')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('You can not change your password muahahaha!')
  $('#change-password').trigger('reset')
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
