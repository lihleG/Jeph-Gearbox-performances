import React from 'react';
import Button from './ui/Button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div>
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-bold text-sm tracking-wider">WHO WE ARE?</span>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Gearbox Repair Services <span className="text-gradient">You Can Rely On</span>
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-8">
              We specialize in comprehensive gearbox solutions for both automatic and manual transmissions. 
              Our team of certified technicians uses state-of-the-art diagnostic equipment to identify and 
              resolve even the most complex gearbox issues with precision and expertise.
            </p>
            
            {/* Features List */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 orange-accent-line">Professional & Customized Service</h4>
                  <p className="text-gray-600">Tailored solutions for every vehicle make and model with OEM-quality parts.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 orange-accent-line">Transparent Pricing</h4>
                  <p className="text-gray-600">No hidden fees. We assess each job individually and charge according to actual damage.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 orange-accent-line">Quality Assurance</h4>
                  <p className="text-gray-600">Every repair undergoes rigorous testing and quality checks before delivery.</p>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-gray-600 text-sm">Gearboxes Repaired</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-gray-600 text-sm">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Pricing Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-2xl p-8">
                {/* Card Header */}
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-primary mb-2">R40,000 - R50,000</div>
                  <div className="text-gray-600">Average Repair Cost Range</div>
                  <div className="text-sm text-gray-500 mt-2">(Varies by damage extent)</div>
                </div>
                
                {/* Price Breakdown */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-l-4 border-primary">
                    <div>
                      <div className="font-semibold text-gray-900">Diagnostic Fee</div>
                      <div className="text-sm text-gray-500">Comprehensive testing & report</div>
                    </div>
                    <div className="text-primary font-bold text-xl">R500</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-l-4 border-primary">
                    <div>
                      <div className="font-semibold text-gray-900">Manual Gearbox Repair</div>
                      <div className="text-sm text-gray-500">Clutch, synchros, bearings</div>
                    </div>
                    <div className="text-primary font-bold text-xl">From R15K</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-l-4 border-primary">
                    <div>
                      <div className="font-semibold text-gray-900">Auto Gearbox Repair</div>
                      <div className="text-sm text-gray-500">Valve body, torque converter</div>
                    </div>
                    <div className="text-primary font-bold text-xl">From R25K</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-l-4 border-primary">
                    <div>
                      <div className="font-semibold text-gray-900">Complete Rebuild</div>
                      <div className="text-sm text-gray-500">Full overhaul with new parts</div>
                    </div>
                    <div className="text-primary font-bold text-xl">From R40K</div>
                  </div>
                </div>
                
                {/* Warranty Info */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-8">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-semibold text-gray-900">9-Month Repair Warranty Included</span>
                  </div>
                  <p className="text-sm text-gray-600">All repairs come with comprehensive warranty coverage for your peace of mind.</p>
                </div>
                
                {/* CTA Button */}
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  }
                  onClick={() => console.log('Request quote clicked')}
                >
                  REQUEST A SERVICE QUOTE
                </Button>
                
                {/* Note */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  *Diagnostic fee waived if you proceed with repair
                </p>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary/20 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;