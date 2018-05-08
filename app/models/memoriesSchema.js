const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MemoriesSchema = new Schema({
  mid: Number,
  title: String,
  face: Number,
  content: String
})

exports = module.exports = mongoose.model('memories', MemoriesSchema)
