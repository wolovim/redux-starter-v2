import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../logo.svg';

import '../assets/css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redux Starter v2!</h2>
          <div className="navigation">
            <Link to={'/list'} className="list-item">List Maker</Link>
            <Link to={'/about'} className="list-item">About</Link>
          </div>
        </div>
        <div className="App-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
