'use strict'

const Schema = use('Schema')

class ChecklistItensSchema extends Schema {
  up () {
    this.create('checklist_itens', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.boolean('feito').defaultTo(false)
      table.integer('checklist_id').notNullable().references('checklists.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('checklist_itens')
  }
}

module.exports = ChecklistItensSchema
