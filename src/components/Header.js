import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from './Nav';

const Header = ({location}) => {
  const pathname = location.pathname.split('/').join('');

  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <header>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h4>{capitalize(pathname)}</h4>
          <Nav />
        </div>

      </div>
    </header>
  );
}

export default withRouter(Header);
