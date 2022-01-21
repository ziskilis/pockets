const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')

router.post('/', categoryController.createCategory)
router.get('/:id', categoryController.getAllCategory)

module.exports = router