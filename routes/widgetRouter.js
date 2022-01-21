const Router = require('express')
const router = new Router()
const widgetController = require('../controllers/widgetController')

router.post('/', widgetController.createWidget)
router.get('/delete/:id', widgetController.deleteWidget)
router.get('/:id', widgetController.getAllWidgets)

module.exports = router