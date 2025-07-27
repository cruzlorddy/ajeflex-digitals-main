import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Create axios instance with default config
const api = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error.response?.data || error);
  }
);

// API service functions
export const apiService = {
  // Submit contact form
  submitContactForm: async (formData) => {
    try {
      const response = await api.post('/contact', formData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Subscribe to newsletter
  subscribeNewsletter: async (email) => {
    try {
      const response = await api.post('/newsletter', { email });
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get portfolio items
  getPortfolio: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.category) params.append('category', filters.category);
      if (filters.limit) params.append('limit', filters.limit);
      
      const response = await api.get(`/portfolio?${params.toString()}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get services
  getServices: async () => {
    try {
      const response = await api.get('/services');
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get testimonials
  getTestimonials: async () => {
    try {
      const response = await api.get('/testimonials');
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get company information
  getCompanyInfo: async () => {
    try {
      const response = await api.get('/company');
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get all contacts (admin only)
  getContacts: async () => {
    try {
      const response = await api.get('/contacts');
      return response;
    } catch (error) {
      throw error;
    }
  }
};

// Helper function to convert file to base64
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

export default apiService;