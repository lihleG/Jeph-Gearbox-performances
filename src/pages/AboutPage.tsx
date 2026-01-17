import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  const journeySteps = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Started as a mobile mechanic, traveling to customers\' homes to fix gearbox issues. Built reputation through word-of-mouth.',
      icon: '🚗'
    },
    {
      year: '2013',
      title: 'Growing Clientele',
      description: 'Expanded client base significantly. Started specializing exclusively in gearbox repairs and diagnostics.',
      icon: '📈'
    },
    {
      year: '2015',
      title: 'Mechanical Engineering',
      description: 'Enrolled in mechanical engineering studies to deepen technical knowledge and improve repair methodologies.',
      icon: '🎓'
    },
    {
      year: '2018',
      title: 'First Workshop',
      description: 'Opened first dedicated gearbox repair workshop in Verona Industrial Park with 2 employees.',
      icon: '🏭'
    },
    {
      year: '2020',
      title: 'Expansion',
      description: 'Expanded workshop space and team. Invested in specialized diagnostic equipment and training.',
      icon: '⚙️'
    },
    {
      year: '2023',
      title: 'GearMaster Today',
      description: 'Now serving hundreds of customers monthly with a team of 8 certified technicians and comprehensive services.',
      icon: '🛠️'
    }
  ];

  const values = [
    {
      title: 'Expertise',
      description: 'Combining practical experience with mechanical engineering knowledge for superior solutions.',
      icon: '🧠'
    },
    {
      title: 'Integrity',
      description: 'Honest assessments, transparent pricing, and doing what\'s right for every customer.',
      icon: '🤝'
    },
    {
      title: 'Quality',
      description: 'Using only premium parts and following strict quality control procedures on every repair.',
      icon: '⭐'
    },
    {
      title: 'Reliability',
      description: 'Standing behind our work with comprehensive warranties and exceptional after-service support.',
      icon: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="font-bold text-sm tracking-wider">OUR STORY</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Meet <span className="text-primary">Jephias Mabuyane</span>
              </h1>
              <p className="text-xl mb-10 max-w-4xl mx-auto opacity-90">
                Founder, Lead Technician, and the driving force behind GearMaster Gearbox Specialists
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Jephias's Story */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4 text-2xl font-bold">
                    JM
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">The Founder's Vision</h3>
                    <p className="opacity-80">Jephias Mabuyane, Owner & Lead Engineer</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-lg">
                  <p>
                    My journey in automotive repair began with a simple passion: understanding how things work and fixing what's broken. 
                    I started my career as a mobile mechanic, traveling to people's homes across Gauteng to solve their car problems.
                  </p>
                  <p>
                    What started as one-man house calls quickly grew through word-of-mouth. People appreciated 
                    the honest, quality work and personal touch that big workshops couldn't provide. This personal approach 
                    remains at the heart of GearMaster today.
                  </p>
                  <p>
                    To serve my growing clientele better, I pursued formal mechanical engineering education 
                    while continuing to work. This combination of hands-on experience and theoretical knowledge 
                    became our unique advantage in solving complex gearbox issues.
                  </p>
                  <p className="font-semibold text-primary">
                    Today, that same commitment to excellence drives every repair at GearMaster. Every vehicle that 
                    comes through our workshop receives the same attention to detail I provided when I was working 
                    from my own garage.
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div>
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold mb-6">Jephias's Credentials</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-primary text-lg">🎓</span>
                      </div>
                      <div>
                        <p className="font-semibold">Mechanical Engineering Diploma</p>
                        <p className="text-sm text-gray-300">Specialized in Automotive Systems</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-primary text-lg">⏱️</span>
                      </div>
                      <div>
                        <p className="font-semibold">14+ Years Experience</p>
                        <p className="text-sm text-gray-300">Specializing in gearbox repair since 2010</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-primary text-lg">📜</span>
                      </div>
                      <div>
                        <p className="font-semibold">Certified Technician</p>
                        <p className="text-sm text-gray-300">RMI accredited with continuous training</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-primary text-lg">🎯</span>
                      </div>
                      <div>
                        <p className="font-semibold">Specialization</p>
                        <p className="text-sm text-gray-300">Expert in automatic and manual transmissions</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-3xl font-bold mb-1">14+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-3xl font-bold mb-1">2000+</div>
                    <div className="text-sm opacity-90">Gearboxes Repaired</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-3xl font-bold mb-1">98%</div>
                    <div className="text-sm opacity-90">Satisfaction Rate</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-3xl font-bold mb-1">8</div>
                    <div className="text-sm opacity-90">Certified Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in gearbox repair
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
              
              {/* Timeline steps */}
              <div className="space-y-12">
                {journeySteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`relative flex flex-col lg:flex-row items-center ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
                          <span className="font-bold">{step.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Center icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center text-2xl shadow-lg">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Spacer for desktop */}
                    <div className="lg:w-2/12"></div>
                    
                    {/* Empty div for alignment */}
                    <div className="lg:w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Mission Statement */}
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="text-primary font-bold text-sm tracking-wider">OUR MISSION</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why We Do <span className="text-gradient">What We Do</span>
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="mb-6 p-4 bg-primary/5 rounded-xl">
                    <p className="text-primary font-semibold italic">
                      "My goal has always been to provide the kind of service I would want for my own vehicle - 
                      honest, reliable, and done right the first time."
                    </p>
                    <p className="text-right mt-2 text-gray-600">- Jephias Mabuyane</p>
                  </div>
                  <p className="text-xl text-gray-700 mb-6">
                    To provide exceptional gearbox repair services that combine mechanical engineering precision 
                    with the personal touch of a trusted local mechanic.
                  </p>
                  <p className="text-gray-600">
                    We believe every customer deserves honest advice, fair pricing, and repairs that stand the 
                    test of time. Our mission is to fix not just gearboxes, but the anxiety that comes with 
                    automotive breakdowns. We treat every vehicle as if it were our own, and every customer 
                    as a member of our extended family.
                  </p>
                </div>
              </div>
              
              {/* Values */}
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="text-primary font-bold text-sm tracking-wider">OUR VALUES</span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                    >
                      <div className="text-3xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Vision */}
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <span className="font-bold text-sm tracking-wider">OUR VISION</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Building South Africa's Most Trusted Gearbox Specialist
                </h3>
                <p className="text-xl opacity-90 max-w-4xl mx-auto">
                  We envision expanding our expertise across Gauteng while maintaining the personal service 
                  that started our journey. Under Jephias's leadership, our goal is to set the standard for 
                  gearbox repair through continuous education, investment in technology, and unwavering 
                  commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jephias's Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Jephias's <span className="text-gradient">Philosophy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every repair at GearMaster
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Hands-On Leadership',
                  description: 'As the owner, Jephias is personally involved in complex diagnostic cases and quality checks.',
                  icon: '👨‍🔧'
                },
                {
                  title: 'Education First',
                  description: 'Continuous learning and training for himself and his team is a non-negotiable principle.',
                  icon: '📚'
                },
                {
                  title: 'Transparent Communication',
                  description: 'Clear explanations of problems, solutions, and costs before any work begins.',
                  icon: '🗣️'
                },
                {
                  title: 'Quality Over Speed',
                  description: 'Taking the time to do repairs properly the first time, even if it means longer repair times.',
                  icon: '⏳'
                },
                {
                  title: 'Community Focus',
                  description: 'Supporting local businesses and building long-term relationships with customers.',
                  icon: '🤝'
                },
                {
                  title: 'Innovation',
                  description: 'Investing in new diagnostic tools and staying current with evolving automotive technology.',
                  icon: '💡'
                }
              ].map((principle, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              ))}
            </div>
            
            {/* Jephias's Commitment */}
            <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                  💪
                </div>
                <h3 className="text-3xl font-bold mb-4">Jephias's Personal Commitment</h3>
              </div>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-center mb-6">
                  "I stand behind every repair that leaves our workshop. If you're not completely satisfied with our work, 
                  I will personally make it right. This business was built on trust, and I intend to keep it that way."
                </p>
                <div className="text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
                    <span className="font-bold">Jephias Mabuyane</span>
                  </div>
                  <p className="text-gray-300 mt-2">Owner & Lead Technician, GearMaster</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GearMaster */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">GearMaster</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the competitive world of automotive repair
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: 'Owner Involvement', 
                  description: 'Jephias is hands-on with complex repairs and personally reviews every job',
                  icon: '👨‍💼'
                },
                { 
                  title: 'Engineering Background', 
                  description: 'Combines practical experience with mechanical engineering principles',
                  icon: '⚙️'
                },
                { 
                  title: 'Personal Service', 
                  description: 'We remember you and your vehicle\'s history - no anonymous service here',
                  icon: '❤️'
                },
                { 
                  title: 'Transparent Pricing', 
                  description: 'No hidden fees, clear explanations of all costs before work begins',
                  icon: '💰'
                },
                { 
                  title: 'Comprehensive Warranty', 
                  description: 'Industry-leading warranty on all parts and labor',
                  icon: '🛡️'
                },
                { 
                  title: 'Modern Equipment', 
                  description: 'State-of-the-art diagnostic tools for accurate problem identification',
                  icon: '🔧'
                },
                { 
                  title: 'Emergency Service', 
                  description: '24/7 emergency breakdown assistance available',
                  icon: '🚨'
                },
                { 
                  title: 'Local Knowledge', 
                  description: '14+ years serving the Gauteng community',
                  icon: '📍'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
              👋
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visit Our Workshop
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Come meet Jephias and see our workshop for yourself
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => window.location.href = '#contact'}
            >
              BOOK A DIAGNOSTIC
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white hover:bg-white/10"
              onClick={() => window.open('https://maps.google.com/?q=Unit+1-3,+Verona+Industrial+Park+23+Staal+St,+Randburg,+2169', '_blank')}
            >
              GET DIRECTIONS
            </Button>
          </div>
          <div className="mt-8">
            <p className="text-lg font-semibold mb-2">Meet Jephias at:</p>
            <p className="text-sm opacity-80">
              Unit 1-3, Verona Industrial Park, 23 Staal St, Randburg, 2169 | (084) 889-9268
            </p>
            <p className="text-sm opacity-80 mt-2">
              Hours: Mon-Fri 8AM-6PM, Sat 9AM-1PM | Emergency service available 24/7
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;