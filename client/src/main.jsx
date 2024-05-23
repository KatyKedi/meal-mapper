import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyRecipes from './pages/MyRecipes'
import ShoppingList from './pages/ShoppingList';
import MealPlan from './pages/MealPlan';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
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
  <RouterProvider router={router} />
)