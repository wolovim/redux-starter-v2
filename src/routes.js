import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import About from './components/About';
import ListPage from './containers/ListPage';

export default (
  <Route path='/' component={App}>
    <Route path='/about' component={About} />
    <Route path='/list' component={ListPage} />
  </Route>
);
