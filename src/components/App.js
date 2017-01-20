import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import TestContainer from '../containers/TestContainer';
import DevTools from '../containers/DevTools';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <TestContainer />
    <DevTools />
  </div>
)

export default App;
