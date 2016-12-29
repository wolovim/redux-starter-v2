import axios from 'axios';
import {
  FETCH_SERVICES,
} from 'actions/ActionTypes.js';

function onSuccess(response, dispatch) {
  console.log(response);
  dispatch({ type: FETCH_SERVICES, payload: response });
}

function onError(error, dispatch) {
  console.log('error');
}

export default function loginUser(data) {
  console.log(axios.defaults);
  const request = axios.get(`${process.env.API_HOST}/api/v1/services`);

  return (dispatch) => request
    .then(response => onSuccess(response, dispatch), error => onError(error, dispatch));
}
