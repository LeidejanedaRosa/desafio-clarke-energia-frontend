import axios from 'axios';

export default axios.create({
  baseURL: process.env.baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});