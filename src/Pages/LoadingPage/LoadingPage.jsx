import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-16 h-16 relative transform rotate-45">
        <div className="absolute top-0 left-0 w-8 h-8 bg-indigo-500 rounded-sm animate-spin-slow shadow-lg"></div>
        <div className="absolute top-0 right-0 w-8 h-8 bg-pink-500 rounded-sm animate-spin-slow animation-delay-150 shadow-lg"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-purple-500 rounded-sm animate-spin-slow animation-delay-300 shadow-lg"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-500 rounded-sm animate-spin-slow animation-delay-450 shadow-lg"></div>
      </div>
      <h1 className="mt-8 text-xl font-semibold tracking-wide animate-pulse">
        Loading... Please wait
      </h1>
    </div>
  );
};

export default LoadingPage;
