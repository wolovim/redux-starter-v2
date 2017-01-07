import axios from 'axios';
import {
  LOGIN_SUCCESS,
} from 'actions/ActionTypes.js';

function onSuccess(response, dispatch) {
  sessionStorage.setItem('jwt', response.data.auth_token);
  dispatch({ type: LOGIN_SUCCESS });
}

function onError(error, dispatch) {
  console.log('error');
}

export default function loginUser(data) {
  const request = axios.post(`/auth/login`, {
    user: data,
  });

  return (dispatch) => request
    .then(response => onSuccess(response, dispatch), error => onError(error, dispatch));
}
