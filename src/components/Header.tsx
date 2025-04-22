import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let mounted = true;
    const handleScroll = () => {
      if (mounted) {
        setIsScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      mounted = false;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg shadow-md' : 'bg-dark-bg/95'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center text-white hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            <Code2 className="w-8 h-8 mr-2 text-primary" />
            <span className="font-semibold text-xl">VsAi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-white hover:text-primary-hover'}`}
            >
              Home
            </Link>
            <Link 
              to="/categories" 
              className={`transition-colors ${isActive('/categories') ? 'text-primary font-medium' : 'text-white hover:text-primary-hover'}`}
            >
              Categories
            </Link>
            <Link 
              to="/tools" 
              className={`transition-colors ${isActive('/tools') ? 'text-primary font-medium' : 'text-white hover:text-primary-hover'}`}
            >
              All Tools
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-primary font-medium' : 'text-white hover:text-primary-hover'}`}
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-dark-bg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`block px-2 py-2 transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-white hover:text-primary-hover'}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className={`block px-2 py-2 transition-colors ${isActive('/categories') ? 'text-primary font-medium' : 'text-white hover:text-primary-hover'}`}
                onClick={closeMenu}
              >
                Categories
              </Link>
              <Link 
                to="/tools" 
                className={`block px-2 py-2 transition-colors ${isActive('/tools') ? 'text-primary font-medium' : 'text-white hover:text-primary-hover'}`}
                onClick={closeMenu}
              >
                All Tools
              </Link>
              <Link 
                to="/about" 
                className={`block px-2 py-2 transition-colors ${isActive('/about') ? 'text-primary font-medium' : 'text-white hover:text-primary-hover'}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;