const { Category } = require('../../models')

module.exports = async (ingredientNames) =>
  await ingredientNames.map(async ingredient => {
    switch (ingredient.name) {
      case 'Chicken Breast': case 'Beef Strips':
        return await ingredient.updateOne({ category: (await Category.findOne({ name: "Meat" }))._id })
      case 'Parmesan Cheese': case 'Mozarella Cheese': case 'Eggs':
        return await ingredient.updateOne({ category: (await Category.findOne({ name: "Dairy" }))._id })
      case 'Marinara Sauce': case 'Mayonnaise': case 'Sriracha':
        return await ingredient.updateOne({ category: (await Category.findOne({ name: "Sauces" }))._id })
      case 'Bread Crumbs': case 'Flour': case 'Sugar':
        return await ingredient.updateOne({ category: (await Category.findOne({ name: "Baking" }))._id })
      case 'Flour Tortillas': case 'Corn Tortillas':
        return await ingredient.updateOne({ category: (await Category.findOne({ name: "Bakery" }))._id })
      case 'Angel Hair Pasta': case 'Spaghetti': case 'Fettuccine':
        return await ingredient.updateOne({ category: (await Category.findOne({ name: "Pasta" }))._id })
      case 'Shrimp': case 'Salmon': case 'Tuna':
        return await ingredient.updateOne({ category: (await Category.findOne({ name: "Seafood" }))._id })
      case 'Cabbage': case 'Red Onion': case 'Avocado': case 'Yellow Onion': case 'Green Onion': case 'Carrots': case 'Asparagus': case 'Garlic': case 'Cilantro': case 'Lime':
        return await ingredient.updateOne({ category: (await Category.findOne({ name: "Produce" }))._id })
      case 'Cumin': case 'Black Pepper': case 'Salt': case 'Garlic Salt': case 'Garlic Powder':
        return await ingredient.updateOne({ category: (await Category.findOne({ name: "Spices" }))._id })
      default:
        return await ingredient.updateOne({ category: (await Category.findOne({ name: "Other" }))._id })
    }
  })