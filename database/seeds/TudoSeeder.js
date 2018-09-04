'use strict'

/*
|--------------------------------------------------------------------------
| TudoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
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

const seeds = {
  usuarios: [ { nome: 'André Pereira Pedroza' } ],
  quadros: [
    { nome: 'TCC', usuario_id: 1 },
    { nome: 'Outro Quadro', usuario_id: 1 },
    { nome: 'Mais Um', usuario_id: 1 }
  ],
  listas: [
    { nome: 'Para Fazer', posicao: 0, quadro_id: 1 },
    { nome: 'Fazendo', posicao: 1, quadro_id: 1 },
    { nome: 'Feito', posicao: 2, quadro_id: 1 },
    { nome: 'Outros', posicao: 3, quadro_id: 1 }
  ],
  cartoes: [
    { nome: 'Tarefa 1', posicao: 0, lista_id: 3 },
    { nome: 'Tarefa 2', posicao: 0, lista_id: 2 },
    {
      nome: 'Tarefa 3',
      posicao: 0,
      lista_id: 1,
      descricao: 'Tarefa necessária para os bons andamentos do projeto...'
    },
    { nome: 'Tarefa 4', posicao: 1, lista_id: 1 },
    { nome: 'Tarefa 5', posicao: 2, lista_id: 1 },
    { nome: 'Tarefa 6', posicao: 3, lista_id: 1 },
    { nome: 'Tarefa 2 Depende de Tarefa 1 para ser completada', posicao: 0, lista_id: 4 }
  ],
  checklists: [ { nome: 'Afazeres', cartao_id: 3 } ],
  checklistItens: [
    { nome: 'Fazer [1]', checklist_id: 1, feito: 1 },
    { nome: 'Fazer [2]', checklist_id: 1 },
    { nome: 'Fazer [3]', checklist_id: 1 },
    { nome: 'Fazer [4]', checklist_id: 1, feito: 1 },
    { nome: 'Fazer [5]', checklist_id: 1 }
  ],
  comentarios: [ { mensagem: 'Algum Comentario', cartao_id: 3, usuario_id: 1 } ],
  etiquetas: [
    { nome: 'Sem Prazo', cor: '3CB50A' },
    { nome: 'Alerta', cor: 'FAD800' },
    { nome: 'Urgente', cor: 'EA4646' },
    { nome: 'Revisar', cor: 'EA4646' },
    { nome: 'Prioridade', cor: 'A632DB' },
    { nome: 'Observação', cor: '0279BF' }
  ],
  sys: [
    { mensagem: 'André Pedroza criou este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou Default a este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou Para Fazer a este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou Fazendo a este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou Feito a este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou Outros a este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou Tarefa 1 a este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou Tarefa 2 a este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou Tarefa 3 a este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou Tarefa 4 a este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou Tarefa 5 a este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou Tarefa 6 a este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza moveu Tarefa 2 de Para Fazer para Fazendo.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza moveu Tarefa 1 de Para Fazer para Feito.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou Tarefa 2 Depende de Tarefa 1 para ser completada a este quadro.', parente_tipo: 'QUADRO', parente_id: 1 },
    { mensagem: 'André Pedroza adicionou este cartão a Para Fazer.', parente_tipo: 'CARTAO', parente_id: 3 },
    { mensagem: 'André Pedroza: Algum comentário', parente_tipo: 'CARTAO', parente_id: 3 },
    { mensagem: 'André Pedroza Adicionado lista de verificação a este cartão: Afazeres', parente_tipo: 'CARTAO', parente_id: 3 },
    { mensagem: 'André Pedroza adicionado o item de checklist para "Afazeres": Fazer [1].', parente_tipo: 'CARTAO', parente_id: 3 },
    { mensagem: 'André Pedroza adicionado o item de checklist para "Afazeres": Fazer [2].', parente_tipo: 'CARTAO', parente_id: 3 },
    { mensagem: 'André Pedroza adicionado o item de checklist para "Afazeres": Fazer [3].', parente_tipo: 'CARTAO', parente_id: 3 },
    { mensagem: 'André Pedroza adicionado o item de checklist para "Afazeres": Fazer [2].', parente_tipo: 'CARTAO', parente_id: 3 },
    { mensagem: 'André Pedroza adicionado o item de checklist para "Afazeres": Fazer [5].', parente_tipo: 'CARTAO', parente_id: 3 }
  ],
  cartaoEtiquetas: [5, 5, 4, 4, 2, 1, 6]
}

class TudoSeeder {
  async run () {
    await Usuario.createMany(seeds.usuarios)
    await Quadro.createMany(seeds.quadros)
    await Lista.createMany(seeds.listas)
    await Cartao.createMany(seeds.cartoes)
    await Checklist.createMany(seeds.checklists)
    await ChecklistItem.createMany(seeds.checklistItens)
    await Comentario.createMany(seeds.comentarios)
    await Etiqueta.createMany(seeds.etiquetas)
    await SysMensagem.createMany(seeds.sys)

    const cartoes = await Cartao.all()
    for (const cartao of cartoes.rows) {
      await cartao.etiquetas().attach([seeds.cartaoEtiquetas[cartao.id - 1]])
    }
  }
}

module.exports = TudoSeeder
