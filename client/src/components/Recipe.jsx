import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Button, Image, Flex, VStack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import placeholder from '../images/placeholder.webp'
import tacos from '../images/shrimpTacos.jpg'

function Recipe({ recipe }) {
  function favorite() {
    console.log(recipe._id)
  }
  return (
    <Card bg='brand.beige'>
      <CardHeader >
        <Flex justify='end'>
          <StarIcon onClick={favorite} color='white' />
        </Flex>
        <Flex justify='center'>
          <Heading color='white' size='md'>{recipe.name}</Heading>
        </Flex>
      </CardHeader>
      <CardBody p={0}>
        <VStack >
          <Image boxSize='200px' src={recipe.name === 'Shrimp Tacos' ? tacos : placeholder} alt={recipe.name} rounded={'md'} />
          <Text color='white' >{recipe.description}</Text>
        </VStack>
      </CardBody>
      <CardFooter justify='center'>
        <Button color='white' bg='brand.red'>View Details</Button>
      </CardFooter>
    </Card>
  );
}

export default Recipe;