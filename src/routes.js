import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import About from './components/About';
import ListPage from './containers/ListPage';
import ReduxFormSample from './components/ReduxFormSample';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={About} />
    <Route path='/about' component={About} />
    <Route path='/list' component={ListPage} />
    <Route path='/form' component={ReduxFormSample} />
  </Route>
);
