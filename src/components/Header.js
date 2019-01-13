import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h4><Link to="/" className="logo"></Link></h4>
          <Nav />
        </div>
     </div>
    </header>
  );
}

export default Header;
