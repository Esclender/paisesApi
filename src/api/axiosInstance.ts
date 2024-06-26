import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

// axiosInstance.interceptors.response.use(response => {
//   console.log('Response:', response);
//   return response;
// }, error => {
//   console.error('Response Error:', error.response);
//   return Promise.reject(error);
// });

export default axiosInstance;
