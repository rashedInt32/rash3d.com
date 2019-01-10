import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="d-flex pt-50">
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Nav;
