const { Category } = require('../../models')

module.exports = async (ingredientNames) =>
  await ingredientNames.map(async ingredient => {
    switch (ingredient.name) {
      case 'Chicken Breast', 'Beef Strips':
        return await ingredient.update({ category: await Category.findOne({ name: "Meat" }) })
      case 'Parmesan Cheese', 'Mozarella Cheese', 'Eggs':
        return await ingredient.update({ category: await Category.findOne({ name: "Dairy" }) })
      case 'Marinara Sauce', 'Mayonnaise', 'Sriracha':
        return await ingredient.update({ category: await Category.findOne({ name: "Sauces" }) })
      case 'Bread Crumbs', 'Flour', 'Sugar':
        return await ingredient.update({ category: await Category.findOne({ name: "Baking" }) })
      case 'Flour Tortillas', 'Corn Tortillas':
        return await ingredient.update({ category: await Category.findOne({ name: "Bakery" }) })
      case 'Angel Hair Pasta', 'Spaghetti', 'Fettuccine':
        return await ingredient.update({ category: await Category.findOne({ name: "Pasta" }) })
      case 'Shrimp', 'Salmon', 'Tuna':
        return await ingredient.update({ category: await Category.findOne({ name: "Seafood" }) })
      case 'Cabbage', 'Red Onion', 'Yellow Onion', 'Green Onion', 'Carrots', 'Asparagus', 'Garlic', 'Cilantro':
        return await ingredient.update({ category: await Category.findOne({ name: "Produce" }) })
      case 'Cumin', 'Black Pepper', 'Salt', 'Garlic Salt', 'Garlic Powder':
        return await ingredient.update({ category: await Category.findOne({ name: "Spices" }) })
      default:
        return await ingredient.update({ category: await Category.findOne({ name: "Other" }) })
    }
  })