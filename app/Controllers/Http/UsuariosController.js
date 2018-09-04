'use strict'
const Usuario = use('App/Models/Usuario')

class UsuariosController {
  async show({ params: { id } }) {
    const usuario = await Usuario.find(id)
    return usuario || { mensagem: 'Usuário não encontrado.' }
  }

  async quadros({ params: { id }, request }) {
    const lixeira = request.get().lixeira && request.get().lixeira === 'true' ? 1 : 0
    const usuario = await Usuario.find(id)
    if (!usuario) return { mensagem: 'Usuário não encontrado.' }
    const quadros = await usuario.quadros().where('lixeira', lixeira).fetch()
    return quadros.toJSON().map(({ id, nome, lixeira }) => ({ id, nome, lixeira }))
  }
}

module.exports = UsuariosController
