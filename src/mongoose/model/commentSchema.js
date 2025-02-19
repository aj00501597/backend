const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
  {
    collection: 'comments',
  }
);
const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;
