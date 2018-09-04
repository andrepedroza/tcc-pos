'use strict'

const Model = use('Model')

class SysMensagem extends Model {
  static get table () { return 'sys_mensagens'}
  static get computed () { return ['criado_em'] }
  static get hidden () { return ['created_at', 'updated_at', 'parente_tipo', 'parente_id'] }
  static castDates (_, value) { return value.locale('pt-br').calendar() }

  getCriadoEm ({ created_at }) { return created_at }
}

module.exports = SysMensagem
