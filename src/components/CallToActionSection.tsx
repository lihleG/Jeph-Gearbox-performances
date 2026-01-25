import React from 'react';
import Button from './ui/Button';

const CallToActionSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/30 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold tracking-wider">GET STARTED TODAY</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Ready to Fix Your <span className="text-white">Gearbox?</span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us now for a free diagnostic assessment or consultation. Our experts are ready to help you get back on the road with confidence.
            </p>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div className="text-2xl font-bold mb-2">Call Us</div>
                <div className="text-xl font-semibold">(010) 017-6733</div>
                <div className="text-gray-300 text-sm mt-2">Mon-Fri: 8AM-4PM</div>
                <div className="text-gray-300 text-sm mt-2">Sat-Sun: 8AM-3PM</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="text-2xl font-bold mb-2">Email Us</div>
                <div className="text-xl font-semibold">jephiasmabuyane08@gmail.com</div>
                <div className="text-gray-300 text-sm mt-2">24/7 Response</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div className="text-2xl font-bold mb-2">Visit Us</div>
                <div className="text-xl font-semibold">UNIT 1-3, Verona industrial Park,</div>
                <div className="text-gray-300 text-sm mt-2">23 Staal St, Randburg, 2169</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                }
                onClick={() => console.log('Call Now clicked')}
              >
                CALL NOW FOR QUOTE
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white hover:bg-white/20"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                }
                onClick={() => console.log('Book Appointment clicked')}
              >
                BOOK APPOINTMENT
              </Button>
            </div>

            {/* Quick Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-200">Free Diagnostic Assessment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-200">No Obligation Quote</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-200">Same-Day Service Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;