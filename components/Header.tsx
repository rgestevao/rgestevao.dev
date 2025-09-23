import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS, ExternalLinkIcon } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = "text-grey hover:text-white transition-colors duration-300 py-2";
  const activeLinkClasses = "text-white";

  return (
    <header className="py-8">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-24 flex justify-between items-center">
        <Link to="/" className="font-logo text-2xl md:text-3xl text-white">
          Rodrigo Gouveia Estevão
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-lg">
          {NAV_LINKS.map((link) => (
            link.path.startsWith('http') ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClasses} flex items-center space-x-1.5`}
              >
                <span>{link.name}</span>
                <ExternalLinkIcon className="opacity-70" />
              </a>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
              >
                {link.name}
              </NavLink>
            )
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black-900">
          <nav className="flex flex-col items-center space-y-4 text-xl py-4">
            {NAV_LINKS.map((link) => (
               link.path.startsWith('http') ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className={`${linkClasses} flex items-center space-x-1.5`}
                >
                  <span>{link.name}</span>
                  <ExternalLinkIcon className="opacity-70" />
                </a>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
                >
                  {link.name}
                </NavLink>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;