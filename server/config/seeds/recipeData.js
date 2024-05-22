const { Ingredient, IngredientQty, Recipe } = require('../../models')

module.exports = async () => {

  const chickParmIngredients = [
    {
      ingredient: (await Ingredient.findOne({ name: 'Chicken Breast' }))._id,
      quantity: '1 per person'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Marinara Sauce' }))._id,
      quantity: '1 jar'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Mozarella Cheese' }))._id,
      quantity: '1/4 cup per person'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Parmesan Cheese' }))._id,
      quantity: '1/4 cup per person'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Bread Crumbs' }))._id
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Flour' }))._id
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Eggs' }))._id
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Olive Oil' }))._id
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Black Pepper' }))._id
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Angel Hair Pasta' }))._id,
      quantity: '1/2 packager per 4 people'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Salt' }))._id,
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Garlic Salt' }))._id,
      quantity: '1 teaspoon'
    },
  ]

  const chickParmQtys = await IngredientQty.insertMany(chickParmIngredients)
  const chickParmQtyIds = chickParmQtys.map(qty => qty._id)

  const chickParm = await Recipe.create({
    name: "Chicken Parmesan",
    ingredientQtys: chickParmQtyIds,
    directions: [
      'Preheat the oven to 450 degrees.',
      'Pound chicken to an even thickness.',
      'Salt and pepper the chicken on both sides.',
      'Grab three large shallow bowls. Add flour to one bowl and two eggs to another bowl. In the third bowl, mix bread crumbs with some grated parmesan.',
      'Bread the chicken: Cover the chicken in flour, then dip in the eggs, then coat in the bread crumb mixture.',
      'Fry the chicken: heat olive oil on medium high in a large skillet. Cook the chicken about 2 minutes each side.',
      'Transfer the chicken to a baking dish. Top each breast with marinara sauce and an equal ratio of mozzarella to parmesan cheese.',
      'Bake the chicken about 15 to 20 minutes.'
    ],
    prepTime: 30,
    cookTime: 30,
    types: ['Dinner']
  })

  const shrimpTacosIngredients = [
    {
      ingredient: (await Ingredient.findOne({ name: 'Shrimp' }))._id,
      quantity: '1 pound'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Cabbage' }))._id,
      quantity: '1 cup'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Red Onion' }))._id,
      quantity: '1/4 onion'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Avocado' }))._id,
      quantity: '1 avocado'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Olive Oil' }))._id
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Lime' }))._id,
      quantity: '4 limes'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Salt' }))._id,
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Garlic' }))._id,
      quantity: '2 tablespoons'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Mayonnaise' }))._id,
      quantity: '1/3 cup'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Sriracha' }))._id,
      quantity: '2 tablespoons'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Garlic Powder' }))._id,
      quantity: '1/2 teaspoon'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Cumin' }))._id,
      quantity: '1/2 teaspoon'
    },
    {
      ingredient: (await Ingredient.findOne({ name: 'Flour Tortillas' }))._id
    }
  ]

  const shrimpTacosQtys = await IngredientQty.insertMany(shrimpTacosIngredients)
  const shrimpTacosQtyIds = shrimpTacosQtys.map(qty => qty._id)

  const shrimpTacos = await Recipe.create({
    name: "Shrimp Tacos",
    ingredientQtys: shrimpTacosQtyIds,
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

  return [chickParm._id, shrimpTacos._id]
}