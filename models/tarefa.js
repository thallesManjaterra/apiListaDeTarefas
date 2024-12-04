const Sequelize = require('sequelize')
const connection = require('../database/database')
const Usuario = require('./usuario')

const Tarefa = connection.define('tarefas', {
  codigo: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  feita: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
})

module.exports = Tarefa
