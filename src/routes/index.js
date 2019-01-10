import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Router = () => {
  return (
    <>
      <Route path="/" exact component={Home}></Route>
      <Route path="/portfolio" exact component={Portfolio}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/contact" exact component={Contact}></Route>
    </>
  )
}

export default Router;
