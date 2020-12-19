import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../img/tcff-logo-2020.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/films">
            Films
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/schedule">
            Schedule
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
