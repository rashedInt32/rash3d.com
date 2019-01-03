import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';

const Router = () => {
  return (
    <>
      <Route path="/" component={Home}></Route>
    </>
  )
}

export default Router;
