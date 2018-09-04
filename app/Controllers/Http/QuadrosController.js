'use strict'
const Quadro = use('App/Models/Quadro')
const SysMensagem = use('App/Models/SysMensagem')

class QuadrosController {
  async index ({ request }) {
    const lixeira = request.get().lixeira && request.get().lixeira === 'true' ? 1 : 0
    const quadros = await Quadro.query().where('lixeira', lixeira).fetch()
    return quadros
  }

  async show({ params: { id } }) {
    const quadro = await Quadro.find(id)
    return quadro || { mensagem: 'Quadro não encontrado.' }
  }

  async listas({ params: { id }, request }) {
    const lixeira = request.get().lixeira && request.get().lixeira === 'true' ? 1 : 0
    const quadro = await Quadro.find(id)
    if (!quadro) return { mensagem: 'Quadro não encontrado.' }
    const listas = await quadro.listas().where('lixeira', lixeira).fetch()
    return listas.toJSON().map(({ id, nome, lixeira, posicao }) => ({ id, nome, lixeira, posicao }))
  }

  async sys({ params: { id } }) {
    const mensagens = await SysMensagem.query()
                                       .where('parente_tipo', 'QUADRO')
                                       .andWhere('parente_id', id)
                                       .fetch()
    return mensagens
  }
}

module.exports = QuadrosController
