'use strict'

const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type Usuario {
    id: Int!
    nome: String!
    quadros(lixeira: Boolean): [Quadro]
  }
  type Quadro {
    id: Int!
    nome: String!
    lixeira: Boolean!
    usuario: Usuario!
    listas(lixeira: Boolean): [Lista]
    sys: [SysMensagem]
  }
  type Lista {
    id:Int!
    nome: String!
    posicao: Int!
    lixeira: Boolean!
    quadro: Quadro!
    cartoes(lixeira: Boolean): [Cartao]
  }
  type Cartao {
    id: Int!
    nome: String!
    descricao: String
    posicao: Int!
    lixeira: Boolean!
    lista: Lista!
    etiquetas: [Etiqueta]
    checklists: [Checklist]
    comentarios: [Comentario]
    sys: [SysMensagem]
  }
  type Etiqueta {
    id: Int!
    nome: String
    cor: String!
  }
  type Checklist {
    id: Int!
    nome: String!
    cartao: Cartao!
    itens: [ChecklistItem]
  }
  type ChecklistItem {
    id: Int!
    nome: String!
    feito: Boolean!
  }
  type Comentario {
    id: Int!
    mensagem: String!
    criadoEm: String!
    editadoEm: String!
    usuario: Usuario!
  }
  type SysMensagem {
    id: Int!
    mensagem: String!
    criadoEm: String!
  }
  type Query {
    usuario(id: Int!): Usuario
    quadros(usuarioId: Int): [Quadro]
    quadro(id: Int!): Quadro
    listas(quadroId: Int): [Lista]
    cartoes(listaId: Int): [Cartao]
    cartao(id: Int!): Cartao
    etiquetas: [Etiqueta]
  }
`

const resolvers = require('./resolvers')

module.exports = makeExecutableSchema({ typeDefs, resolvers })
