'use strict'

const Model = use('Model')

class Lista extends Model {
  static get hidden () { return ['created_at', 'updated_at'] }

  cartoes () { return this.hasMany('App/Models/Cartao') }
  getLixeira (lixeira) { return !!lixeira }
}

module.exports = Lista
