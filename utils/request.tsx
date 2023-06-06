import axios from 'axios';

const request = axios.create({
  headers: {
    Accept: 'application/ld+json',
    'Content-Type': 'application/json',
  },
  baseURL: 'https://web-dev.dev.kimo.ai',
});

export default request;
