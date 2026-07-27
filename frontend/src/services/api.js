import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor to attach Authorization header if token exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for generic error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// User Authentication API Services
export const registerUser = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await api.post('/users/login', credentials);
  return response.data;
};

export const fetchCurrentUser = async () => {
  const response = await api.get('/users/me');
  return response.data;
};

// AI Resume Screening API Call
export const screenResume = async (file, jobDescription) => {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('job_description', jobDescription);

  const response = await axios.post(
    'http://localhost:8000/api/v1/screen-resume',
    formData
  );

  return response.data;
};

export default api;
