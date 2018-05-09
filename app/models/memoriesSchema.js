const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const MemoriesSchema = new Schema({
  mid: Number,
  title: String,
  face: {
    type: Number,
    default: 1
  },
  content: String,
  createTime: Date
})

// 必须先set后get
MemoriesSchema.set('toJSON', { getters: true, virtuals: true })
MemoriesSchema.set('toObject', { getters: true, virtuals: true })
MemoriesSchema.path('createTime').get((val) => {
  return moment(val).format('YYYY MMMM Do, h:mm:ss a')
})
// 通过 exports = module.exports 让 exports 重新指向 module.exports
exports = module.exports = mongoose.model('memories', MemoriesSchema)
