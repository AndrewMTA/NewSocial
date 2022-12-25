const mongoose = require("mongoose");


const postSchema = mongoose.Schema({
    description: String,
  });

const Post = mongoose.model('Posts', postSchema);

module.exports = Post