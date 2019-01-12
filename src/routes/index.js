import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Router = () => {
  return (
    <Switch>
      <Route path="/portfolio" component={Portfolio}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
  )
}

export default Router;
