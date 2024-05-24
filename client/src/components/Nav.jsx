import Auth from '../utils/auth';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, Button, HStack, StackDivider } from '@chakra-ui/react'

function Nav() {
  return (
    <HStack
      divider={<StackDivider borderColor='brand.700' />}
      spacing={4}
      align='stretch'
    >
      <ChakraLink as={ReactRouterLink} to='/'>Meal Mapper</ChakraLink>
      {Auth.loggedIn() ? (
        <>
          <ChakraLink as={ReactRouterLink} to='/shopping'><Button>Shopping List</Button></ChakraLink>
          <ChakraLink as={ReactRouterLink} to='/meal-plans'><Button>Meal Plans</Button></ChakraLink>
          <ChakraLink as={ReactRouterLink} to='/my-recipes'><Button>My Recipes</Button></ChakraLink>
          <ChakraLink as={ReactRouterLink} to='/' onClick={() => Auth.logout()}><Button>Logout</Button></ChakraLink>
        </>
      ) : (
        <>
          <ChakraLink as={ReactRouterLink} to='/signup'>Signup</ChakraLink>
          <ChakraLink as={ReactRouterLink} to='/login'>Login</ChakraLink>
        </>
      )}
    </HStack>
  )
}

export default Nav;