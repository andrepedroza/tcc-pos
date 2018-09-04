'use strict'

const Model = use('Model')

class Usuario extends Model {
  static get hidden () { return ['created_at', 'updated_at'] }

  quadros () { return this.hasMany('App/Models/Quadro') }
}

module.exports = Usuario
