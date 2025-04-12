import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 relative">
      <div className="logo">
        <Link to="/" className='flex'>
          <img src="/images/Standard Collection 27.png" alt="VPN Logo" className="h-8" />
          <p className='ml-2 mt-2'>LaslesVPN</p>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="font-medium">Home</Link>
        <Link to="/features" className="font-medium">Features</Link>
        <Link to="/pricing" className="font-medium">Pricing</Link>
        <Link to="/testimonials" className="font-medium">Testimonials</Link>
        <Link to="/help" className="font-medium">Help</Link>
      </nav>
      
      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link 
          to="/signin" 
          className="font-medium px-5 py-2 border border-transparent hover:border-red-500 rounded-md transition-all duration-300 hover:text-red-500"
        >
          Sign In
        </Link>
        <Link 
          to="/signup" 
          className="bg-red-500 text-white px-6 py-2 rounded-md font-medium shadow-md hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          Sign Up
        </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex items-center" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-4 px-6">
          <nav className="flex flex-col space-y-4 mb-6">
            <Link to="/" className="font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/features" className="font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link to="/pricing" className="font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link to="/testimonials" className="font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
            <Link to="/help" className="font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Help</Link>
          </nav>
          <div className="flex flex-col space-y-3">
            <Link 
              to="/signin" 
              className="font-medium py-2 text-center border border-transparent hover:border-red-500 rounded-md transition-all duration-300 hover:text-red-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="bg-red-500 text-white py-2 rounded-md font-medium shadow-md hover:bg-red-600 transition-all duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;