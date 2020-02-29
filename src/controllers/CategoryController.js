const Category = require("../models/Category");

module.exports = {
  async index( req, res ) {

    try {
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