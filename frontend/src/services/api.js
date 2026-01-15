import axios from 'axios';

const FALLBACK_BACKEND_URL = (() => {
  const defaultHost = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
  const defaultProtocol = typeof window !== 'undefined' ? window.location.protocol : 'http:';
  return `${defaultProtocol}//${defaultHost}:8000`;
})();

const sanitizedEnvUrl = process.env.REACT_APP_BACKEND_URL
  ? process.env.REACT_APP_BACKEND_URL.replace(/\/+$/, '')
  : '';

if (!sanitizedEnvUrl) {
  console.warn(
    '[api] REACT_APP_BACKEND_URL is not defined. Falling back to',
    FALLBACK_BACKEND_URL,
  );
}

const BACKEND_URL = sanitizedEnvUrl || FALLBACK_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact API
export const submitContact = async (contactData) => {
  const response = await apiClient.post('/contact', contactData);
  return response.data;
};

export const getContacts = async () => {
  const response = await apiClient.get('/contacts');
  return response.data;
};

// Projects API
export const getProjects = async (category = null) => {
  const params = category ? { category } : {};
  const response = await apiClient.get('/projects', { params });
  return response.data;
};

export const getProject = async (projectId) => {
  const response = await apiClient.get(`/projects/${projectId}`);
  return response.data;
};

// Services API
export const getServices = async () => {
  const response = await apiClient.get('/services');
  return response.data;
};

export const getService = async (serviceId) => {
  const response = await apiClient.get(`/services/${serviceId}`);
  return response.data;
};

export default apiClient;
