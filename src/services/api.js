import axios from 'axios';

export default axios.create({
  baseURL: 'https://desafio-clarke-energia-backend-3ueh.vercel.app/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});