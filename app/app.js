const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const router = require('./routes')

const app = new Koa()

app.use(BodyParser())

// 连接数据哭
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/DB_Memories')
const con = mongoose.connection

con.on('error', console.error.bind(console, 'Database connection error'))
con.once('open', () => {
  console.log('Database is connection !')
})

// 打印请求方法.url所花费的时间
app.use(async (ctx, next) => {
  let start = new Date()
  await next()
  let ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 路由中间件
app
  .use(router.routes())
  .use(router.allowedMethods())

// 监听端口
const port = 3000

app.on('error', (err, ctx) => {
  console.log(`server error: ${err}`)
})

app.listen(port, () => {
  console.log(`Server is listend on ${port}`)
})

module.exports = app
