import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';
import DevTools from './DevTools';


class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <div>
        <Provider store={store}>
          <div>
            <Router history={history} routes={routes} />
            <DevTools />
          </div>
        </Provider>
      </div>
    );
  }
}

Root.displayName = 'Root';

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
