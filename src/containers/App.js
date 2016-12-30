import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import FlashMessages from './common/FlashMessages';
import logo from '../logo.svg';
import logoutUser from 'Login/actions/logoutUser.jsx';

import '../assets/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
  }

  componentWillMount() {
    if (!this.props.loggedIn) {
      browserHistory.push('/login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn && nextProps.routing.pathname !== '/login') {
      browserHistory.push('/login');
    }
  }

  logOut() {
    this.props.logoutUser();
    browserHistory.push('/');
  }

  render() {
    const { loggedIn } = this.props;

    const LoginInfo = () => {
      if (loggedIn) {
        return <Link className="list-item" onClick={this.logOut}>Logout</Link>;
      }
      return <Link to={'/login'} className="list-item">Login</Link>;
    };

    return (
      <div className="App">
        <FlashMessages />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redux Starter v2!</h2>
          <div className="navigation">
            <Link to={'/list'} className="list-item">List Maker</Link>
            <Link to={'/about'} className="list-item">About</Link>
            <LoginInfo />
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
  loggedIn: PropTypes.bool.isRequired,
  children: PropTypes.object,
  routing: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {;
  return {
    loggedIn: state.loginReducer.session,
    routing: state.routing.locationBeforeTransitions,
  };
}

export default connect(mapStateToProps, {
  logoutUser,
})(App);
