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
    prepTime: Int
    cookTime: Int 
    types: [String]
    ethnicity: String
  }

  type ShoppingList {
    _id: ID
    ingredients: [Ingredient]
    store: String
  }

  type MealPlan {
    _id: ID
    recipes: [Recipe]
    date: String
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

  input quantityInput {
    ingredient: ID
    quantity: String
  }

  type Query {
    user: User
    categoryByName(name: String!): Category
    categories: [Category]
    ingredientByName(name: String!): Ingredient
    ingredients: [Ingredient]
    recipeByName(name: String!): Recipe
    recipes: [Recipe]
    shoppingLists: [ShoppingList]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addCategory(name: String!): Category
    addIngredient(name: String!, category: ID!): Ingredient
    addIngredientQty(ingredient: ID!, quantity: String!): IngredientQty
    addRecipe(name: String!, quantities: [quantityInput]!, directions: [String]!, prepTime: Int, cookTime: Int, types: [String], ethnicity: String): Recipe
    addShoppingList(ingredients: [ID]!, store: String): ShoppingList
    addMealPlan(recipes: [ID]!, date: String!): MealPlan
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateCategory(_id: ID!, name: String!): Category
    updateIngredient(_id: ID!, name: String!, category: ID!): Ingredient
    updateRecipe(_id: ID!, name: String!, quantities: [quantityInput]!, directions: [String]!, prepTime: Int, cookTime: Int, types: [String], ethnicity: String): Recipe
    updateShoppingList(_id: ID!, ingredients: [ID]!, store: String): ShoppingList
    updateMealPlan(_id: ID!, recipes: [ID]!, date: String!): MealPlan
    deleteCategory(_id: ID!): Category
    deleteIngredient(_id: ID!): Ingredient
    deleteRecipe(_id: ID!): Recipe
    deleteShoppingList(_id: ID!): ShoppingList
    deleteMealPlan(_id: ID!): MealPlan
  }
`;

module.exports = typeDefs;
