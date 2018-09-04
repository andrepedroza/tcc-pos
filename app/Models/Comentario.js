'use strict'

const Model = use('Model')

class Comentario extends Model {
  static get hidden () { return ['created_at', 'updated_at', 'cartao_id'] }
  static get computed () { return ['criado_em', 'editado_em'] }
  static castDates (_, value) { return value.locale('pt-br').calendar() }

  getCriadoEm({ created_at }) { return created_at }
  getEditadoEm({ updated_at }) { return updated_at }
}

module.exports = Comentario
