const { Ingredient } = require('../../models')

module.exports = {

  ingredients: async () => await Ingredient.find(),

  addIngredient: async (parent, args) => {
    if (context.user) {
      return await Ingredient.create(args)
    }
    throw AuthenticationError;
  },

  updateIngredient: async (parent, { _id, name }) => {
    if (context.user) {
      return await Ingredient.findByIdAndUpdate(_id, { name }, { new: true })
    }
    throw AuthenticationError;
  },

  deleteIngredient: async (parent, { _id }) => {
    if (context.user) {
      return await Ingredient.findByIdAndDelete(_id)
    }
    throw AuthenticationError;
  }
}