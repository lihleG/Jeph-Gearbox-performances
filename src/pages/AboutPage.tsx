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

  const teamMembers = [
    {
      name: 'Thomas Johnson',
      role: 'Founder & Lead Technician',
      experience: '14+ years in gearbox repair',
      education: 'Mechanical Engineering Diploma',
      specialty: 'Complex diagnostic cases',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Placeholder: Mechanic
      quote: 'Every gearbox tells a story. Understanding that story is key to a perfect repair.'
    },
    {
      name: 'Sarah Williams',
      role: 'Service Manager',
      experience: '8 years automotive service',
      education: 'Customer Service Management',
      specialty: 'Client relations & scheduling',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Placeholder: Professional woman
      quote: 'We treat every customer like family - with care, respect, and honest communication.'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Technician',
      experience: '10 years specialist experience',
      education: 'Advanced Gearbox Technology',
      specialty: 'Automatic transmissions',
      image: 'https://images.unsplash.com/photo-1590650096513-4d2f3c6d95d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Placeholder: Technician
      quote: 'Precision and patience - the two most important tools in gearbox repair.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Placeholder Background */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background Image from Unsplash */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Gearbox workshop background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary-dark/70 mix-blend-multiply"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="font-bold text-sm tracking-wider">OUR STORY</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                From <span className="text-primary">Mobile Mechanic</span> to <span className="text-secondary">Industry Leader</span>
              </h1>
              <p className="text-xl mb-10 max-w-4xl mx-auto opacity-90">
                Discover the inspiring journey of how passion for gearbox repair grew into Gauteng's most trusted gearbox specialist service.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Owner's Story with Placeholder Image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Founder Thomas Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">The Founder's Vision</h3>
                    <p className="opacity-80">Thomas Johnson, Owner & Lead Engineer</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-lg">
                  <p>
                    It all started with a simple passion: understanding how things work and fixing what's broken. 
                    I began my career as a mobile mechanic, traveling to people's homes to solve their car problems.
                  </p>
                  <p>
                    What started as one-man house calls quickly grew through word-of-mouth. People appreciated 
                    the honest, quality work and personal touch that big workshops couldn't provide.
                  </p>
                  <p>
                    To serve my growing clientele better, I pursued formal mechanical engineering education 
                    while continuing to work. This combination of hands-on experience and theoretical knowledge 
                    became our unique advantage.
                  </p>
                  <p className="font-semibold text-primary">
                    Today, that same commitment to excellence drives every repair at GearMaster.
                  </p>
                </div>
              </div>
              
              {/* Stats with Workshop Image */}
              <div className="relative">
                <div className="bg-gray-800 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="GearMaster Workshop"
                    className="w-full h-48 object-cover opacity-80"
                  />
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
              {/* Mission Statement with Workshop Image */}
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="text-primary font-bold text-sm tracking-wider">OUR MISSION</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why We Do <span className="text-gradient">What We Do</span>
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="GearMaster Workshop Team"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <p className="text-xl text-gray-700 mb-6">
                    To provide exceptional gearbox repair services that combine mechanical engineering precision 
                    with the personal touch of a trusted local mechanic.
                  </p>
                  <p className="text-gray-600">
                    We believe every customer deserves honest advice, fair pricing, and repairs that stand the 
                    test of time. Our mission is to fix not just gearboxes, but the anxiety that comes with 
                    automotive breakdowns.
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
            
            {/* Vision with Background Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Vision for the future"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center p-8">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <span className="font-bold text-sm tracking-wider">OUR VISION</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Building South Africa's Most Trusted Gearbox Specialist
                  </h3>
                  <p className="text-xl opacity-90">
                    We envision expanding our expertise across Gauteng while maintaining the personal service 
                    that started our journey. Our goal is to set the standard for gearbox repair through continuous 
                    education, investment in technology, and unwavering commitment to customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to keeping South Africa's vehicles running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Team Member Image */}
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                      <span className="text-gray-900 font-semibold">{member.role}</span>
                    </div>
                  </div>
                </div>
                
                {/* Team Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-600">{member.experience}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                      </svg>
                      <span className="text-gray-600">{member.education}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-600">Specialty: {member.specialty}</span>
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <div className="border-l-4 border-primary pl-4 italic text-gray-600">
                    "{member.quote}"
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Why Choose Us with Workshop Image */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1601024445121-e5b82f020549?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="GearMaster Workshop Equipment"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center">
                <div className="max-w-6xl p-8">
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold mb-4 text-white">Why Choose GearMaster?</h3>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                      What sets us apart in the competitive world of automotive repair
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { title: 'Owner Involvement', desc: 'The founder is still hands-on with complex repairs' },
                      { title: 'Engineering Background', desc: 'Combines practical experience with engineering principles' },
                      { title: 'Personal Service', desc: 'We remember you and your vehicle\'s history' },
                      { title: 'Transparent Pricing', desc: 'No hidden fees, clear explanations of all costs' }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl font-bold mx-auto mb-4">
                          {index + 1}
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the GearMaster Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who trust us with their gearbox repairs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => console.log('Book diagnostic clicked')}
            >
              BOOK A DIAGNOSTIC
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white hover:bg-white/10"
              onClick={() => console.log('Visit workshop clicked')}
            >
              VISIT OUR WORKSHOP
            </Button>
          </div>
          <p className="mt-8 text-sm opacity-80">
            Verona Industrial Park, 23 Staal St, Randburg | (084) 889-9268
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;