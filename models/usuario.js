const Sequelize = require('sequelize')
const connection = require('../database/database')
const Tarefa = require('./tarefa')

const Usuario = connection.define('usuarios', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Usuario
