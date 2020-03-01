const Post = require("../models/Post");

module.exports = {
  async index( req, res ) {

    try {
      const posts = await Post.find();

      console.log('teste')
      return res.send(posts);
    } catch (err) {
      return res.status(500).json({
        error: "Não foi possível recuperar os posts",
        detail: err
      })
    }

  },

  async store( req, res ) {
    const { name, content, category } = req.body;

    try {
      const post = await Post.create({
        name,
        content,
        category
      });

      return res.status(200).json(post);
    } catch (err) {
      return res.status(500).json({
        error: "Não foi possível cadastrar um post",
        detail: err
      })
    }

  },

  async showByCategory( req, res ) {
    const { id_category } = req.params;

    try {
      const posts = await Post.find({ category: { _id: id_category }}).populate('category');

      return res.send(posts);
    } catch (err) {
      return res.status(500).json({
        error: "Não foi possível recuperar os posts",
        detail: err
      })
    }

  },

  async show( req, res ) {
    const { id } = req.params;

    try {
      const posts = await Post.findById(id).populate('category');

      return res.send(posts);
    } catch (err) {
      return res.status(500).json({
        error: "Não foi possível recuperar o post",
        detail: err
      })
    }

  },
}