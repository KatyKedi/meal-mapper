const db = require('../connection');
const { User, Category, Ingredient, IngredientQty, Recipe, ShoppingList } = require('../../models');
const categoryData = require('../categoryData.json')
const ingredientData = require('./ingredientData.json')
const ingredientUpdate = require('./ingredientUpdate')
const recipeSeeds = require('./recipeData')

db.once('open', async () => {

  await Category.insertMany(categoryData)

  const ingredientNames = await Ingredient.insertMany(ingredientData)

  await ingredientUpdate(ingredientNames)

  const recipes = await recipeSeeds()

  await User.create({
    email: 'kvincent@instructors.2u.com',
    password: 'password12345',
    recipes
  });

  console.log('Seeded complete');

  process.exit();
});
