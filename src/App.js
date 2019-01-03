import React, { Component } from 'react';
import Banner from './components/Banner';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    name: 'Rashed',
    introText: "I'm a frontend developer. I make things."
  }

  render() {
    const { name, introText } = this.state

    return (
      <div className="App">
        <Route path="/" render={() => <Banner name={name} introText={introText} />}></Route>
        <Banner
          name={name}
          introText={introText}
        />
      </div>
    );
  }
}

export default App;
