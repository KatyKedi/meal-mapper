const typeDefs = `
  type Category {
    _id: ID
    name: String
  }

  type Ingredient {
    _id: ID
    name: String
    category: Category
  }

  type IngredientQty {
    _id: ID
    ingredient: Ingredient
    quantity: String
  }

  type Recipe {
    _id: ID
    name: String
    ingredientQtys: [IngredientQty]
    directions: [String]
    prepTime: Number
    cookTime: Number 
    types: [String]
    ethniticy: String
  }

  type ShoppingList {
    _id: ID
    ingredients: [Ingredient]
    store: String
  }

  type MealPlan {
    _id: ID
    recipe: [Recipe]
    date: Date
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    recipes: [Recipe]
    shoppingLists: [ShoppingList]
    mealPlans: [MealPlan]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(_id: ID!): User
    categoryByName(name: String!): Category
    categories: [Category]
    ingredientByName(name: String!): Ingredient
    ingredients: [Ingredient]
    recipeByName(name: String!)
    recipes: [Recipe]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addIngredient(name: String!, category: String!): Ingredient
    addIngredientQty(ingredient: Ingredient!, quantity: String!): IngredientQty
    addRecipe(name: String!, ingredients: [IngredientQty]!, directions: [String]!, prepTime: Number, cookTime: Number, types: [String], ethnicity: String): Recipe
    addShoppingList(ingredients: [Ingredient]!, store: String): ShoppingList
    addMealPlan(recipes: [Recipe]!, date: Date!): MealPlan
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateRecipe(_id: ID!, name: String!, ingredients: [IngredientQty]!, directions: [String]!, prepTime: Number, cookTime: Number, types: [String], ethnicity: String): Recipe
    updateShoppingList(_id: ID!, ingredients: [Ingredient]!, store: String): ShoppingList
    updateMealPlan(_id: ID!, recipes: [Recipe]!, date: Date!): MealPlan
    deleteRecipe(_id: ID!): Recipe
    deleteShoppingList(_id: ID!): ShoppingList
    deleteMealPlan(_id: ID!): MealPlan
  }
`;

module.exports = typeDefs;
