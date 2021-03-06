const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  text: {
      type: String
    },
  _movieid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  commenter: {type: mongoose.Schema.Types.Object, ref: "User"}
})

CommentSchema.pre('findOne', function() {
  this.populate('_movieid')
})

module.exports = mongoose.model("Comment", CommentSchema);
