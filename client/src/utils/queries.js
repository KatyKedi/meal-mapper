import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_INGREDIENTS = gql`
  {
    ingredients {
      _id
      name
      category {
        name
      }
    }
  }
`

export const QUERY_RECIPES = gql`
  {
    recipes {
      _id
      name
      ingredientQtys {
        ingredient {
          name
        }
        quantity
      }
      directions
      prepTime
      cookTime
      types
      ethnicity
    }
  }
`;

export const QUERY_MY_RECIPES = gql`
  {
    myRecipes {
      _id
      name
      description
      ingredientQtys {
        ingredient {
          name
        }
        quantity
      }
      directions
      prepTime
      cookTime
      types
    }
  }
`;

export const QUERY_LISTS = gql`
  {
    shoppingLists {
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
`;

export const QUERY_PLANS = gql`
  {
    mealPlans {
      _id
      date
      recipes {
        name
        description
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
    }
  }
`;
