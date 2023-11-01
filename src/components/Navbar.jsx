import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div className="flex lg:flex-row flex-col p-2 my-0 items-center justify-center md:justify-evenly shadow-md">
      <div className="p-0 m-0 flex w-[100%] justify-around items-center lg:w-fit">
        {/* Logo and Brand */}
        <div className="w-[40%] md:w-auto flex items-center justify-center">
          <a className="font-bold p-3 text-2xl md:text-3xl" href="#">
            <span className="text-blue-500">./</span>studyHive
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex">
          <button
            className="p-3 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {/* Animated SVG icon for mobile menu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform ${
                isMenuOpen ? 'transform rotate-90' : 'transform rotate-0'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex-row lg:flex flex-col items-center lg:w-[60%] justify-evenly`}
      >
        <div className="text-lg flex whitespace-nowrap lg:flex-row p-2 items-center flex-col">
          <a
            className="p-3  hover:text-blue-600 transition-all duration-300 "
            href="http://"
          >
            features
          </a>
          <a
            className="p-3 lg:ml-4 hover:text-blue-600 transition-all duration-300 "
            href="http://"
          >
            testimonials
          </a>
          <a
            className="p-3 lg:ml-4 hover:text-blue-600 transition-all duration-300 "
            href="http://"
          >
            pricing
          </a>
        </div>
        <a
          className="p-3 lg:ml-4 hover:text-blue-600 transition-all duration-300 "
          href="http://"
        >
          contact
        </a>
      </div>

      <div className="text-lg p-3 lg:mb-0 mb-7 hover:bg-blue-600 duration-200 bg-blue-500 text-white rounded-lg">
        <a href="">try taskie</a>
      </div>
    </div>
  );
}
