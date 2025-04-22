import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <Link to="/" className="text-primary hover:text-primary-hover transition-colors font-semibold text-lg">
              VsAi
            </Link>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <Link to="/categories" className="text-secondary hover:text-white transition-colors">
              Categories
            </Link>
            <Link to="/tools" className="text-secondary hover:text-white transition-colors">
              All Tools
            </Link>
            <Link to="/about" className="text-secondary hover:text-white transition-colors">
              About
            </Link>
          </div>
          <div className="text-secondary text-sm">
            <p>&copy; 2025 VsAi · <Link to="#" className="hover:text-white transition-colors">Terms</Link> · <a href="mailto:contact@vsai.app" className="hover:text-white transition-colors">Contact</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;