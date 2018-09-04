'use strict'

const Schema = use('Schema')

class EtiquetasSchema extends Schema {
  up () {
    this.create('etiquetas', (table) => {
      table.increments()
      table.string('nome', 45)
      table.string('cor', 6).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('etiquetas')
  }
}

module.exports = EtiquetasSchema
