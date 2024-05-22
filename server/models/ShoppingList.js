const { Schema, model } = require('mongoose');

const shoppingListSchema = new Schema({
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ingredient'
    }
  ],
  store: {
    type: String
  }
});

const ShoppingList = model('ShoppingList', shoppingListSchema);

module.exports = ShoppingList;
