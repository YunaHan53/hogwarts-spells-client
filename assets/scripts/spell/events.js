'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Create Spell function
const onCreateSpell = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.createSpell(data)
    .then(ui.onCreateSpellSuccess)
    .catch(ui.onCreateSpellFailure)
}

module.exports = {
  onCreateSpell
}
