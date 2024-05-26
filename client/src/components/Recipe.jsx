import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Button, Image } from '@chakra-ui/react'

function Recipe( { recipe } ) {

  return (
    <Card key={recipe._id} bg='brand.800'>
      <CardHeader>
        <Heading size='md'>{recipe.name}</Heading>
        <Button>Favorite</Button>
      </CardHeader>
      <CardBody>
        <Image src={recipe.image} alt={recipe.name} />
        <Text>{recipe.description}</Text>
        <CardFooter>
          <Button>View Details</Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}

export default Recipe;