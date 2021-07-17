import axios from 'axios';
import authHeader from './auth.header';

const API_URL = 'http://localhost:4000/api/test/';

const post = (data) => {
  return axios.post(API_URL, data, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + 'mod', { headers: authHeader() });
};
