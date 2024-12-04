const Usuario = require('./usuario')
const Tarefa = require('./tarefa')

Tarefa.belongsTo(Usuario, { foreignKey: 'userId' })
Usuario.hasMany(Tarefa)

module.exports = {
  Usuario,
  Tarefa,
}
