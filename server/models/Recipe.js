const { Schema, model }= require('mongoose');

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  ingredientQtys: [
    {
      type: Schema.Types.ObjectId,
      ref: 'IngredientQty'
    }
  ],
  directions: [{
    type: String,
    required: true
  }],
  prepTime: {
    type: Number
  },
  cookTime: {
    type: Number
  },
  types: [{
    type: String
  }]
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
