import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import About from './components/About';
import ListPage from './containers/ListPage';
import LoginPage from './Login/index';
import { setAxiosHeaders } from './Login/utils/session.js';
import { isLoggedIn } from 'Login/utils/session.js';

export default function configAuthenticatedRoutes() {
  const enforceSessionandHeaders = (nextState, replace, callback) => {
    setAxiosHeaders();
    callback();
  };

  return (
    <Route path='/' component={App} onEnter={enforceSessionandHeaders}>
      <IndexRoute component={About} />
      <Route path='/login' component={LoginPage} />
      <Route path='/about' component={About} />
      <Route path='/list' component={ListPage} />
    </Route>
  );
}
