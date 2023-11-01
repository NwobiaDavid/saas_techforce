import { useState } from 'react';
import logo from '../assets/taskie.png'
import { Link } from 'react-scroll';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div className="flex bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0
    fixed w-screen z-50 lg:flex-row flex-col p-2 my-0 items-center justify-center md:justify-evenly shadow-md">
      <div className="p-0 m-0 flex w-[100%] justify-around items-center lg:w-fit">
        {/* Logo and Brand */}
        <div className="w-[40%] md:w-auto flex items-center justify-center">
          <div className='flex items-center justify-center'>
            <img src={logo} className='h-[50px]' alt="the website's logo"  />
            <Link className="font-bold  cursor-pointer text-2xl md:text-3xl" to="homepage">
              taskie
            </Link>
          </div>
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
          <Link
            className="p-3  cursor-pointer hover:text-blue-600 transition-all duration-300 "
            to="features"
          >
            features
          </Link>
          <Link
            className="p-3 cursor-pointer lg:ml-4 hover:text-blue-600 transition-all duration-300 "
            to="testimonials"
          >
            testimonials
          </Link>
          <Link
            className="p-3  cursor-pointer lg:ml-4 hover:text-blue-600 transition-all duration-300 "
            to="pricing"
          >
            pricing
          </Link>
          <Link
          className="p-3  cursor-pointer lg:ml-4 hover:text-blue-600 transition-all duration-300 "
          to="contact"
        >
          contact
        </Link>
        </div>
      

        <div className="text-lg  cursor-pointer py-3 lg:w-[20%] text-center px-4 lg:mb-0 mb-7 hover:bg-blue-600 duration-200 bg-blue-500 text-white rounded-lg">
        <Link to="contact">try taskie</Link>
      </div>

      </div>

    
    </div>
  );
}
