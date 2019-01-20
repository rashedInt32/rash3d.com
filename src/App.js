import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RouterComponent from './routes';
import Header from './components/Header';
import Loader from './layout/Loader';

class App extends Component {
  state = {loading: true}

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }
  render() {
    const { location } = this.props;
    const { loading } = this.state;

    if (loading) return <Loader />;

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
