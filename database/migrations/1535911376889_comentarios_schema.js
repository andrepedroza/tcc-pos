'use strict'

const Schema = use('Schema')

class ComentariosSchema extends Schema {
  up () {
    this.create('comentarios', (table) => {
      table.increments()
      table.string('mensagem', 100).notNullable()
      table.integer('cartao_id').notNullable().references('cartoes.id')
      table.integer('usuario_id').notNullable().references('usuarios.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('comentarios')
  }
}

module.exports = ComentariosSchema
