const KoaRouter = require('koa-router')
const router = KoaRouter()
const memories = require('../controllers/memoriesController')

router
  .post('/api/addMemories', memories.addMemory)
  .get('/api/getMemories', memories.getMemories)
  .get('/api/getMemory/:id', memories.getMemory)
  .delete('/api/delMemory/:id', memories.delMemory)

exports = module.exports = router
