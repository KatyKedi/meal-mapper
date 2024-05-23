import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation addRecipe($name: String!, $description: String, $quantities: [quantityInput]!, $directions: [String]!, $prepTime: Int, $cookTime: Int, $types: [String]) {
    addOrder(name: $name, description: $description, quantities: $quantities, directions: $directions, prepTime: $prepTime, cookTime: $cookTime, types: $types) {
      name
      description
      ingredientQtys {
        ingredient
        quantity
      }
      directions
      prepTime
      cookTime
      types
    }
  }
`;

export const ADD_LIST = gql`
  mutation addShoppingList($store: String!, $ingredients: [Ingredient]!) {
    addOrder(store: $store, ingredients: $ingredients) {
      store
      ingredients {
        name
        category {
          name
        }
      }
    }
  }
`;

export const ADD_PLAN = gql`
  mutation addMealPlan($date: String!, $recipes: [Recipe]!) {
    addOrder(date: $date, recipes: $recipes) {
      date
      recipes {
        name
        ingredientQtys {
          ingredient {
            name
          }
        }
      }
    }
  }
`;

export const UPDATE_RECIPE = gql`
  mutation updateRecipe($id: ID!, $name: String!, $description: description, $quantities: [quantityInput]!, $directions: [String]!, $prepTime: Int, $cookTime: Int, $types: [String]) {
    updateRecipe(_id: $id, name: $name, description: $description, quantities: $quantities, directions: $directions, prepTime: $prepTime, cookTime: $cookTime, types: $types) {
      _id
      name
      ingredientQtys {
        ingredient {
          name
        }
        quantity
      }
      directions
      types
      prepTime
      cookTime
      ethnicity
    }
  }
`

export const UPDATE_LIST = gql`
  mutation updateShoppingList($id: ID!, $store: String!, $ingredients: [Ingredient]!) {
    updateShoppingList(_id: $id, store: $store, ingredients: $ingredients) {
      _id
      store
      ingredients {
        name
        category {
          name
        }
      }
    }
  }
`

export const UPDATE_PLAN = gql`
  mutation updateMealPlan($id: ID!, $date: String!, $recipes: [Recipe]!) {
    updateShoppingList(_id: $id, date: $date, recipes: $recipes) {
      _id
      date
      recipes {
        name
        description
      }
    }
  }
`

export const DELETE_RECIPE = gql`
  mutation deleteRecipe($id: ID!) {
    deleteRecipe(_id: $id) {
      name
      _id
    }
  }
`

export const DELETE_LIST = gql`
  mutation deleteShoppingList($id: ID!) {
    deleteShoppingList(_id: $id) {
      store
      _id
    }
  }
`

export const DELETE_PLAN = gql`
  mutation deleteMealPlan($id: ID!) {
    deleteMealPlan(_id: $id) {
      date
      _id
    }
  }
`