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
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      // If we're on home page, scroll to section
      const hash = path.replace('#', '');
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home page then scroll
      navigate('/');
      // Use timeout to allow page to load before scrolling
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
    if (path === '/') {
      return location.pathname === '/';
    }
    if (path === '/services') {
      return location.pathname === '/services';
    }
    if (path === '/warranty') {
      return location.pathname === '/warranty';
    }
     if (path === '/aboutus') {
      return location.pathname === '/aboutus';
    }
    if (path === '/contact') {
      return location.pathname === '/contact';
    }
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Brand with new gearbox.jpeg image */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 no-underline">
              <div className="relative">
                {/* Logo Image Container */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg orange-glow overflow-hidden">
                  {/* Your gearbox logo image */}
                  <img 
                    src="/images/gearbox.png" 
                    alt="Gearbox Logo" 
                    className="w-10 h-10 object-cover rounded-lg"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Show fallback icon
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

          {/* Desktop Navigation Links */}
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
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
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
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                link.isHash ? (
                  <button
                    key={link.label}
                    onClick={() => handleHashLinkClick(link.path)}
                    className={`px-4 py-2 rounded-lg transition-colors text-left ${
                      isActive(link.path) 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isActive(link.path) 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;