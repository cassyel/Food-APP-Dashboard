import axios from 'axios';

axios.defaults.validateStatus = () => true;

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE}`
});
