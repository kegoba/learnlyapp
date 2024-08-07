import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
 baseUrl : process.env.VUE_APP_API_BASE_URL || 'http://localhost:8000'
 

});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');


    // If the token exists, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Return the modified config
    return config;
  },
  error => {
    // Handle request error here
    return Promise.reject(error);
  }
);

export default axiosInstance;
