import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="d-flex nav">
      <li>
        <NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">About</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default Nav;
