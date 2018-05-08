const KoaRouter = require('koa-router')
const router = KoaRouter()
const memories = require('../controllers/memoriesController')

router.get('/getMemories', memories.getMemories)

exports = module.exports = router
