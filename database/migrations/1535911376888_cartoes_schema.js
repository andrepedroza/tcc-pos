'use strict'

const Schema = use('Schema')

class CartoesSchema extends Schema {
  up () {
    this.create('cartoes', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.string('descricao', 100)
      table.integer('posicao').notNullable()
      table.integer('lista_id').notNullable().references('listas.id')
      table.boolean('lixeira').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('cartoes')
  }
}

module.exports = CartoesSchema
