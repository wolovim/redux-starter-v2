import {
  LOGIN_SUCCESS,
} from 'actions/ActionTypes.js';

export const defaultState = {
  session: !!sessionStorage.jwt,
};

export default function sessionReducer(state = defaultState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { ...state, session: !!sessionStorage.jwt};
    default:
      return state;
  }
}
