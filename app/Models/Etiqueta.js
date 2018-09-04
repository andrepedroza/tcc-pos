'use strict'

const Model = use('Model')

class Etiqueta extends Model {
  static get hidden () { return ['created_at', 'updated_at'] }
}

module.exports = Etiqueta
