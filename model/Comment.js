const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    parent: {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    },
    children: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ]
  },
  { timestamps: true }
);

CommentSchema.post("remove", async function (res, next) {
  const comments = await this.model("Comment").find({ parent: this._id });

  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    await comment.remove();
  }

  next();
});

const Comment = mongoose.model("Comments", CommentSchema);

module.exports = Comment;
