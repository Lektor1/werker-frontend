/// <reference types="vite/client" />
import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

// Get Strapi URL from environment variables (.env.development or .env.production)
// Vite automatically loads VITE_* prefixed variables from .env files
const STRAPI_URL = (import.meta.env.VITE_STRAPI_URL as string);
const API_URL = `${STRAPI_URL}/api`;

// Create Axios instance
export const strapiApi: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 100000, // 100 second timeout
});

// Request Interceptor
strapiApi.interceptors.request.use(
  (config) => {
    // Add authorization token if available
    const token = localStorage.getItem('strapiToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    console.log('API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error: AxiosError) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor
strapiApi.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('API Response:', response.status, response.config.url);
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.status, error.response.data);
      
      // Handle specific error codes
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear token and redirect to login if needed
          localStorage.removeItem('strapiToken');
          break;
        case 403:
          console.error('Access forbidden');
          break;
        case 404:
          console.error('Resource not found');
          break;
        default:
          console.error('Server error:', error.response.status);
      }
    } else if (error.request) {
      // Request made but no response
      console.error('No response received:', error.request);
    } else {
      // Error in request setup
      console.error('Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default strapiApi;
