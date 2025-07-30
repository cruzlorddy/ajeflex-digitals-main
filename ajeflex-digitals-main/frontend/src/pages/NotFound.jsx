import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeftCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-50 to-white text-gray-800">
      <Navigation />

      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-xl animate-fade-in">
          <h1 className="text-6xl font-extrabold mb-6 text-red-600">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <img
                            src="Ajeflex-icon.png"
                            alt="Ajeflex Logo"
                            className="w-15 h-15 object-contain"
                          />
          <p className="text-gray-600 text-lg mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-white font-semibold bg-red-600 hover:bg-red-700 transition rounded-xl shadow-md hover:shadow-lg"
          >
            <ArrowLeftCircle className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
