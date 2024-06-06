import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_RECIPES } from '../utils/queries'
import Recipe from '../components/Recipe.jsx'
import Search from '../components/Search.jsx'
import { SimpleGrid, Flex } from '@chakra-ui/react'

function Home() {
  const [recipes, setRecipes] = useState([])
  const { loading, data, error } = useQuery(QUERY_RECIPES);

  useEffect(() => {
    if (data) {
      setRecipes(data.recipes)
    } else {
      console.log(error)
    }
  }, [data, error])

  return (
    <>
      <Search />
      {loading ? (
        <p>Loading</p>
      ) : (
        <SimpleGrid spacing={10} columns={5} mx={6}>
          {recipes && recipes.map((recipe) => (
            <Recipe key={recipe._id} recipe={recipe} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}

export default Home;