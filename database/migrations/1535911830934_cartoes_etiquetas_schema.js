'use strict'

const Schema = use('Schema')

class CartoesEtiquetasSchema extends Schema {
  up () {
    this.create('cartoes_etiquetas', (table) => {
      table.increments()
      table.integer('cartao_id').notNullable().references('cartoes.id')
      table.integer('etiqueta_id').notNullable().references('etiquetas.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('cartoes_etiquetas')
  }
}

module.exports = CartoesEtiquetasSchema
