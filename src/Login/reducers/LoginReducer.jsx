import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOG_OUT,
  FETCH_SERVICES,
} from 'actions/ActionTypes.js';

function setAxiosHeader(jwtToken) {
  const token = (jwtToken || '');

  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const defaultState = {
  session: !!sessionStorage.jwt,
};

export default function sessionReducer(state = defaultState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      setAxiosHeader(sessionStorage.jwt);
      return { ...state, session: !!sessionStorage.jwt };
    case LOG_OUT:
      return { ...state, session: !!sessionStorage.jwt };
    case FETCH_SERVICES:
      return { ...state, services: action.payload.data };
    default:
      return state;
  }
}
