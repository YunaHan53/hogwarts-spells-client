'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
let updateForm

// Create Spell function
const onCreateSpell = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.createSpell(data)
    .then(ui.onCreateSpellSuccess)
    .catch(ui.onCreateSpellFailure)
}

const onShowSpell = function (event) {
  event.preventDefault()

  api.showSpell()
    .then(ui.onShowSpellSuccess)
    .catch(ui.onShowSpellFailure)
}

const onUpdateSpell = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  const id = $(event.target).data('id')
  // console.log(data)

  api.updateSpell(data, updateForm)
    .then(ui.onUpdateSpellSuccess)
    .catch(ui.onUpdateSpellFailure)
}

const onUpdateForm = function (event) {
  event.preventDefault()
  updateForm = undefined
  const form = $(event.target).data('id')
  updateForm = form
  $('#update-spell').show()
  // console.log(updateForm)
}

const onDeleteSpell = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  // console.log(id)
  api.deleteSpell(id)
    .then(ui.onDeleteSpellSuccess)
    .catch(ui.onDeleteSpellFailure)
}

module.exports = {
  onCreateSpell,
  onShowSpell,
  onUpdateSpell,
  onUpdateForm,
  onDeleteSpell
}
