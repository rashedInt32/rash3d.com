import React, { Component } from 'react';
import Router from './routes';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="transition-container">
          <Header />
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
