import axios from 'axios';
// Base URL for your backend API
const API_BASE_URL = 'https://ap-tourism-api.vercel.app/';

// Create an axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Trip Planning API Service
export const tripPlannerService = {
  // Method to get trip plan
  async getPlanTrip(prompt) {
    try {
      const response = await api.post('/plan-trip', { prompt });
      return response.data;
    } catch (error) {
      // Centralized error handling
      if (error.response) {
        throw new Error(error.response.data.message || 'Failed to fetch trip plan');
      }
      throw error;
    }
  },

  // You can add more API methods here as needed
  async getUserProfile() {
    try {
      const response = await api.get('/user/profile');
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || 'Failed to fetch user profile');
      }
      throw error;
    }
  }
};