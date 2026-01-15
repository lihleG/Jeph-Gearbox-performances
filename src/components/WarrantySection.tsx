import React from 'react';
import Badge from './ui/Badge';
import Button from './ui/Button';

interface PolicyItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const WarrantySection: React.FC = () => {
  const policies: PolicyItem[] = [
    {
      number: "01",
      title: "9-Month Repair Warranty",
      description: "All gearbox repairs come with a comprehensive 9-month warranty for complete peace of mind.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      highlight: true
    },
    {
      number: "02",
      title: "Damage-Based Pricing",
      description: "We assess each repair individually and charge according to the specific damage found, not a flat rate.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      number: "03",
      title: "Replacement Guarantee",
      description: "If you purchase a gearbox from us and it fails, we provide a replacement gearbox instead of a refund.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
      )
    },
    {
      number: "04",
      title: "30-Day Parts Warranty",
      description: "All gearboxes and parts purchased include a 30-day warranty period for quality assurance.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      number: "05",
      title: "Detailed Diagnostic Reports",
      description: "We provide comprehensive diagnostic reports with findings and recommendations for every vehicle.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )
    },
    {
      number: "06",
      title: "Job-Based Deposits",
      description: "Deposit requirements vary based on the scope and size of each repair job, ensuring fair terms.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="warranty" className="section-padding bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" animate={true}>WARRANTY & POLICIES</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8">
            Our <span className="text-gradient">Transparent Policies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Clear, fair policies designed to protect your investment and ensure your complete satisfaction.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {policies.map((policy) => (
            <div 
              key={policy.number}
              className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                policy.highlight 
                  ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30' 
                  : 'bg-gray-800 border border-gray-700 hover:border-primary/30'
              }`}
            >
              {/* Number Background */}
              <div className="absolute top-8 right-8 opacity-10">
                <div className="text-7xl font-bold text-white">{policy.number}</div>
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                policy.highlight 
                  ? 'bg-primary/20 border border-primary/30' 
                  : 'bg-gray-700 border border-gray-600'
              }`}>
                <div className={policy.highlight ? 'text-primary' : 'text-gray-300'}>
                  {policy.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {policy.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {policy.description}
              </p>
              
              {/* Highlight Badge */}
              {policy.highlight && (
                <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm font-semibold text-primary">Most Popular</span>
                </div>
              )}
              
              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-dark group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Warranty Details Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Details */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Understanding Your <span className="text-primary">Warranty Coverage</span>
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">What's Covered</h4>
                    <p className="text-gray-300">
                      All labor and parts related to the original repair. This includes any manufacturing defects or workmanship issues that arise during the warranty period.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">What's Not Covered</h4>
                    <p className="text-gray-300">
                      Damage from accidents, misuse, improper maintenance, or unrelated component failures. Wear items replaced during repair are covered for 30 days.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Warranty Claim Process</h4>
                    <p className="text-gray-300">
                      Contact us immediately if you suspect an issue. We'll schedule a diagnostic and repair any covered issues at no additional cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Warranty Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-1 shadow-2xl">
                <div className="bg-gray-800 rounded-2xl p-8">
                  {/* Card Header */}
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold text-primary mb-2">9</div>
                    <div className="text-2xl font-bold text-white">MONTH WARRANTY</div>
                    <div className="text-gray-300">On All Gearbox Repairs</div>
                  </div>
                  
                  {/* Warranty Timeline */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-300">Repair Date</span>
                      <span className="text-white font-semibold">Day 1</span>
                    </div>
                    <div className="relative h-2 bg-gray-700 rounded-full mb-8">
                      <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-dark rounded-full w-full"></div>
                      <div className="absolute top-0 left-1/4 w-0.5 h-3 -mt-0.5 bg-white"></div>
                      <div className="absolute top-0 left-1/2 w-0.5 h-3 -mt-0.5 bg-white"></div>
                      <div className="absolute top-0 left-3/4 w-0.5 h-3 -mt-0.5 bg-white"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">3 Months</span>
                      <span className="text-gray-300">6 Months</span>
                      <span className="text-white font-semibold">9 Months</span>
                    </div>
                  </div>
                  
                  {/* Warranty Card Details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-white">Full Labor Coverage</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-white">Parts & Components</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-white">No Hidden Costs</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Certificate Button */}
                  <Button
                    variant="secondary"
                    size="md"
                    fullWidth
                    className="mt-8"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    }
                    onClick={() => console.log('Download certificate clicked')}
                  >
                    DOWNLOAD WARRANTY CERTIFICATE
                  </Button>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary/30 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-primary/20 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="text-primary">Questions</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What happens if my repaired gearbox fails within 9 months?",
                answer: "We'll repair it again at no additional cost. Just bring it back with your warranty certificate."
              },
              {
                question: "Do you offer refunds on gearbox purchases?",
                answer: "No, we provide a replacement gearbox if it fails within the warranty period instead of a refund."
              },
              {
                question: "How is the repair cost determined?",
                answer: "We assess the actual damage and charge accordingly, not a flat rate. You'll get a detailed quote before work begins."
              },
              {
                question: "Are second-hand parts covered by warranty?",
                answer: "Yes, all parts we supply, including quality second-hand parts, come with a 30-day warranty."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary/30 transition-colors">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="text-primary mr-3">Q{index + 1}.</span>
                  {faq.question}
                </h4>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have more questions about our warranties or policies? Contact us for clarification.
          </p>
          <Button
            variant="primary"
            size="lg"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            }
            className="shadow-xl hover:shadow-2xl"
            onClick={() => console.log('Contact for clarification clicked')}
          >
            CONTACT FOR CLARIFICATION
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection;