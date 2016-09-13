import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import list from './list';

const rootReducer = combineReducers({
  list,
  routing
});

export default rootReducer;
