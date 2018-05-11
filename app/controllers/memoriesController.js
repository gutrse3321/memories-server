const DB = require('../models/memoriesSchema')

class memoriesController {
  /**
   * 添加新的日记
   */
  static async addMemory (ctx, next) {
    const { mid, title, face, content } = ctx.request.body
    const createTime = new Date()
    if (!title) {
      ctx.throw(400, '标题不能为空哦')
    }
    if (!content) {
      ctx.throw(400, '日记内容不能为空哦')
    }

    // 填充数据
    const memory = new DB({
      mid,
      title,
      face,
      content,
      createTime
    })

    //memory.save()返回Promise
    let result = await memory.save().catch(err => {
      ctx.throw(500, '服务器出错，数据存储错误')
    })

    ctx.body = ({
      data: result
    })
  }

  /**
   * 查询所有的日记
   */
  static async getMemories(ctx) {
    const data = await DB.find()

    ctx.body = ({
      data
    })
  }

  /**
   * 根据id修改一篇日记
   */
  static async updateMemory (ctx) {
    const { title, face, content } = ctx.request.body
    // 根据请求的id修改日记
    const mid = ctx.params.id
    
    let result = await DB.findOneAndUpdate({'mid': mid}, {
      title,
      face,
      content
    }, {new: true})
    .exec()
    .catch(err => {
      ctx.throw(500, `服务器错误: ${err}`)
    })

    ctx.body = ({
      data: result
    })
  }

  /**
   * 根据id删除一篇日记
   */
  static async delMemory (ctx) {
    const mid = ctx.params.id
    let result = await DB.findOneAndRemove({'mid': mid})
    .exec()
    .catch(err => {
      ctx.throw(500, `删错失败的说:${err}`)
    })
    ctx.body = ({
      data: result
    })
  }

  // /**
  //  * 根据id查询一篇日记
  //  */
  // static async getMemory(ctx) {
  //   const mid = ctx.params.id
  //   let result = await DB.find({'mid': mid}).catch(err => {
  //     ctx.throw(500, '服务器内部错误，没有查询到呢...')
  //   })
  
  //   ctx.body = ({
  //     data: result
  //   })
  // }
}

exports = module.exports = memoriesController
