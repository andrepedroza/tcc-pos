'use strict'
const Etiqueta = use('App/Models/Etiqueta')

class EtiquetasController {
  async index () {
    const etiquetas = await Etiqueta.all()
    return etiquetas
  }
}

module.exports = EtiquetasController
