import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Provider } from 'react-redux';
// import store from './utils/store';

import Nav from './components/Nav';
import { Box } from '@chakra-ui/react'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        {/* <Provider store={store}> */}
          <Box h='calc(100vh)'>
            <Nav />
            <Outlet /> 
          </Box>
        {/* </Provider> */}
    </ApolloProvider>
  );
}

export default App;