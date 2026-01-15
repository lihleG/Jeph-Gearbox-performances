import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';

interface ServiceDetail {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  process: string[];
  priceRange: string;
  warranty: string;
  typicalTime: string;
  image: string;
  icon: React.ReactNode;
}

const ServicesPage: React.FC = () => {
  const services: ServiceDetail[] = [
    {
      id: 1,
      title: 'Gearbox Diagnostic',
      description: 'Comprehensive gearbox testing and analysis',
      fullDescription: 'Our advanced diagnostic equipment allows us to pinpoint exact gearbox issues with precision. We perform computer-based analysis, road tests, and detailed inspections to identify problems before repairs begin.',
      features: [
        'Computerized diagnostic scanning',
        'Road test and performance analysis',
        'Fluid inspection and analysis',
        'Detailed report with recommendations',
        'Pre-repair cost estimation'
      ],
      process: [
        'Initial consultation and symptom discussion',
        'Computer diagnostic scanning',
        'Road test with technician',
        'Visual inspection and fluid check',
        'Detailed report generation'
      ],
      priceRange: 'R500',
      warranty: 'Included with repair',
      typicalTime: '1-2 hours',
      image: '/images/mechanic1.jpeg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Manual Gearbox Repair',
      description: 'Expert repair for manual transmission systems',
      fullDescription: 'Specializing in manual gearbox repairs including clutch replacement, synchro repair, bearing replacement, and complete overhauls. We work on all makes and models with OEM-quality parts.',
      features: [
        'Clutch replacement and adjustment',
        'Synchromesh repair/replacement',
        'Bearing and seal replacement',
        'Gear teeth repair',
        'Complete transmission rebuild'
      ],
      process: [
        'Diagnostic assessment',
        'Removal of gearbox from vehicle',
        'Complete disassembly and inspection',
        'Parts replacement as needed',
        'Reassembly and installation',
        'Test drive and adjustment'
      ],
      priceRange: 'R15,000 - R30,000',
      warranty: '9 Months',
      typicalTime: '2-3 days',
      image: '/images/mechanic2.jpeg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Automatic Gearbox Repair',
      description: 'Professional automatic transmission services',
      fullDescription: 'We specialize in automatic gearbox repairs including torque converter replacement, valve body repair, clutch pack replacement, and electronic control unit programming.',
      features: [
        'Torque converter repair/replacement',
        'Valve body overhaul',
        'Clutch pack replacement',
        'Seal and gasket replacement',
        'Electronic control unit diagnostics'
      ],
      process: [
        'Computer diagnostic scanning',
        'Fluid analysis and replacement',
        'Component testing',
        'Disassembly and repair',
        'Reassembly and testing',
        'Road test and calibration'
      ],
      priceRange: 'R25,000 - R50,000',
      warranty: '9 Months',
      typicalTime: '3-4 days',
      image: '/images/mechanic3.jpeg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Parts Supply',
      description: 'Quality new and second-hand gearbox parts',
      fullDescription: 'We supply brand new OEM-quality parts as well as carefully inspected and tested second-hand parts. All parts come with appropriate warranties and are guaranteed to meet specifications.',
      features: [
        'Brand new OEM parts',
        'Quality tested second-hand parts',
        'Full warranty coverage',
        'Competitive pricing',
        'Same-day availability for many items'
      ],
      process: [
        'Part identification and sourcing',
        'Quality inspection',
        'Testing and validation',
        'Warranty processing',
        'Installation (optional)'
      ],
      priceRange: 'Varies by part',
      warranty: '30 Days',
      typicalTime: 'Same day/Next day',
      image: '/images/mechanic4.jpeg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: 'Complete Rebuilds',
      description: 'Full gearbox overhaul and restoration',
      fullDescription: 'Complete gearbox rebuilds involve disassembling the entire transmission, replacing all worn components, and reassembling to like-new condition. This is our most comprehensive service for severely damaged or high-mileage gearboxes.',
      features: [
        'Complete disassembly and inspection',
        'All seals and gaskets replaced',
        'Updated components installed',
        'Bench testing before installation',
        'Extended warranty option available'
      ],
      process: [
        'Complete removal and disassembly',
        'Parts cleaning and inspection',
        'Replacement of all worn components',
        'Precision reassembly',
        'Bench testing',
        'Installation and road test'
      ],
      priceRange: 'R40,000 - R80,000',
      warranty: '9 Months (extendable)',
      typicalTime: '5-7 days',
      image: '/images/mechanic5.jpeg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full mb-6">
              <span className="text-primary font-bold text-sm tracking-wider">OUR SERVICES</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Professional <span className="text-gradient">Gearbox Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Expert gearbox diagnostics, repair, and parts supply with comprehensive warranties. 
              Our certified technicians ensure your vehicle gets the professional care it deserves.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => console.log('Book diagnostic clicked')}
              >
                BOOK A DIAGNOSTIC
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => console.log('Get quote clicked')}
              >
                GET A QUOTE
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`mb-20 ${index % 2 === 0 ? '' : ''}`}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={`${service.title} - GearMaster`}
                        className="w-full h-64 md:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <div className="inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2">
                            {service.icon}
                          </div>
                          <span className="text-white font-semibold">{service.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">
                      {service.fullDescription}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-sm text-gray-500 mb-1">Starting From</div>
                        <div className="text-2xl font-bold text-primary">{service.priceRange}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-sm text-gray-500 mb-1">Warranty</div>
                        <div className="text-2xl font-bold text-primary">{service.warranty}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-sm text-gray-500 mb-1">Typical Time</div>
                        <div className="text-2xl font-bold text-primary">{service.typicalTime}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-sm text-gray-500 mb-1">Deposit Required</div>
                        <div className="text-2xl font-bold text-primary">Based on job</div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4 text-gray-900">Key Features</h4>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      className="w-full md:w-auto"
                      onClick={() => console.log(`Inquire about ${service.title}`)}
                    >
                      INQUIRE ABOUT THIS SERVICE
                    </Button>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="mt-20 pt-8 border-t border-gray-200">
                    <div className="flex justify-center">
                      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Service <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial contact to final delivery, we follow a systematic process to ensure quality and satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss symptoms and vehicle history' },
              { step: '02', title: 'Diagnostic', desc: 'Comprehensive testing and analysis' },
              { step: '03', title: 'Quotation', desc: 'Transparent pricing and timeline' },
              { step: '04', title: 'Repair', desc: 'Expert service with quality parts' },
              { step: '05', title: 'Testing', desc: 'Rigorous testing and quality check' }
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="font-bold text-lg mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Your Gearbox Fixed?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for professional gearbox diagnostics, repair, or quality parts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => console.log('Call now clicked')}
            >
              📞 CALL NOW: (123) 456-7890
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white hover:bg-white/10"
              onClick={() => console.log('Book appointment clicked')}
            >
              📅 BOOK APPOINTMENT
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
