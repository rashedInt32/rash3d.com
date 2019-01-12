import React from 'react';
import Nav from './Nav';

const Header = ({pageName}) => {
  return (
    <header className="d-flex align-items-center justify-cotnent-between">
      <div className="container">
        <h4>{pageName}</h4>
        <Nav />

      </div>
    </header>
  );
}

export default Header;
