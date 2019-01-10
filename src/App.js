import React, { Component } from 'react';
import Router from './routes';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="transition-container">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
