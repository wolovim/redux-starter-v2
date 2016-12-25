import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import flashMessages from './flashMessages';
import list from './list';

const rootReducer = combineReducers({
  flashMessages,
  list,
  routing,
  form: formReducer,
});

export default rootReducer;
