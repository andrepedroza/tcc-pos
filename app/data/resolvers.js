'use strict'
const NaoEncontradoException = use('App/Exceptions/NaoEncontradoException')
const [
  Usuario, Quadro, Lista,
  Cartao, Checklist, ChecklistItem,
  Comentario, Etiqueta, SysMensagem
] = [
  use('App/Models/Usuario'), use('App/Models/Quadro'),
  use('App/Models/Lista'), use('App/Models/Cartao'),
  use('App/Models/CheckList'), use('App/Models/ChecklistItem'),
  use('App/Models/Comentario'), use('App/Models/Etiqueta'),
  use('App/Models/SysMensagem'),
]

const resolvers = {
  Query: {
    async usuario (_, { id }) {
      const usuario = await Usuario.find(id)
      if (!usuario) throw new NaoEncontradoException('Usuário não Encontrado')
      return usuario.toJSON()
    },
    async quadros (_, { usuarioId }) {
      let quadros
      if (!usuarioId) { quadros = await Quadro.all() }
      else { quadros = await Quadro.query().where('usuario_id', usuarioId).fetch() }
      return quadros.toJSON()
    },
    async quadro (_, { id }) {
      const quadro = await Quadro.find(id)
      if (!quadro) throw new NaoEncontradoException('Quadro não Encontrado')
      return quadro.toJSON()
    },
    async listas (_, { quadroId }) {
      let listas
      if (!quadroId) { listas = await Lista.all() }
      else { listas = await Lista.query().where('quadro_id', quadroId).fetch() }
      return listas.toJSON()
    },
    async cartoes (_, { listaId }) {
      let cartoes
      if (!listaId) { cartoes = await Cartao.all() }
      else { cartoes = await Cartao.query().where('lista_id', listaId).fetch() }
      return cartoes.toJSON()
    },
    async cartao (_, { id }) {
      const cartao = await Cartao.find(id)
      if (!cartao) throw new NaoEncontradoException('Cartão não Encontrado')
      return cartao.toJSON()
    },
    async etiquetas () {
      const etiquetas = await Etiqueta.all()
      return etiquetas.toJSON()
    }
  },
  Usuario: {
      async quadros (usuario, { lixeira }) {
        const quadros = await Quadro.query()
                                    .where('usuario_id', usuario.id)
                                    .andWhere('lixeira', lixeira >> 0)
                                    .fetch()
        return quadros.toJSON()
      }
  },
  Quadro: {
    async usuario (quadro) {
      const usuario = await Usuario.find(quadro.usuario_id)
      return usuario.toJSON()
    },
    async listas (quadro, { lixeira }) {
      const listas = await Lista.query()
                                .where('quadro_id', quadro.id)
                                .andWhere('lixeira', lixeira >> 0)
                                .fetch()
      return listas.toJSON()
    },
    async sys (quadro) {
      const sys = await SysMensagem.query().where('parente_tipo', 'QUADRO').andWhere('parente_id', quadro.id).fetch()
      return sys.toJSON()
    }
  },
  Lista: {
    async quadro (lista) {
      const quadro = await Quadro.find(lista.quadro_id)
      return quadro.toJSON()
    },
    async cartoes (lista, { lixeira }) {
      const cartoes = await Cartao.query()
                                  .where('lista_id', lista.id)
                                  .andWhere('lixeira', lixeira >> 0)
                                  .fetch()
      return cartoes.toJSON()
    }
  },
  Cartao: {
    async lista (cartao) {
      const lista = await Lista.find(cartao.lista_id)
      return lista.toJSON()
    },
    async etiquetas (cartaoJSON) {
      const cartao = new Cartao(); cartao.newUp(cartaoJSON)
      const etiquetas = await cartao.etiquetas().fetch()
      return etiquetas.toJSON()
    },
    async checklists (cartao) {
      const checklists = await Checklist.query().where('cartao_id', cartao.id).fetch()
      return checklists.toJSON()
    },
    async comentarios (cartao) {
      const comentarios = await Comentario.query().where('cartao_id', cartao.id).fetch()
      return comentarios.toJSON()
    },
    async sys (cartao) {
      const sys = await SysMensagem.query().where('parente_tipo', 'CARTAO').andWhere('parente_id', cartao.id).fetch()
      return sys.toJSON()
    }
  },
  Checklist: {
    async cartao (checklist) {
      const cartao = await Cartao.find(checklist.cartao_id)
      return cartao.toJSON()
    },
    async itens (checklist) {
      const itens = await ChecklistItem.query().where('checklist_id', checklist.id).fetch()
      return itens.toJSON()
    }
  },
  Comentario: {
    async usuario (comentario) {
      const usuario = await Usuario.find(comentario.usuario_id)
      return usuario.toJSON()
    }
  },
  SysMensagem: {
    criadoEm ({criado_em}) { return criado_em }
  }
}

module.exports = resolvers
