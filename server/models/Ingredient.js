const { Schema, model } = require('mongoose');

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
});

const Ingredient = model('Ingredient', ingredientSchema);

module.exports = Ingredient;