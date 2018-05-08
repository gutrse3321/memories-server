const DB = require('../models/memoriesSchema')

class memoriesController {
  static async getMemories(ctx) {
    const data = DB.find()

    ctx.success({
      data
    })
  }
}

exports = module.exports = memoriesController
