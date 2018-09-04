'use strict'

const Schema = use('Schema')

class SysMensagensSchema extends Schema {
  up () {
    this.create('sys_mensagens', (table) => {
      table.increments()
      table.string('mensagem', 100).notNullable()
      table.enu('parente_tipo', ['QUADRO', 'CARTAO']).notNullable()
      table.integer('parente_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sys_mensagens')
  }
}

module.exports = SysMensagensSchema
