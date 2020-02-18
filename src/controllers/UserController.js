const User = require('../models/User');

module.exports = {
  async store (req, res) {
    const { name, email, password } = req.query;

    try {
      const user = await User.create({
        name,
        email,
        password,
      });

      return res.status(200).json(user);
    }catch(err) {
      return res.status(500).json({ error: {
        message: err
      }});
    }
  },

  async index (req, res) {
    try {
      const users = await User.find();

      return res.status(200).json(users);
    } catch(err) {
      return res.status(500).json({ error: {
        message: err
      }});
    }
  },

  async show (req, res) {
    const { email, password } = req.query;

    try {
      const user = await User.findOne({ email });

      if(!user || password !== user.password){
        return res.json({ error: 'Email ou senha inválida!' });
      }

      return res.status(200).json(user);
    } catch(err) {
      return res.status(500).json({ error: {
        message: err
      }});
    }
  }
}