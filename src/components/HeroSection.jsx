import React from 'react';

const HeroSection = () => {
  return (
    <section className="py- px-6 md:px-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Want anything to be easy with <span className="text-red-500">LaslesVPN</span>.
        </h1>
        <p className="text-gray-600 mb-8">
          Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
        </p>
        <button className="bg-red-500 text-white px-8 py-3 rounded-md font-medium shadow-lg">
          Get Started
        </button>
      </div>
      
      <div className="md:w-1/2">
        <img src="/images/1.png" alt="VPN Illustration" className="w-full" />
      </div>
    </section>
  );
};

export default HeroSection;