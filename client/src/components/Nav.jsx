import Auth from '../utils/auth';
import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="row">
          <li className="col-3">
            <Link to="/shopping">Shopping Lists</Link>
          </li>
          <li className="col-3">
            <Link to="/meal-plans">Meal Plans</Link>
          </li>
          <li className="col-3">
            <Link to="/my-recipes">My Recipes</Link>
          </li>
          <li className="col-3">
            <a href="/" onClick={() => Auth.logout()}>Logout</a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="row">
          <li className="col-6">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="col-6">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="row">
      <h1 className='col-4'>
        <Link to="/">Home</Link>
      </h1>
      <nav className='col-8 container'>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;