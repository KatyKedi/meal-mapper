const { User, Category, Ingredient, IngredientQty, Recipe, ShoppingList, MealPlan } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {

  Query: {
    users: async () => await User.find().select('-email, -password'),

    categories: async () => await Category.find(),

    ingredients: async () => await Ingredient.find().populate('category'),

    recipes: async () => {
      return await Recipe.find().populate({ path: 'ingredientQtys', populate: { path: 'ingredient', populate: 'category' } })
    },

    myRecipes: async (paret, args, context) => {
      if (context.user) {
        const user = await User
          .findById(context.user._id)
          .populate({path: 'recipes', populate: { path: 'ingredientQtys', populate: 'ingredient'}})
          console.log(user)
        return user.recipes
      }
      throw AuthenticationError;
    },

    shoppingLists: async (paret, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({path: 'shoppingLists', populate: 'ingredients'})
        return user.shoppingLists
      }
      throw AuthenticationError;
    },

    mealPlans: async (paret, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({path: 'mealPlans', populate: 'recipes'})
        return user.mealPlans
      }
      throw AuthenticationError;
    }
  },

  Mutation: {

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    addCategory: async (parent, args) => {
      if (context.user) {
        return await Category.create(args)
      }
      throw AuthenticationError;
    },

    addIngredient: async (parent, args) => {
      if (context.user) {
        return await Ingredient.create(args)
      }
      throw AuthenticationError;
    },

    addIngredientQty: async (parent, args) => {
      if (context.user) {
        return await IngredientQty.create(args)
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

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw AuthenticationError;
    },

    updateCategory: async (parent, { _id, name }) => {
      if (context.user) {
        return await Category.findByIdAndUpdate(_id, { name }, { new: true })
      }
      throw AuthenticationError;
    },

    updateIngredient: async (parent, args) => {
      if (context.user) {
        const { _id, ...ingredientData } = args
        return await Ingredient.findByIdAndUpdate(_id, ingredientData, { new: true }).populate('category')
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

    updateShoppingList: async (parent, args) => {
      if (context.user) {
        const { _id, ...list } = args
        return await ShoppingList.findByIdAndUpdate(_id, list, { new: true }).populate({ path: 'ingredients', populate: 'category' })
      }
      throw AuthenticationError;
    },

    updateMealPlan: async (parent, args) => {
      if (context.user) {
        const { _id, ...plan } = args
        return await MealPlan.findByIdAndUpdate(_id, plan, { new: true }).populate('recipes')
      }
      throw AuthenticationError;
    },

    deleteCategory: async (parent, { _id }) => {
      if (context.user) {
        return await Category.findByIdAndDelete(_id)
      }
      throw AuthenticationError;
    },

    deleteIngredient: async (parent, { _id }) => {
      if (context.user) {
        return await Ingredient.findByIdAndDelete(_id)
      }
      throw AuthenticationError;
    },

    deleteRecipe: async (parent, { _id }) => {
      if (context.user) {
        return await Recipe.findByIdAndDelete(_id)
      }
      throw AuthenticationError;
    },

    deleteShoppingList: async (parent, { _id }) => {
      if (context.user) {
        return await ShoppingList.findByIdAndDelete(_id)
      }
      throw AuthenticationError;
    },

    deleteMealPlan: async (parent, { _id }) => {
      if (context.user) {
        return await MealPlan.findByIdAndDelete(_id)
      }
      throw AuthenticationError;
    },
  }
};

module.exports = resolvers;