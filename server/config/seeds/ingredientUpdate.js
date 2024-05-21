const { Category } = require('../../models')

module.exports = async (ingredientNames) =>
  await ingredientNames.map(async ingredient => {
    switch (ingredient.name) {
      case 'Chicken Breast', 'Beef Strips':
        return await ingredient.updateOne({ category: await Category.findOne({ name: "Meat" }) })
      case 'Parmesan Cheese', 'Mozarella Cheese', 'Eggs':
        return await ingredient.updateOne({ category: await Category.findOne({ name: "Dairy" }) })
      case 'Marinara Sauce', 'Mayonnaise', 'Sriracha':
        return await ingredient.updateOne({ category: await Category.findOne({ name: "Sauces" }) })
      case 'Bread Crumbs', 'Flour', 'Sugar':
        return await ingredient.updateOne({ category: await Category.findOne({ name: "Baking" }) })
      case 'Flour Tortillas', 'Corn Tortillas':
        return await ingredient.updateOne({ category: await Category.findOne({ name: "Bakery" }) })
      case 'Angel Hair Pasta', 'Spaghetti', 'Fettuccine':
        return await ingredient.updateOne({ category: await Category.findOne({ name: "Pasta" }) })
      case 'Shrimp', 'Salmon', 'Tuna':
        return await ingredient.updateOne({ category: await Category.findOne({ name: "Seafood" }) })
      case 'Cabbage', 'Red Onion', 'Avocado', 'Yellow Onion', 'Green Onion', 'Carrots', 'Asparagus', 'Garlic', 'Cilantro', 'Lime':
        return await ingredient.updateOne({ category: await Category.findOne({ name: "Produce" }) })
      case 'Cumin', 'Black Pepper', 'Salt', 'Garlic Salt', 'Garlic Powder':
        return await ingredient.updateOne({ category: await Category.findOne({ name: "Spices" }) })
      default:
        return await ingredient.updateOne({ category: await Category.findOne({ name: "Other" }) })
    }
  })