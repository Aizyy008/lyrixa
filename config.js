// Configuration for API URL
// This file reads from environment or uses defaults

const CONFIG = {
  // Check if running locally or in production
  API_BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3000'
    : (window.ENV?.VITE_API_URL || 'https://your-render-backend.onrender.com')
};

// Make config available globally
window.APP_CONFIG = CONFIG;
