import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12">
      <div className="logo">
        <Link to="/" className='flex'>
          <img src="/images/Standard Collection 27.png" alt="VPN Logo" className="h-8" />
          <p className='ml-2 mt-2'>LaslesVPN</p>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="font-medium">Home</Link>
        <Link to="/features" className="font-medium">Features</Link>
        <Link to="/pricing" className="font-medium">Pricing</Link>
        <Link to="/testimonials" className="font-medium">Testimonials</Link>
        <Link to="/help" className="font-medium">Help</Link>
      </nav>
      
      <div className="flex items-center space-x-4">
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
    </header>
  );
};

export default Header;