'use strict'

const Model = use('Model')

class Checklist extends Model {
  static get hidden () { return ['created_at', 'updated_at', 'cartao_id'] }

  itens () { return this.hasMany('App/Models/ChecklistItem') }
}

module.exports = Checklist
