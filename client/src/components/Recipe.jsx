import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Button } from '@chakra-ui/react'

function Recipe( { recipe } ) {

  return (
    <Card bg='brand.800'>
      <CardHeader>
        <Heading size='md'>{recipe.name}</Heading>
        <Button>Favorite</Button>
      </CardHeader>
      <CardBody>
        <Text>{recipe.description}</Text>
        <CardFooter>
          <Button>View Details</Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}

export default Recipe;