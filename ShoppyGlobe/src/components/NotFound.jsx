import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700 mt-4">Oops! Page Not Found</p>
        <p className="text-lg text-gray-500 mt-2">The page you're looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
