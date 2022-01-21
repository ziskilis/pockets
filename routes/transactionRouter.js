const Router = require('express')
const router = new Router()
const transactionController = require('../controllers/transactionController')

router.post('/', transactionController.createTransaction)
router.get('/delete/:id', transactionController.deleteTransaction)
router.get('/:id', transactionController.getAll)

module.exports = router