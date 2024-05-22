const db = require('../connection');
const { User, Category, Ingredient, ShoppingList } = require('../../models');
const categoryData = require('./categoryData.json')
const ingredientData = require('./ingredientData.json')
const ingredientUpdate = require('./ingredientUpdate')
const recipeSeeds = require('./recipeData')

db.once('open', async () => {
  const database = db.db;
  const collections = await database.listCollections().toArray();
  collections
    .map((collection) => collection.name)
    .forEach(async (collectionName) => {
      database.dropCollection(collectionName);
    });

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

  const user = await User.create({
    email: 'kvincent@instructors.2u.com',
    password: 'password12345',
    recipes,
    shoppingLists
  });

  console.log(user)

  console.log('Seeded complete');

  process.exit();
});
