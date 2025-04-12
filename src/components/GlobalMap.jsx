import React from 'react';

const GlobalMap = () => {
  return (
    <section className="py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Huge Global Network</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        See LaslesVPN everywhere to make it easier for you when you move locations.
      </p>
      
      <div className="mb-12">
        <img src="/images/Huge Global.png" alt="Global Network Map" className="w-full" />
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="w-24 h-16 flex items-center justify-center">
          <img src="/images/Mask Group@3x.png" alt="Netflix" className="max-h-16 max-w-full" />
        </div>
        <div className="w-24 h-16 flex items-center justify-center">
          <img src="/images/Mask Group@2x.png" alt="Reddit" className="max-h-16 max-w-full" />
        </div>
        <div className="w-24 h-16 flex items-center justify-center">
          <img src="/images/Mask Group (3).png" alt="Amazon" className="max-h-16 max-w-full" />
        </div>
        <div className="w-24 h-16 flex items-center justify-center">
          <img src="/images/Mask Group (1).png" alt="Discord" className="max-h-16 max-w-full" />
        </div>
        <div className="w-24 h-16 flex items-center justify-center">
          <img src="/images/Mask Group (2).png" alt="Spotify" className="max-h-16 max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;