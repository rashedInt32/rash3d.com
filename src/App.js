import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RouterComponent from './routes';
import Header from './components/Header';

class App extends Component {
  render() {
    const { location } = this.props;

    return (
      <div className="App">
        <div className="transition-container">
          {location.pathname !== '/' ? <Header /> : ''}
          <RouterComponent />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
