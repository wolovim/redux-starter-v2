import { combineReducers } from 'redux-immutable';
import routing from 'reducers/routingReducer.js';
import { reducer as formReducer } from 'redux-form/immutable';
import flashMessages from './flashMessages';
import list from './list';
import loginReducer from 'Login/reducers/LoginReducer.jsx';

const rootReducer = combineReducers({
  routing,
  flashMessages,
  list,
  form: formReducer,
  loginReducer,
});

export default rootReducer;
