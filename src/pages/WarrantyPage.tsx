import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';

const WarrantyPage: React.FC = () => {
  const warrantyTerms = [
    {
      title: 'Full Coverage',
      description: 'Complete protection for all repair work',
      icon: '✅',
      details: [
        'All labor and parts included',
        'Coverage for workmanship defects',
        'Replacement parts under warranty',
        'Additional labor if needed under warranty'
      ]
    },
    {
      title: '9-Month Warranty',
      description: 'For all manual and automatic gearbox repairs',
      icon: '🛠️',
      details: [
        'Valid for 9 months from completion date',
        'Transferable between vehicle owners',
        'Nationwide coverage',
        'No mileage restrictions'
      ]
    },
    {
      title: '30-Day Parts Warranty',
      description: 'For all new and second-hand parts',
      icon: '⚙️',
      details: [
        '30 days from date of installation',
        'Covers manufacturing defects',
        'Parts replacement guarantee',
        'Labor included for warranty replacements'
      ]
    },
    {
      title: 'Extended Warranty',
      description: 'Additional protection available',
      icon: '🛡️',
      details: [
        'Extendable up to 24 months',
        'Comprehensive coverage option',
        'Peace of mind guarantee',
        'Transferable to new owners'
      ]
    }
  ];

  const coverageItems = [
    'All internal gearbox components',
    'Replacement parts and labor',
    'Seals and gaskets',
    'Bearings and synchronizers',
    'Clutch plates (when part of gearbox repair)',
    'Torque converters (automatic repairs)'
  ];

  const nonCoverageItems = [
    'Damage caused by accidents or collisions',
    'Improper use or racing applications',
    'Neglect of required maintenance',
    'Fluid contamination from external sources',
    'Damage from improper installation elsewhere',
    'Normal wear and tear after warranty period'
  ];

  const warrantyProcess = [
    {
      step: 1,
      title: 'Warranty Registration',
      description: 'Register your warranty online or at our workshop immediately after repair completion.'
    },
    {
      step: 2,
      title: 'Keep Documentation',
      description: 'Maintain your warranty certificate and service records in a safe place.'
    },
    {
      step: 3,
      title: 'Regular Maintenance',
      description: 'Follow recommended service intervals and use approved transmission fluids.'
    },
    {
      step: 4,
      title: 'Warranty Claim',
      description: 'Contact us immediately if you experience any issues covered under warranty.'
    },
    {
      step: 5,
      title: 'Assessment',
      description: 'Our technicians will assess the vehicle to determine if the issue is warranty-covered.'
    },
    {
      step: 6,
      title: 'Resolution',
      description: 'If covered, we will repair or replace the components at no additional cost to you.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Warranty Hero Section with gearbox1 image */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900/90 to-gray-900/90 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/gearbox1.jpeg" 
            alt="Gearbox Components"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80 mix-blend-multiply"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="font-bold text-sm tracking-wider">PEACE OF MIND GUARANTEE</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Warranty</span> Promise
            </h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Backed by South Africa's most comprehensive gearbox warranty. We stand behind every repair with confidence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-2">9 Months</h3>
                <p className="opacity-90">Full Warranty on Repairs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold mb-2">30 Days</h3>
                <p className="opacity-90">Parts Warranty</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-2xl font-bold mb-2">Nationwide</h3>
                <p className="opacity-90">Coverage Across SA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Terms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Warranty Coverage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide industry-leading warranty protection for all our gearbox services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {warrantyTerms.map((term, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-600/20 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{term.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{term.title}</h3>
                <p className="text-gray-600 mb-4">{term.description}</p>
                <ul className="space-y-2">
                  {term.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details with gearbox2 image */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/gearbox2.jpeg" 
                  alt="Professional Gearbox Repair"
                  className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-full">
                    <span className="text-white font-semibold">Professional Quality</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-600 rounded-full opacity-20"></div>
            </div>

            {/* Coverage Lists Column */}
            <div className="space-y-8">
              {/* What's Covered */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-6">
                  <span className="font-bold">WHAT'S COVERED</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Full Protection Included</h3>
                <ul className="space-y-4">
                  {coverageItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Covered */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full mb-6">
                  <span className="font-bold">WHAT'S NOT COVERED</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Important Exclusions</h3>
                <ul className="space-y-4">
                  {nonCoverageItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Warranty Conditions */}
          <div className="max-w-4xl mx-auto mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">Warranty Terms & Conditions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Valid Warranty Requirements</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <span>Original warranty certificate must be presented</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <span>Vehicle must have current registration and license</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <span>Recommended service intervals must be followed</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <span>Only approved transmission fluids may be used</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Claim Process</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 text-sm">1</span>
                    </div>
                    <span>Contact us immediately when an issue arises</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 text-sm">2</span>
                    </div>
                    <span>Do not attempt repairs yourself during warranty</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 text-sm">3</span>
                    </div>
                    <span>Bring vehicle to our workshop for assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 text-sm">4</span>
                    </div>
                    <span>Approved claims repaired within 48-72 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Process with gearbox3 image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Warranty <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps from warranty registration to claim resolution
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Process Steps */}
            <div className="grid md:grid-cols-2 gap-6">
              {warrantyProcess.map((process) => (
                <div key={process.step} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-600/30 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    {process.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              ))}
            </div>

            {/* Image Column */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/gearbox3.jpeg" 
                  alt="Quality Gearbox Components"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-6 right-6">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-full">
                    <span className="text-white font-semibold">Premium Components</span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-400/90 backdrop-blur-sm rounded-full">
                    <span className="text-white font-semibold">Quality Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Warranty <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">FAQ</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our warranty coverage
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  q: 'Is the warranty transferable if I sell my vehicle?',
                  a: 'Yes, our warranty is fully transferable to subsequent owners. The new owner simply needs to provide the original warranty certificate and complete a transfer form.'
                },
                {
                  q: 'What happens if my gearbox fails during the warranty period?',
                  a: 'Contact us immediately. We will assess the vehicle, and if the failure is covered under warranty, we will repair or replace the affected components at no cost to you.'
                },
                {
                  q: 'Do I need to service my vehicle at your workshop to maintain warranty?',
                  a: 'No, but you must use approved transmission fluids and follow manufacturer service intervals. Keep all service records as they may be required for warranty claims.'
                },
                {
                  q: 'How long does a warranty repair take?',
                  a: 'Most warranty repairs are completed within 48-72 hours once the vehicle is in our workshop and the claim is approved.'
                },
                {
                  q: 'What documentation do I need for a warranty claim?',
                  a: 'You will need your original warranty certificate, vehicle registration documents, and any service records since the repair was completed.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold mb-3 text-gray-900 flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                    </svg>
                    {faq.q}
                  </h4>
                  <p className="text-gray-600 ml-9">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have Warranty Questions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for detailed information about our warranty coverage or to make a claim.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => console.log('Call now clicked')}
            >
              📞 CALL FOR WARRANTY INFO
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white hover:bg-white/10"
              onClick={() => console.log('Check warranty clicked')}
            >
              🔍 CHECK WARRANTY STATUS
            </Button>
          </div>
          <p className="mt-8 text-sm opacity-80">
            Warranty Office Hours: Mon-Fri 8:00-17:00 | Sat 8:00-13:00
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WarrantyPage;