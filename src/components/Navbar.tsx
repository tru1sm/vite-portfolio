import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <Link to="/" className="flex-shrink-0 flex items-center">
                    <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Tru1sm
                    </span>
                    </Link>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(link.path)
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                    >
                        {link.name}
                    </Link>
                    ))}
                </div>

                <div className="flex items-center md:hidden">
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    aria-expanded="false"
                    >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    ) : (
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                    </button>
                </div>
            </div>
        </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            isActive(link.path)
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                        >
                        {link.name}
                    </Link>
                ))}
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
