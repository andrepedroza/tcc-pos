'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class NaoEncontradoException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
}

module.exports = NaoEncontradoException
