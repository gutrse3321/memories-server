const KoaRouter = require('koa-router')
const router = KoaRouter()
const memories = require('../controllers/memoriesController')

router
  .post('/api/addMemory', memories.addMemory)
  .get('/api/getMemories', memories.getMemories)
  .delete('/api/delMemory/:id', memories.delMemory)
  .patch('/api/updateMemory/:id', memories.updateMemory)
  // .get('/api/getMemory/:id', memories.getMemory)

exports = module.exports = router
