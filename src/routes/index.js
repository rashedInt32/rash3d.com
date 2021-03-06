import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getProjects } from '../services/projectService';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';

class RouterComponent extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    this.setState({ projects: getProjects() });
  };

  render() {
    const { projects } = this.state;
    return <Switch>
        <Route path="/portfolio" render={props => <Portfolio projects={projects} {...props} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>;
  }
}

export default RouterComponent;
