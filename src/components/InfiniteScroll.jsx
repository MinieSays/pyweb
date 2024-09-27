import React from 'react';

const InfiniteScroll = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-100 py-4">
      {/* Outer Container */}
      <div className="relative w-full h-40 overflow-hidden">
        {/* Inner Scrolling Container */}
        <div className="flex animate-scroll gap-8 whitespace-nowrap">
          {/* Example items to scroll */}
          <div className="flex-shrink-0 w-48 h-full bg-[#ffc857] text-white text-center flex items-center justify-center font-bold rounded-lg shadow-lg">
            Banner 1
          </div>
          <div className="flex-shrink-0 w-48 h-full bg-indigo-500 text-white text-center flex items-center justify-center font-bold rounded-lg shadow-lg">
            Banner 2
          </div>
          <div className="flex-shrink-0 w-48 h-full bg-pink-500 text-white text-center flex items-center justify-center font-bold rounded-lg shadow-lg">
            Banner 3
          </div>
          <div className="flex-shrink-0 w-48 h-full bg-green-500 text-white text-center flex items-center justify-center font-bold rounded-lg shadow-lg">
            Banner 4
          </div>
          <div className="flex-shrink-0 w-48 h-full bg-purple-500 text-white text-center flex items-center justify-center font-bold rounded-lg shadow-lg">
            Banner 5
          </div>
          {/* Duplicate items to create an infinite loop */}
          <div className="flex-shrink-0 w-48 h-full bg-[#ffc857] text-white text-center flex items-center justify-center font-bold rounded-lg shadow-lg">
            Banner 1
          </div>
          <div className="flex-shrink-0 w-48 h-full bg-indigo-500 text-white text-center flex items-center justify-center font-bold rounded-lg shadow-lg">
            Banner 2
          </div>
          <div className="flex-shrink-0 w-48 h-full bg-pink-500 text-white text-center flex items-center justify-center font-bold rounded-lg shadow-lg">
            Banner 3
          </div>
          <div className="flex-shrink-0 w-48 h-full bg-green-500 text-white text-center flex items-center justify-center font-bold rounded-lg shadow-lg">
            Banner 4
          </div>
          <div className="flex-shrink-0 w-48 h-full bg-purple-500 text-white text-center flex items-center justify-center font-bold rounded-lg shadow-lg">
            Banner 5
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;