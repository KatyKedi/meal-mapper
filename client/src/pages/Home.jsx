import { useQuery } from '@apollo/client'
import { QUERY_RECIPES } from '../utils/queries'
import Recipe from '../components/Recipe.jsx'
import { SimpleGrid } from '@chakra-ui/react'

function Home() {
  const { data, error } = useQuery(QUERY_RECIPES);
  let recipes;

  if (data) {
    recipes = data.recipes
  } else {
    console.log(error)
  }

  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {recipes && recipes.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe}/>
      ))}
    </SimpleGrid>
  );
}

export default Home;