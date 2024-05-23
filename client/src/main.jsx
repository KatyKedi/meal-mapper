import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

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
  <RouterProvider router={router} />
)