import React from 'react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  warranty: string;
  icon: React.ReactNode;
  note?: string;
}

const ServicesSection: React.FC = () => {
  const services: ServiceCard[] = [
    {
      id: 1,
      title: 'Gearbox Diagnostic',
      description: 'Comprehensive gearbox testing using advanced diagnostic equipment to identify issues accurately.',
      features: ['Detailed report provided', 'Same-day service available', 'Pre-repair assessment'],
      price: 'R500',
      warranty: 'Included in repair',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
        </svg>
      ),
      note: 'Fee waived if you proceed with repair'
    },
    {
      id: 2,
      title: 'Engine Diagnostics',
      description: 'Complete engine performance analysis to identify mechanical and electrical issues.',
      features: ['Computerized testing', 'Performance analysis', 'Fuel system check'],
      price: 'R600',
      warranty: '30 days on findings',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Gearbox Repair',
      description: 'Expert repair of both automatic and manual gearboxes with damage-based pricing.',
      features: ['Automatic & manual repair', 'Damage-based pricing', 'OEM quality parts'],
      price: 'Damage-Based',
      warranty: '9 Months',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Parts Supply',
      description: 'Brand new and quality second-hand gearbox parts with comprehensive warranty.',
      features: ['Brand new parts', 'Quality second-hand', 'OEM specifications'],
      price: 'Varies by part',
      warranty: '30 Days',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: 'Complete Rebuilds',
      description: 'Full gearbox overhaul with new components, seals, and updated parts for extended lifespan.',
      features: ['Complete teardown', 'New seals & bearings', 'Updated components'],
      price: 'From R40K',
      warranty: '9 Months',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      )
    },
    {
      id: 6,
      title: 'Gearbox Replacement',
      description: 'Supply and installation of replacement gearboxes with replacement guarantee.',
      features: ['Supply & installation', 'No refund policy', 'Replacement guarantee'],
      price: 'R30K-R50K',
      warranty: '30 Days',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
      ),
      note: 'If gearbox fails, we replace it'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-bold text-sm tracking-wider">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Delivering Superior <span className="text-gradient">Gearbox Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional gearbox diagnostics, repair, and parts supply with comprehensive warranties and transparent pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-primary/20 overflow-hidden"
            >
              {/* Service Header */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-gray-500">Starting from</div>
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Warranty & Note */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <span className="text-sm font-semibold text-gray-900">{service.warranty} Warranty</span>
                  </div>
                  {service.note && (
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {service.note}
                    </span>
                  )}
                </div>
              </div>

              {/* Service Footer */}
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Deposit required</div>
                    <div className="font-semibold text-gray-900">Based on job size</div>
                  </div>
                  <Link to="/services" className="no-underline">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      }
                      className="group border-primary hover:bg-primary/10"
                    >
                      READ MORE
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Orange Accent Border */}
              <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Our Service <span className="text-primary">Guarantee</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <p className="text-gray-300">We charge for gearbox repair according to the damage found, not a flat rate.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <p className="text-gray-300">If you buy a gearbox from us and it fails, we give you another gearbox - no refunds.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <p className="text-gray-300">Deposit amount varies according to the size and scope of the repair job.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">9 MONTHS</div>
                <div className="text-xl font-semibold mb-2">Comprehensive Repair Warranty</div>
                <p className="text-gray-300 mb-6">All gearbox repairs include our industry-leading 9-month warranty for complete peace of mind.</p>
                <div className="inline-flex items-center px-4 py-2 bg-primary rounded-full text-white font-semibold">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  Warranty Certificate Included
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Not sure which service you need? Get a free diagnostic assessment from our experts.
          </p>
          <Link to="/services" className="inline-block no-underline">
            <Button
              variant="primary"
              size="lg"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              }
              className="shadow-xl hover:shadow-2xl"
            >
              SCHEDULE FREE DIAGNOSTIC
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;