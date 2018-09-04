'use strict'

const Schema = use('Schema')

class ListasSchema extends Schema {
  up () {
    this.create('listas', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.boolean('lixeira').defaultTo(false)
      table.integer('posicao').notNullable()
      table.integer('quadro_id').notNullable().references('quadros.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('listas')
  }
}

module.exports = ListasSchema
