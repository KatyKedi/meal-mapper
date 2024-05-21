const { Schema, model }= require('mongoose');

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
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
  }],
  ethnicity: {
    type: String
  }
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
