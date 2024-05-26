const { users, login, addUser, updateUser, deleteUser } = require('./controllers/users')
const { categories, addCategory, updateCategory, deleteCategory } = require('./controllers/categories')
const { ingredients, addIngredient, updateIngredient, deleteIngredient } = require('./controllers/ingredients')
const { recipes, myRecipes, addRecipe, updateRecipe, deleteRecipe } = require('./controllers/recipes')
const { shoppingLists, addShoppingList, updateShoppingList, deleteShoppingList } = require('./controllers/lists')
const { mealPlans, addMealPlan, updateMealPlan, deleteMealPlan } = require('./controllers/plans')

const resolvers = {

  Query: { users, categories, ingredients, recipes, myRecipes, shoppingLists, mealPlans },

  Mutation: {

    login, addUser, updateUser, deleteUser,

    addCategory, updateCategory, deleteCategory,

    addIngredient, updateIngredient, deleteIngredient,

    addRecipe, updateRecipe, deleteRecipe,

    addShoppingList, updateShoppingList, deleteShoppingList,

    addMealPlan, updateMealPlan, deleteMealPlan
  }
};

module.exports = resolvers;