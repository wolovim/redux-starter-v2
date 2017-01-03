// axios is a lightweight library to make ajax requests
import axios from 'axios';
import { API_URL } from './env.config';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';
