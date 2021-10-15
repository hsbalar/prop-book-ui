import axios from 'axios';
import authHeader from './auth.header';

export const API_URL = process.env.API_URL;

const GET_URL = (url) => `${API_URL}${url}`;

const postData = (url, data) =>
  axios.post(GET_URL(url), data, { headers: authHeader() });

const getData = (url) => axios.get(GET_URL(url), { headers: authHeader() });

export { postData, getData };
