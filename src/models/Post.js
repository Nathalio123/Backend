const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
});

module.exports = model('Post', PostSchema);