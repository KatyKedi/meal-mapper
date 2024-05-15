const { Schema, model }= require('mongoose');

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  ingredientQty: [
    {
      type: Schema.Types.ObjectId,
      ref: 'IngredientQty'
    }
  ],
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
