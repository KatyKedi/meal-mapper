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
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  }
});

const ShoppingList = model('ShoppingList', shoppingListSchema);

module.exports = ShoppingList;
