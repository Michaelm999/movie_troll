const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: String,
    plot: String,
    creator: {type: mongoose.Schema.Types.Object, ref: "User"},
    comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment"
        }
    ]
});

postSchema.pre("findOne", function() {
  this.populate("comments")
})

module.exports = mongoose.model("Post",postSchema)
