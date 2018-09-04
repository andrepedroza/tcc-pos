'use strict'

const Schema = use('Schema')

class QuadrosSchema extends Schema {
  up () {
    this.create('quadros', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.boolean('lixeira').defaultTo(false)
      table.integer('usuario_id').notNullable().references('usuarios.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('quadros')
  }
}

module.exports = QuadrosSchema
