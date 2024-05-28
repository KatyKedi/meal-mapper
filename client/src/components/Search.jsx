import { HStack, Button, Input } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

function Search() {
  // function search() {

  // }
  return (
    <HStack m={4} justify='center'>
      <Input width='50%' placeholder='Search recipes' />
      <Button bg='brand.red' color='white' _hover={{ filter: 'brightness(1.5)' }}>Cook</Button>
      <Button bg='brand.beige' color='white' _hover={{ filter: 'brightness(1.5)' }}>Advanced Search</Button>
    </HStack>
  );
}

export default Search;