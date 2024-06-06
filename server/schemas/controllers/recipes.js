const { User, Recipe, IngredientQty } = require('../../models')

module.exports = {
  recipes: async () => {
    return await Recipe.find().populate({ path: 'ingredientQtys', populate: { path: 'ingredient', populate: 'category' } })
  },

  myRecipes: async (parent, args, context) => {
    if (context.user) {
      const user = await User
        .findById(context.user._id)
        .populate({path: 'recipes', populate: { path: 'ingredientQtys', populate: 'ingredient'}})
        console.log(user)
      return user.recipes
    }
    throw AuthenticationError;
  },

  addRecipe: async (parent, args, context) => {
    if (context.user) {
      const quantities = await IngredientQty.insertMany(args.quantities)
      const ingredientQtys = quantities.map(quantity => quantity._id)
      const recipe = await Recipe.create({ ingredientQtys, ...args });

      await User.findByIdAndUpdate(context.user._id, { $push: { recipes: recipe } });

      return recipe;
    }
    throw AuthenticationError;
  },

  updateRecipe: async (parent, args, context) => {
    if (context.user) {
      const { _id, quantities, ...recipeData } = args

      await IngredientQty.deleteMany({ _id: { $in: (await Recipe.findById(_id)).ingredientQtys }})
      const ingredientQtys = (await IngredientQty.insertMany(args.quantities)).map(quantity => quantity._id)

      const recipe = await Recipe.findByIdAndUpdate(_id, { ingredientQtys, ...recipeData }, { new: true }).populate({ path: 'ingredientQtys', populate: { path: 'ingredient', populate: 'category' } })
      await User.findByIdAndUpdate({ _id: context.user._id, "recipes._id": recipe._id }, { $set: { recipes: recipe } });

      return recipe;
    }
    throw AuthenticationError;
  },

  deleteRecipe: async (parent, { _id }) => {
    if (context.user) {
      return await Recipe.findByIdAndDelete(_id)
    }
    throw AuthenticationError;
  }

}