import axios from 'axios';
import authHeader from './auth.header';

export const API_URL =
  process.env.REACT_APP_DEV === 'true'
    ? 'http://localhost:4000/api'
    : 'https://prop-book-apis.herokuapp.com/api';

const GET_URL = (url) => `${API_URL}${url}`;

const postData = (url, data) => {
  return axios.post(GET_URL(url), data, { headers: authHeader() });
};

const getData = (url) => {
  return axios.get(GET_URL(url), { headers: authHeader() });
};

export { postData, getData };
