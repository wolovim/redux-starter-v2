import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOG_OUT,
  FETCH_SERVICES,
} from 'actions/ActionTypes.js';
import { Map, List } from 'immutable';

function setAxiosHeader(jwtToken) {
  const token = (jwtToken || '');

  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const defaultState = Map({
  session: !!sessionStorage.jwt,
  services: List([]),
});

export default function sessionReducer(state = defaultState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      setAxiosHeader(sessionStorage.jwt);
      return state.set('session', !!sessionStorage.jwt);
    case LOG_OUT:
      return state.set('session', !!sessionStorage.jwt);
    case FETCH_SERVICES:
      return state.set('services', action.payload.data);
    default:
      return state;
  }
}
