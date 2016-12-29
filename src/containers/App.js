import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import FlashMessages from './common/FlashMessages';
import logo from '../logo.svg';
import { isLoggedIn } from 'Login/utils/session';
import '../assets/css/App.css';


class App extends Component {
  componentWillMount() {
    if (!isLoggedIn()) {
      browserHistory.push('/login');
    }
  }

  render() {
    return (
      <div className="App">
        <FlashMessages />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redux Starter v2!</h2>
          <div className="navigation">
            <Link to={'/list'} className="list-item">List Maker</Link>
            <Link to={'/about'} className="list-item">About</Link>
            <Link to={'/login'} className="list-item">Login</Link>
          </div>
        </div>
        <div className="App-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
