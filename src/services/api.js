import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:3000',
    timeout: 10000,
    headers: {'Content-Type':'application/json'}
  });