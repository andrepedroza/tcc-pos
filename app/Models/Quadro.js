'use strict'

const Model = use('Model')

class Quadro extends Model {
  static get hidden () { return ['created_at', 'updated_at'] }

  listas () { return this.hasMany('App/Models/Lista') }
  getLixeira (lixeira) { return !!lixeira }
}

module.exports = Quadro
