import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import './axiosConfig';
import './assets/css/index.scss';
import Immutable from 'immutable';

const initialState = Immutable.Map();
const store = configureStore(initialState);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
      return state.get('routing').toObject();
  }
});

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
