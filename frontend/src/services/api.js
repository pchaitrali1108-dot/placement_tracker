import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Response interceptor for generic error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

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
