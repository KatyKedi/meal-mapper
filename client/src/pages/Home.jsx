import { useQuery } from '@apollo/client'
import { QUERY_RECIPES } from '../utils/queries'
import Recipe from '../components/Recipe.jsx'
import Search from '../components/Search.jsx'
import { SimpleGrid, Flex } from '@chakra-ui/react'

function Home() {
  const { data, error } = useQuery(QUERY_RECIPES);
  let recipes;

  if (data) {
    recipes = data.recipes
  } else {
    console.log(error)
  }

  return (
    <>
      <Search />
      <SimpleGrid spacing={10} columns={5} mx={6}>
        {recipes && recipes.map((recipe) => (
          <Recipe key={recipe._id} recipe={recipe} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Home;