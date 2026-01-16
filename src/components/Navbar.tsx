import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', path: '/', isHash: false },
    { label: 'Services', path: '/services', isHash: false },
    { label: 'Warranty', path: '/warranty', isHash: false },
    { label: 'About Us', path: '/about', isHash: false },
    { label: 'Contact', path: '/contact', isHash: false },
  ];

  const handleHashLinkClick = (path: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      const hash = path.replace('#', '');
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const hash = path.replace('#', '');
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 no-underline" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg orange-glow overflow-hidden">
                  <img 
                    src="/images/gearbox.png" 
                    alt="Gearbox Logo" 
                    className="w-10 h-10 object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      `;
                    }}
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  JEPH<span className="text-primary">GEARBOX</span>
                </h1>
                <p className="text-xs text-gray-500 font-medium">PERFORMANCES</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links & Get Quote Button */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              link.isHash ? (
                <button
                  key={link.label}
                  onClick={() => handleHashLinkClick(link.path)}
                  className={`font-medium transition-colors duration-300 relative group ${
                    isActive(link.path) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`font-medium transition-colors duration-300 relative group ${
                    isActive(link.path) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              )
            ))}
            <Link to="/services">
              <Button
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                }
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button Only */}
          <div className="flex items-center lg:hidden">
            <button
              className="p-3 rounded-lg hover:bg-gray-100 transition-colors relative z-60"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {/* Animated Hamburger Icon */}
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-3' : ''
                }`}></span>
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute left-0 bottom-1 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 bottom-3' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            
            {/* Mobile Menu Panel */}
            <div className="lg:hidden fixed top-20 right-0 left-0 bg-white shadow-2xl z-50 transform transition-all duration-300 ease-in-out max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  link.isHash ? (
                    <button
                      key={link.label}
                      onClick={() => {
                        handleHashLinkClick(link.path);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-4 py-4 rounded-xl transition-colors text-left text-lg font-medium ${
                        isActive(link.path) 
                          ? 'bg-primary/10 text-primary' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.path}
                      className={`px-4 py-4 rounded-xl transition-colors text-lg font-medium ${
                        isActive(link.path) 
                          ? 'bg-primary/10 text-primary' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
                
                {/* Mobile Get Quote Button */}
                <Link
                  to="/services"
                  className="mt-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="primary"
                    fullWidth
                    size="lg"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    }
                  >
                    Get Quote
                  </Button>
                </Link>
                
                {/* Contact Info in Mobile Menu */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <a href="tel:0848899268" className="text-gray-700 hover:text-primary">
                        (084) 889-9268
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-gray-700">
                        Randburg, Gauteng
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;