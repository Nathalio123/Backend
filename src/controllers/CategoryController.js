const Category = require("../models/Category");
const MongoConnection = require('../services/database');

module.exports = {
  async index( req, res ) {

    try {
      await MongoConnection.connectToDatabase(process.env.DATABASE_URL);
      const categories = await Category.find();

      return res.send(categories);
    } catch (err) {
      return res.status(500).json({
        error: "Não foi possível recuperar as categoria",
        detail: err
      })
    }

  },

  async store( req, res ) {
    const { name, description } = req.body;

    await MongoConnection.connectToDatabase(process.env.DATABASE_URL);

    try {
      const category = await Category.create({
        name,
        description
      });

      return res.status(200).json(category);
    } catch (err) {
      return res.status(500).json({
        error: "Não foi possível cadastrar uma categoria",
        detail: err
      })
    }

  },

  async show( req, res ) {
    console.log('passou');
    const { id } = req.params;

    await MongoConnection.connectToDatabase(process.env.DATABASE_URL);

    try {
      const category = await Category.findById(id);

      return res.status(200).json(category);
    } catch (err) {
      return res.status(500).json({
        error: "Não foi possível encontrar a categoria",
        detail: err
      })
    }

  },
}