import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <img className="h-16" src="/tittle_logo.png" alt="LetsMeet Logo" />
              <p className="text-2xl font-bold -mt-[5px]">
                <span className="text-blue-700">Lets</span>-
                <span className="text-purple-800">Meet</span>
              </p>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            {['Features', 'Solutions', 'Resources', 'Pricing'].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="text-base font-medium text-black transition hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="hidden lg:inline-flex items-center justify-center px-4 py-3 ml-6 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            Get started
          </a>

          {/* Hamburger Menu (Mobile Only) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-600 hover:text-blue-700 focus:outline-none"
            >
              {/* Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="flex flex-col mt-4 space-y-2 lg:hidden">
            {['Features', 'Solutions', 'Resources', 'Pricing'].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="block px-4 py-2 text-base font-medium text-black hover:text-blue-600 transition"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="block px-4 py-2 mt-2 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
            >
              Get started
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
