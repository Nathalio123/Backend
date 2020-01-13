const Category = require("../models/Category");

module.exports = {
  async index( req, res ) {

  },

  async store( req, res ) {
    const { name, description } = req.body;

    try {
      const category = await Category({
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

  }
}