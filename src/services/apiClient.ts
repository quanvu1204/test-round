import axios from 'axios';

const ApiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 100000,
});

ApiClient.interceptors.request.use(
  (config: any) => {
    const authorizationData = JSON.parse(localStorage.getItem('token') as string);
    if (authorizationData) {
      config.headers.Authorization = `Bearer ${authorizationData.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

ApiClient.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

export default ApiClient;
