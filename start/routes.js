'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const GraphqlAdonis = use('ApolloServer')
const schema = require('../app/data/schema')

Route
  .group(() => {
    Route.get('usuarios/:id', 'UsuariosController.show')
    Route.get('usuarios/:id/quadros', 'UsuariosController.quadros')
    Route.resource('quadros', 'QuadrosController').only(['index', 'show'])
    Route.get('quadros/:id/listas', 'QuadrosController.listas')
    Route.get('quadros/:id/sys', 'QuadrosController.sys')
    Route.resource('listas', 'ListasController').only(['index', 'show'])
    Route.get('listas/:id/cartoes', 'ListasController.cartoes')
    Route.resource('cartoes', 'CartoesController').only(['index', 'show'])
    Route.get('cartoes/:id/etiquetas', 'CartoesController.etiquetas')
    Route.get('cartoes/:id/comentarios', 'CartoesController.comentarios')
    Route.get('cartoes/:id/checklists', 'CartoesController.checklists')
    Route.get('cartoes/:id/sys', 'CartoesController.sys')
    Route.get('etiquetas', 'EtiquetasController.index')
  })
  .prefix('rest')

Route.route('/graphql', ({ request, response }) => {
  return GraphqlAdonis.graphql({ schema }, request, response)
}, ['GET', 'POST'])

Route.get('/graphiql', ({ request, response }) => {
    return GraphqlAdonis.graphiql({ endpointURL: '/graphql' }, request, response)
})
