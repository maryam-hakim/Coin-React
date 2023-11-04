import axios from 'axios';

// Create a new instance.
const service = axios.create({
  baseURL: process.env.API_ENDPOINT,
  delayed: true  // use this custom option to allow overrides
});

service.interceptors.request.use((config) =>{
  if (config.delayed) {
    return new Promise(resolve => setTimeout(() => resolve(config), 600));
  }
  return config;
});

export default service;