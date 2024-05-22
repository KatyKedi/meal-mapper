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

  await ingredientUpdate(ingredientNames)

  const recipes = await recipeSeeds()

  const shoppingLists = await ShoppingList.insertMany([
    {
      ingredients: ingredientNames.filter((ingredient, index) => index % 2 === 0),
      store: 'Walmart'
    },
    {
      ingredients: ingredientNames.filter((ingredient, index) => index % 2 !== 0),
      store: 'Target'
    }
  ])

  const mealPlans = await MealPlan.insertMany([
    {
      recipes: [recipes[0]],
      date: '2024/05/30'
    },
    {
      recipes: [recipes[1]],
      date: '2024/05/31'
    }
  ])

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
