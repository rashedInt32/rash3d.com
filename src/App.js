import React, { Component } from 'react';
import RouterComponent from './routes';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div className="App" onClick={this.getLocation}>
        <div className="transition-container">
          <Header />
          <RouterComponent />
        </div>
      </div>
    );
  }
}

export default App;
