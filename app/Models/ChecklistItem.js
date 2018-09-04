'use strict'

const Model = use('Model')

class ChecklistItem extends Model {
  static get table () { return 'checklist_itens' }
  static get hidden () { return ['created_at', 'updated_at'] }

  getFeito (feito) { return !!feito }

}

module.exports = ChecklistItem
