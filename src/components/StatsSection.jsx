import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-12">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 px-2">
            <div className="bg-red-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
              <img src="/images/user.png" alt="Users" className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">90+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Users</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 px-2 ml-4">
            <div className="bg-red-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
              <img src="/images/location.png" alt="Locations" className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">30+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Locations</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center px-2">
            <div className="bg-red-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
              <img src="/images/server.png" alt="Servers" className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">50+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Servers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;