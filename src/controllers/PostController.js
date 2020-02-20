const Post = require("../models/Post");
const MongoConnection = require('../services/database');

module.exports = {
  async index( req, res ) {

    try {
      await MongoConnection.connectToDatabase(process.env.DATABASE_URL);
      const posts = await Post.find();

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

    await MongoConnection.connectToDatabase(process.env.DATABASE_URL);

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
      await MongoConnection.connectToDatabase(process.env.DATABASE_URL);
      const posts = await Post.find({ category: { _id: id_category }});

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
      await MongoConnection.connectToDatabase(process.env.DATABASE_URL);
      const posts = await Post.findById(id);

      return res.send(posts);
    } catch (err) {
      return res.status(500).json({
        error: "Não foi possível recuperar o post",
        detail: err
      })
    }

  },
}