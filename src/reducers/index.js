import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import flashMessages from './flashMessages';
import list from './list';

const rootReducer = combineReducers({
  flashMessages,
  list,
  routing
});

export default rootReducer;
