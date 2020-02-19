const Post = require("../models/Post");

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort("-createdAt");
    return res.json(posts);
  },

  async store(req, res) {
    const post = await Post.create(req.body);
    req.io.emit("post", post);
    return res.json(post);
  },

  async delete(req, res) {
    const { _id } = req.params;
    const text = await Post.findById(_id);

    if (!text) {
      return res.status(400).json({ error: "Post não existe." });
    }

    await text.remove();

    req.io.emit("delete", text);

    return res.status(204).json();
  }
};
