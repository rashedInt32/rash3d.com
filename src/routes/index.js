import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';

const RouterComponent = () => {
  return (
    <Switch>
      <Route path="/portfolio" name="Portfolio" render={(props) => <Portfolio {...props}/>}></Route>
      <Route path="/contact" name="Contact" render={(props) => <Contact {...props}/>}></Route>
      <Route path="/about" name="About" render={(props) => <About {...props} />}></Route>
      <Route path="/" name="Home" render={(props) => <Home {...props}/>}></Route>
    </Switch>
  )
}

export default RouterComponent;
