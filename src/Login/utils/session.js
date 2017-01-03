import axios from 'axios';
import _ from 'lodash';
import { API_URL } from '../../env.config';

export function isLoggedIn() {
  if (!!sessionStorage.jwt) {
    const localToken = sessionStorage.jwt;

    return !!localToken;
  }

  return false;
}

export function setAxiosHeaders() {
  const isLogged = isLoggedIn;

  const getToken = () => {
    if (isLogged()) {
      return sessionStorage.jwt;
    }

    return '';
  };

  const generateAxiosToken = (token) => {
    if (!_.isEmpty(token)) {
      axios.defaults.headers.Authorization = `Bearer ${getToken()}`;
    }
  };

  axios.defaults.baseURL = API_URL;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Accept = 'application/json';

  const axiosToken = getToken();
  generateAxiosToken(axiosToken);

}
