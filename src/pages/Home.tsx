import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-136px)] bg-gray-50 text-gray-800 p-4">
        <div className="max-w-3xl text-center space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                    <span className="block text-gray-900">Welcome to My</span>
                <span className="block text-blue-600">Awesome Portfolio</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                This is the default home page. I build things for the web using modern technologies like React, Vite, and Tailwind CSS.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                        Get started
                    </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                        Learn more
                    </a>
                </div>
            </div>  
        </div>
    </div>
  );
};

export default Home;
