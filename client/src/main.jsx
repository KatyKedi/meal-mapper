import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
const colors = {
  brand: {
    900: '#C03221',
    800: '#F2D0A4',
    700: '#545E75',
    600: 'white'
  },
}
const theme = extendTheme({ colors })

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import MyRecipes from './pages/MyRecipes.jsx'
import ShoppingList from './pages/ShoppingList.jsx';
import MealPlan from './pages/MealPlan.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/shopping',
        element: <ShoppingList />
      }, {
        path: '/meal-plans',
        element: <MealPlan />
      }, {
        path: '/my-recipes',
        element: <MyRecipes />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}> 
    <RouterProvider router={router} />
  </ChakraProvider>
)