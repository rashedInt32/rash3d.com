import React from 'react';

const Layout = ({ children }) => {
  const style = {
    animationDuration: '2s'
  }
  return (
    <div className="react-transition fade-in" style={style}>
      {children}
    </div>
  );
}

export default Layout;
