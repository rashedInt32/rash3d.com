import React, { Component } from 'react';
import Home from './pages/Home';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    name: 'Rashed',
    introText: "I'm a frontend developer. I make things."
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Home}></Route>
      </div>
    );
  }
}

export default App;
