const Category = require("../models/Category");
const myMongo = require('mongoose-serverless');

module.exports = {
  async index( req, res ) {

    try {
      await myMongo.connectToDatabase(process.env.DATABASE_URL);
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

    await myMongo.connectToDatabase(process.env.DATABASE_URL);

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

  }
}