const { Schema, model } = require('mongoose');

const ingredientQtySchema = new Schema({
  quantity: {
    type: String
  },
  ingredient: {
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  }
});

const IngredientQty = model('IngredientQty', ingredientQtySchema);

module.exports = IngredientQty;
