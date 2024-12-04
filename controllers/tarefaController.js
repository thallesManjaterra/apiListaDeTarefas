const Tarefa = require('../models/tarefa')

exports.create = (req, res, next) => {
  const titulo = req.body.titulo

  if (titulo === undefined) {
    res.status(400).json({
      mensagem: 'Título da tarefa não definido',
    })
  } else {
    Tarefa.create({
      titulo: titulo,
      userId: req.userId,
    })
      .then((tarefaCriada) => {
        res.status(201).json({
          mensagem: 'Tarefa criada com sucesso',
          tarefa: tarefaCriada,
        })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({
          mensagem: 'Erro na criacao da tarefa',
        })
      })
  }
}

exports.update = (req, res, next) => {
  const id = req.params.id
  const tarefa = req.param.tarefa
  const feita = req.params.feita

  if (tarefa === undefined || feita === undefined) {
    res.status(400).json({
      mensagem: 'Campos não definidos',
    })
  } else {
    Tarefa.update(
      {
        tarefa: tarefa,
        feita: feita,
      },
      {
        where: {
          id: id,
        },
      }
    )
      .then((tarefaAtualizada) => {
        res.status(201).json({
          mensagem: 'Tarefa alterada com sucesso',
          tarefa: tarefaAtualizada,
        })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({
          mensagem: 'Erro na alteração da tarefa',
        })
      })
  }
}

exports.delete = (req, res, next) => {
  const id = req.params.id

  Tarefa.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.status(200).json({
        mensagem: 'Tarefa excluída com sucesso',
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        mensagem: 'Erro na exclusão da Tarefa',
      })
    })
}

exports.getOne = (req, res, next) => {
  const id = req.params.id

  Tarefa.findByPk(id).then((tarefa) => {
    res.status(200).json({
      mensagem: 'Tarefa encontrada com sucesso',
      tarefa: tarefa,
    })
  })
}

exports.getAll = (req, res, next) => {
  Tarefa.findAll(
    {
      where: {
        userId: req.userId,
      },
    },
    {
      order: [['codigo', 'DESC']],
    }
  ).then((tarefasEncontradas) => {
    res.status(200).json({
      mensagem: 'Tarefas encontradas com sucesso',
      tarefas: tarefasEncontradas,
    })
  })
}
