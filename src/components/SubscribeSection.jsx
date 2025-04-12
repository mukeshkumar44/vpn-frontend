import React from 'react';

const SubscribeSection = () => {
  return (
    <section className="py-8 px-3 md:px-12">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-3 md:mb-0 md:mr-8">
          <h2 className="text-3xl font-bold mb-2">Subscribe Now for <br />Get Special Features!</h2>
          <p className="text-gray-600">
            Let's subscribe with us and find the fun.
          </p>
        </div>
        
        <button className="bg-red-500 text-white px-8 py-3 rounded-md font-medium shadow-lg whitespace-nowrap">
          Subscribe Now
        </button>
      </div>
    </section>
  );
};

export default SubscribeSection;