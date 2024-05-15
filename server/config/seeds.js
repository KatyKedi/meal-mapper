const db = require('./connection');
const { User, Ingredient, IngredientQty, Recipe, ShoppingList } = require('../models');
const categoryData = require('./categoryData.json')
const ingredientData = require('./ingredientData.json')
const ingredientQtyData = require('./ingredientQtyData.json')

db.once('open', async () => {
  
  await Category.insertMany(categoryData)

  const ingredientNames = await Ingredient.insertMany(ingredientData)

  const ingredients = await ingredientNames.map(async ingredient => {
    switch (ingredient.name) {
      case 'Chicken Breast', 'Beef Strips':
        return await ingredient.update({ category: await Category.findOne( {name: "Meat"})})
      case 'Parmesan Cheese', 'Mozarella Cheese', 'Eggs':
        return await ingredient.update({ category: await Category.findOne( {name: "Dairy"})})
      case 'Marinara Sauce', 'Mayonnaise', 'Sriracha':
        return await ingredient.update({ category: await Category.findOne( {name: "Sauces"})})
      case 'Bread Crumbs', 'Flour', 'Sugar':
        return await ingredient.update({ category: await Category.findOne( {name: "Baking"})})
      case 'Angel Hair Pasta', 'Spaghetti', 'Fettuccine':
        return await ingredient.update({ category: await Category.findOne( {name: "Pasta"})})
      case 'Shrimp', 'Salmon', 'Tuna':
        return await ingredient.update({ category: await Category.findOne( {name: "Seafood"})})
      case 'Cabbage', 'Red Onion', 'Yellow Onion', 'Green Onion', 'Carrots', 'Asparagus', 'Garlic', 'Cilantro':
        return await ingredient.update({ category: await Category.findOne( {name: "Produce"})})
      case 'Cumin', 'Black Pepper', 'Salt', 'Garlic Salt', 'Garlic Powder':
        return await ingredient.update({ category: await Category.findOne( {name: "Spices"})})
      default:
        return await ingredient.update({ category: await Category.findOne( {name: "Other"})})
    }
  })

  const ingredientQtys = await IngredientQty.insertMany(ingredients.map(ingredient => {

  }))

  const recipes = await Recipe.insertMany()

  await User.create({
    email: 'kvincent@instructors.2u.com',
    password: 'password12345',
    recipes
  });

  console.log('Seeded complete');

  process.exit();
});
