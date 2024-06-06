import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_MY_RECIPES } from '../utils/queries'
import Recipe from '../components/Recipe.jsx'
import { SimpleGrid } from '@chakra-ui/react'

function MyRecipes() {
  const [recipes, setRecipes] = useState([])
  const { loading, data, error } = useQuery(QUERY_MY_RECIPES);

  useEffect(() => {
    if (data) {
      setRecipes(data.recipes)
    } else {
      console.log(error)
    }
  }, [data, error])

  return (
    <SimpleGrid spacing={10} columns={5}>
      {recipes && recipes.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe}/>
      ))}
    </SimpleGrid>
  );
}

export default MyRecipes;