import {
  LOG_OUT,
} from 'actions/ActionTypes.js';

export default function logoutUser() {
  sessionStorage.removeItem('jwt');
  return { type: LOG_OUT};
}
