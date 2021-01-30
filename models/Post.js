const mongoose = require("mongoose")

const schema = mongoose.Schema({
  post: String
})

module.exports = mongoose.model("Post", schema)