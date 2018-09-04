'use strict'

const Schema = use('Schema')

class ChecklistsSchema extends Schema {
  up () {
    this.create('checklists', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.integer('cartao_id').notNullable().references('cartoes.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('checklists')
  }
}

module.exports = ChecklistsSchema
