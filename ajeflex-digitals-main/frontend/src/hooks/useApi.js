import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

// Custom hook for API calls with loading and error states
export const useApi = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunction();
        setData(result.data || result);
      } catch (err) {
        setError(err.error || err.message || 'An error occurred');
        console.error('API Hook Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction();
      setData(result.data || result);
    } catch (err) {
      setError(err.error || err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
};

// Hook for portfolio with filtering
export const usePortfolio = (filters = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiService.getPortfolio(filters);
        setData(result.data || []);
      } catch (err) {
        setError(err.error || err.message || 'Failed to fetch portfolio');
        console.error('Portfolio fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [filters.category, filters.limit]);

  return { data, loading, error };
};

// Hook for form submissions
export const useFormSubmission = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = async (submitFunction, formData) => {
    try {
      setSubmitting(true);
      setError(null);
      setSuccess(false);
      
      await submitFunction(formData);
      setSuccess(true);
      
      // Reset success state after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.error || err.message || 'Submission failed');
      console.error('Form submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSubmitting(false);
    setSuccess(false);
    setError(null);
  };

  return { submitForm, submitting, success, error, reset };
};

export default useApi;