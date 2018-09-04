'use strict'
const Cartao = use('App/Models/Cartao')
const SysMensagem = use('App/Models/SysMensagem')

class CartoesController {
  async index ({ request }) {
    const { lista } = request.get()
    const lixeira = request.get().lixeira && request.get().lixeira === 'true' ? 1 : 0
    const cartoes = lista
      ? await Cartao.query().where('lista_id', lista).andWhere('lixeira', lixeira).fetch()
      : await Cartao.query().where('lixeira', lixeira).fetch()
    return cartoes
  }

  async show({ params: { id } }) {
    const cartao = await Cartao.find(id)
    return cartao || { mensagem: 'Cartão não encontrado.' }
  }

  async etiquetas({ params: { id } }) {
    const cartao = await Cartao.find(id)
    if (!cartao) return { mensagem: 'Cartão não encontrado.' }
    const etiquetas = await cartao.etiquetas().fetch()
    return etiquetas.toJSON().map(({ id, nome, cor }) => ({ id, nome, cor }))
  }

  async comentarios({ params: { id } }) {
    const cartao = await Cartao.find(id)
    if (!cartao) return { mensagem: 'Cartão não encontrado.' }
    const comentarios = await cartao.comentarios().fetch()
    return comentarios
  }

  async checklists({ params: { id } }) {
    const cartao = await Cartao.find(id)
    if (!cartao) return { mensagem: 'Cartão não encontrado.' }
    const checklists = await cartao.checklists().with('itens').fetch()
    return checklists
  }

  async sys({ params: { id } }) {
    const mensagens = await SysMensagem.query()
                                       .where('parente_tipo', 'CARTAO')
                                       .andWhere('parente_id', id)
                                       .fetch()
    return mensagens
  }
}

module.exports = CartoesController
