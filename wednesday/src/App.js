import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
			<h1>Wednesday app created on a thursday</h1>
			<hr/>
			<Welcome/>
      </div>
    );
  }
}

export default App;
