'use strict'
const Lista = use('App/Models/Lista')

class ListasController {
  async index ({ request }) {
    const { quadro } = request.get()
    const lixeira = request.get().lixeira && request.get().lixeira === 'true' ? 1 : 0
    const listas = quadro
      ? await Lista.query().where('quadro_id', quadro).andWhere('lixeira', lixeira).fetch()
      : await Lista.query().where('lixeira', lixeira).fetch()
    return listas
  }

  async show({ params: { id } }) {
    const lista = await Lista.find(id)
    return lista || { mensagem: 'Lista não encontrada.' }
  }

  async cartoes({ params: { id }, request }) {
    const lixeira = request.get().lixeira && request.get().lixeira === 'true' ? 1 : 0
    const lista = await Lista.find(id)
    if (!lista) return { mensagem: 'Lista não encontrada.' }
    const cartoes = await lista.cartoes().where('lixeira', lixeira).fetch()
    return cartoes.toJSON().map(({ id, nome, descricao, posicao, lixeira }) => {
      return { id, nome, descricao, posicao, lixeira }
    })
  }
}

module.exports = ListasController
