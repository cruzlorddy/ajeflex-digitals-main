import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

const ErrorMessage = ({ 
  error, 
  onRetry, 
  showRetry = true, 
  className = '',
  title = 'Something went wrong' 
}) => {
  return (
    <div className={`text-center py-12 ${className}`}>
      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
        <AlertCircle className="w-8 h-8 text-red-500" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        {error || 'An unexpected error occurred. Please try again.'}
      </p>
      
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="btn-secondary-3d inline-flex items-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </button>
      )}
    </div>
  );
};

export const InlineError = ({ error, onRetry, showRetry = true }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <div className="flex items-start">
        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3" />
        <div className="flex-1">
          <p className="text-red-700 text-sm">
            {error || 'An error occurred'}
          </p>
          {showRetry && onRetry && (
            <button
              onClick={onRetry}
              className="text-red-600 hover:text-red-800 text-sm font-medium mt-2 inline-flex items-center"
            >
              <RefreshCw className="w-3 h-3 mr-1" />
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;