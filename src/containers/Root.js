import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';


class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <div>
        <Provider store={store}>
          <Router history={history} routes={routes} />
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
