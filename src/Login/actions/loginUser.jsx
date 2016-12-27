import axios from 'axios';
import {
  LOGIN_SUCCESS,
} from 'actions/ActionTypes.js';

function onSuccess(response, dispatch) {
  console.log(response);
  sessionStorage.setItem('jwt', response.data.auth_token);
  dispatch({ type: LOGIN_SUCCESS });
  console.log(sessionStorage);
}

function onError(error, dispatch) {
  console.log('error');
}

export default function loginUser(data) {
  const request = axios.post(`${process.env.API_HOST}/auth/login`, {
    user: data,
  });

  return (dispatch) => request
    .then(response => onSuccess(response, dispatch), error => onError(error, dispatch));
}
