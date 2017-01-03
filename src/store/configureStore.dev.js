import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import { createDevTools } from 'redux-devtools';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  let enhancer;
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      applyMiddleware(thunk),
    );
  } else {
    enhancer = compose(
      applyMiddleware(thunk),
      createDevTools().instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    );
  }

  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
