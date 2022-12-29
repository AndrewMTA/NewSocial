const mongoose = require("mongoose");
const Comment = require("./Comment");
const PostLike = require("./PostLike");

const PostSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required:true
    },
    description: {
      type: String,
      required: true,
      maxLength: [10000, "Must be no more than 10000 characters"],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    commentCount: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

PostSchema.pre("remove", async function (next) {
  await Comment.deleteMany({ postId: this._id });
  await PostLike.deleteMany({ postId: this._id });
  next();
});

const Post = mongoose.model('Posts', PostSchema);

module.exports = Post
