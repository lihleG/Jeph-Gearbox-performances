import React from 'react';
import Badge from './ui/Badge';
import Button from './ui/Button';
import StatsSection from './StatsSection';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden dark-overlay orange-pattern">
      
      {/* Background Pattern Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/30 rounded-full mix-blend-overlay filter blur-3xl"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/30 rounded-3xl transform rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-primary/20 rounded-2xl transform rotate-12"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-primary/10 rounded-full"></div>
        </div>
      </div>

      {/* Floating Gear Elements */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-8 h-8 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-20 left-10 animate-float" style={{animationDelay: '1.5s'}}>
        <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/30 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          
          {/* Premium Badge with Orange Accent */}
          <div className="mb-8">
            <Badge variant="primary" animate={true}>PREMIUM GEARBOX SOLUTIONS</Badge>
          </div>

          {/* Main Heading with Orange Gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">DRIVE WITH</span>{' '}
            <span className="text-gradient relative">
              CONFIDENCE
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></span>
            </span>
          </h1>

          {/* Subtitle with Orange Accent Line */}
          <div className="relative mb-10 max-w-3xl">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Expert <span className="text-primary font-semibold">Automatic & Manual Gearbox</span> Repair & Diagnostic Solutions. 
              Comprehensive warranties and transparent damage-based pricing for complete peace of mind.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-gray-300">9-Month Repair Warranty</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-gray-300">30-Day Parts Warranty</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons with Orange Theme */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button
              variant="primary"
              size="lg"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              }
              className="group relative overflow-hidden shadow-2xl hover:shadow-3xl"
              onClick={() => console.log('Get Free Diagnostic clicked')}
            >
              <span className="relative z-10 flex items-center">
                GET FREE DIAGNOSTIC
                <svg className="w-5 h-5 ml-2 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3"></path>
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              }
              className="group border-primary hover:bg-primary/10"
              onClick={() => console.log('View Services clicked')}
            >
              <span className="flex items-center">
                VIEW OUR SERVICES
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Button>
          </div>

          {/* Stats Section with Orange Accents */}
          <StatsSection />

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-300">Certified Technicians</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-300">OEM Quality Parts</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                <span>Same-day diagnostics • Emergency services available</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator with Orange Theme */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-2">Discover More</span>
              <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center group cursor-pointer">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce group-hover:bg-primary-dark"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;