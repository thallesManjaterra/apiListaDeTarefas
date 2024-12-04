const express = require('express')
const router = express.Router()

const TarefaController = require('../controllers/tarefaController')
const checkAuth = require('../middleware/checkAuth')

router.post('/', checkAuth, TarefaController.create)
router.put('/:id', checkAuth, TarefaController.update)
router.delete('/:id', checkAuth, TarefaController.delete)
router.get('/', checkAuth, TarefaController.getAll)
router.get('/:id', checkAuth, TarefaController.getOne)

module.exports = router
