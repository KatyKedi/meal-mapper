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
  directions: {
    type: String,
    required: true
  },
  prepTime: {
    type: Integer
  },
  cookTime: {
    type: Integer
  },
  type: {
    type: String
  }
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
