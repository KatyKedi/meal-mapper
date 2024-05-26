import Auth from '../utils/auth';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, Button, HStack, Box, Flex, Spacer } from '@chakra-ui/react'

function Nav() {
  return (
    <Flex bg='brand.red' color='white' p={4} as={'nav'}>
      <ChakraLink as={ReactRouterLink} _hover={{ textDecoration: 'none' }} fontSize='3xl' to='/'>Meal Mapper</ChakraLink>
      <Spacer />
      <HStack spacing={4} justify='end' fontSize='xl'>
        {Auth.loggedIn() ? (
          <>
            <Box px={2} py={1} rounded={'md'} _hover={{ backdropFilter: 'brightness(2)' }}>
              <ChakraLink as={ReactRouterLink} to='/shopping'><Button>Shopping List</Button></ChakraLink>
            </Box>
            <Box px={2} py={1} rounded={'md'} _hover={{ backdropFilter: 'brightness(2)' }}>
              <ChakraLink as={ReactRouterLink} to='/meal-plans'><Button>Meal Plans</Button></ChakraLink>
            </Box>
            <Box px={2} py={1} rounded={'md'} _hover={{ backdropFilter: 'brightness(2)' }}>
              <ChakraLink as={ReactRouterLink} to='/my-recipes'><Button>My Recipes</Button></ChakraLink>
            </Box>
            <Box px={2} py={1} rounded={'md'} _hover={{ backdropFilter: 'brightness(2)' }}>
              <ChakraLink as={ReactRouterLink} to='/' onClick={() => Auth.logout()}><Button>Logout</Button></ChakraLink>
            </Box>
          </>
        ) : (
          <>
            <Box px={2} py={1} rounded={'md'} _hover={{ backdropFilter: 'brightness(2)' }}>
              <ChakraLink as={ReactRouterLink} to='/signup'>Signup</ChakraLink>
            </Box>
            <Box px={2} py={1} rounded={'md'} _hover={{ backdropFilter: 'brightness(2)' }}>
              <ChakraLink as={ReactRouterLink} to='/login'>Login</ChakraLink>
            </Box>
          </>
        )}
      </HStack>
    </Flex>
  )
}

export default Nav;