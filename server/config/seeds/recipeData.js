const { Ingredient, IngredientQty, Recipe } = require('../../models')

module.exports = async () => {

  const chickParmIngredients = [
    {
      ingredient: await Ingredient.findOne({ name: 'Chicken Breast' }),
      quantity: '1 per person'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Marinara Sauce' }),
      quantity: '1 jar'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Mozarella Cheese' }),
      quantity: '1/4 cup per person'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Parmesan Cheese' }),
      quantity: '1/4 cup per person'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Bread Crumbs' })
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Flour' })
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Eggs' })
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Oil' })
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Black Pepper' })
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Angel Hair Pasta' }),
      quantity: '1/2 packager per 4 people'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Salt' }),
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Garlic Salt' }),
      quantity: '1 teaspoon'
    },
  ]

  const chickParmQtys = await IngredientQty.insertMany(chickParmIngredients)

  const chickParm = await Recipe.create({
    name: "Chicken Parmesan",
    ingredientQtys: chickParmQtys,
    directions: '',
    prepTime: 30,
    cookTime: 30,
    type: 'Dinner'
  })

  const shrimpTacosIngredients = [
    {
      ingredient: await Ingredient.findOne({ name: 'Shrimp' }),
      quantity: '1 pound'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Cabbage' }),
      quantity: '1 cup'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Red Onion' }),
      quantity: '1/4 onion'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Avocado' }),
      quantity: '1 avocado'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Olive Oil' })
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Lime' }),
      quantity: '4 limes'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Salt' }),
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Garlic' }),
      quantity: '2 tablespoons'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Mayonnaise' }),
      quantity: '1/3 cup'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Sriracha' }),
      quantity: '2 tablespoons'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Garlic Powder' }),
      quantity: '1/2 teaspoon'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Cumin' }),
      quantity: '1/2 teaspoon'
    },
    {
      ingredient: await Ingredient.findOne({ name: 'Flour Tortillas' })
    }
  ]

  const shrimpTacosQtys = await IngredientQty.insertMany(shrimpTacosIngredients)

  const shrimpTacos = await Recipe.create({
    name: "Shrimp Tacos",
    ingredientQtys: shrimpTacosQtys,
    directions: [
      'In a large bowl, whisk together juice of 3 limes, 2 tablespoons cilantro, 2 tablespoons garlic, 1/2 teaspoon cumin, 1 tablespoon olive oil, and season with salt. Add shrimp and cover with plactic wrap. Let marinate 20 minutes in the refrigerator.',
      'Make the slaw: in a large bowl combine 1 cup cabbage, 1/4 red onion, 1 avocado, 1/4 cup cilantro, juice of 1 lime, 1 tablespoon olive oil, and season with salt. Toss gently to combine.',
      'Make the sauce: in a small bowl, combine 1/3 cup mayonnaise, 2 tablespoons sriracha, 1/2 teaspoon garlic powder, and dash of lime juice.',
      'Preheat pan to medium heat. Grill shrimp until pink and opaque, about 2 to 3 minutes each side.',
      'Assemble tacos: spread sauce on the taco, add a few shrimp, and top with a scoop of slaw. Garnish with cilantro and serve.'
    ],
    prepTime: 30,
    cookTime: 5,
    types: ['Dinner', 'Lunch'],
    ethnicity: 'Mexican'
  })

  return [chickParm, shrimpTacos]
}