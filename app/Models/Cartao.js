'use strict'

const Model = use('Model')

class Cartao extends Model {
  static get table () { return 'cartoes' }
  static get hidden () { return ['created_at', 'updated_at'] }

  getLixeira (lixeira) { return !!lixeira }
  etiquetas () {
    return this.belongsToMany('App/Models/Etiqueta', 'cartao_id')
               .pivotTable('cartoes_etiquetas')
  }
  comentarios () { return this.hasMany('App/Models/Comentario') }
  checklists () { return this.hasMany('App/Models/Checklist') }
}

module.exports = Cartao
