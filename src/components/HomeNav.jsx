import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <main className="bg-black">
        
        <div className="flex flex-row items-center justify-between sm:justify-between py-8 max-w-5xl mx-auto relative z-[100] px-8">
          {/* Desktop view */}
          <div className="hidden lg:flex w-full justify-between">
            <div className="flex flex-row space-x-8 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800">
              <Link to="/" className="font-bold text-sm flex items-center justify-center text-white space-x-2">
                <img
                  alt="Avatar"
                  loading="lazy"
                  width="30"
                  height="30"
                  decoding="async"
                  className="transition duration-500 blur-0 scale-100 rounded-full"
                  srcSet="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
                  src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
                  style={{ color: "transparent" }}
                />
                <span className="font-inter font-bold">Home</span>
              </Link>
              
              <Link to="/about" className="text-white text-sm relative">
                <span className="relative z-10 px-2 py-2 inline-block">About</span>
              </Link>
              
              <Link to="/contact" className="text-white text-sm relative">
                <span className="relative z-10 px-2 py-2 inline-block ">Contact</span>
              </Link>
              
             <Link>
                <span className="relative z-10 px-2 py-2 inline-block">
                  Service
                </span>
                </Link>
              
            </div>
          </div>

          {/* Mobile view */}
          <div className="lg:hidden flex justify-between w-full">
            <div className="flex items-center space-x-2">
              <img
                alt="Avatar"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                className="rounded-full"
                srcSet="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
                src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
                style={{ color: "transparent" }}
              />
              <span className="font-bold text-white">Home</span>
            </div>
            
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden px-8 py-4 bg-zinc-800 rounded-lg absolute left-0 right-0 top-20 z-50">
            <Link to="/" className="block text-white text-sm mb-2">
              Home
            </Link>
            <Link to="/about" className="block text-white text-sm mb-2">
              About
            </Link>
            <Link to="/contact" className="block text-white text-sm mb-2">
              Contact
            </Link>
            <Link to="/service" className="block text-white text-sm mb-2">
              Service
            </Link>
           
          </div>
        )}
      </main>
    </div>
  );
};

export default HomeNav;
