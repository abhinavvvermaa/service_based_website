import axios from 'axios';

export const createRequest = (data) =>
  axios.post('http://localhost:5000/api/requests', data);
