const db = require('../connection');
const { User, Category, Ingredient, ShoppingList, MealPlan } = require('../../models');
const categoryData = require('./categoryData.json')
const ingredientData = require('./ingredientData.json')
const ingredientUpdate = require('./ingredientUpdate')
const recipeSeeds = require('./recipeData')

db.once('open', async () => {
  const database = db.db;
  const collections = await database.listCollections().toArray();
  collections.forEach(async (collection) => await database.dropCollection(collection.name));

  await Category.insertMany(categoryData)

  const ingredientNames = await Ingredient.insertMany(ingredientData)

  const ingredients = ingredientNames.map(ingredient => ingredient._id)

  await ingredientUpdate(ingredientNames)

  const recipes = await recipeSeeds()

  const shoppingListData = await ShoppingList.insertMany([
    {
      ingredients: ingredients.filter((ingredient, index) => index % 2 === 0),
      store: 'Walmart'
    },
    {
      ingredients: ingredients.filter((ingredient, index) => index % 2 !== 0),
      store: 'Target'
    }
  ])

  const shoppingLists = shoppingListData.map(list => list._id)

  const mealPlanData = await MealPlan.insertMany([
    {
      recipes: [recipes[0]],
      date: '2024/05/30'
    },
    {
      recipes: [recipes[1]],
      date: '2024/05/31'
    }
  ])

  const mealPlans = mealPlanData.map(list => list._id)

  const user = await User.create({
    firstName: 'Dizzy',
    lastName: 'Dog',
    email: 'dizzy@dog.com',
    password: 'password12345',
    recipes,
    shoppingLists,
    mealPlans
  });

  console.log(user)

  console.log('Seeded complete');

  process.exit();
});
