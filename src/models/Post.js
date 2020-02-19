const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    text: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", PostSchema);
