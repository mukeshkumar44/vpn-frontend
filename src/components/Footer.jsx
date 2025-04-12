import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="mb-6 flex">
            <img src="/images/Standard Collection 27.png" alt="LaslesVPN Logo" className="h-8" />
            <p className='ml-2 mt-2 font-bold'>LaslesVPN</p>
          </div>
          <p className="text-gray-600 mb-6">
            LaslesVPN is a private virtual network that has unique features and has high security.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-white p-2 rounded-full shadow">
              <img src="/images/Facebook.png" alt="Facebook" className="h-16 w-16" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full shadow">
              <img src="/images/Twitter.png" alt="Twitter" className="h-16 w-16" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full shadow">
              <img src="/images/Instagram.png" alt="Instagram" className="h-16 w-16" />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">©2023 LaslesVPN</p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Product</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-red-500">Download</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-500">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-500">Locations</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-500">Server</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-500">Countries</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-500">Blog</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Engage</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-red-500">LaslesVPN ?</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-500">FAQ</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-500">Tutorials</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-500">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-500">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-500">Terms of Service</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Earn Money</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-red-500">Affiliate</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-500">Become Partner</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;