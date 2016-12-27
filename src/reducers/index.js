import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import flashMessages from './flashMessages';
import list from './list';
import loginReducer from 'Login/reducers/LoginReducer.jsx';

const rootReducer = combineReducers({
  flashMessages,
  list,
  routing,
  form: formReducer,
  loginReducer,
});

export default rootReducer;
