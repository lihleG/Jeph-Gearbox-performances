import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  vehicle: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicle: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Gearbox Diagnostic',
    'Manual Gearbox Repair',
    'Automatic Gearbox Repair',
    'Parts Supply',
    'Complete Rebuild',
    'Gearbox Replacement',
    'General Inquiry',
    'Quote Request',
    'Warranty Claim'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        vehicle: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      ),
      title: 'Call Us',
      details: ['(084) 889-9268', 'Emergency: (084) 889-9269'],
      description: 'Available 24/7 for emergency breakdowns',
      link: 'tel:0848899268',
      color: 'primary'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Email Us',
      details: ['info@gearmaster.co.za', 'service@gearmaster.co.za'],
      description: 'Response within 2 hours during business hours',
      link: 'mailto:info@gearmaster.co.za',
      color: 'secondary'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      title: 'Visit Us',
      details: ['Unit 1-3, Verona Industrial Park', '23 Staal St, Randburg, 2169', 'Gauteng, South Africa'],
      description: 'Free on-site parking available',
      link: 'https://www.google.com/maps?q=Unit+1-3+Verona+Industrial+Park+23+Staal+St+Randburg+2169+Gauteng+South+Africa',
      color: 'primary'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Emergency Only'],
      description: 'By appointment only',
      link: null,
      color: 'secondary'
    }
  ];

  // Google Maps embed URL with your exact address
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.580318265707!2d27.9999786150307!3d-26.15517318346857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e959271a3ad49cf%3A0x88dc02f202f53421!2sUnit%201-3%2C%20Verona%20Industrial%20Park%2C%2023%20Staal%20St%2C%20Randburg%2C%202169%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1712345678901!5m2!1sen!2sza`;

  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Unit 1-3, Verona Industrial Park, 23 Staal St, Randburg, 2169, Gauteng, South Africa')}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="font-bold text-sm tracking-wider">GET IN TOUCH</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Contact <span className="text-gradient">Our Experts</span>
            </h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Have questions about your gearbox? Need a quote or diagnostic? Our team is ready to help you with professional advice and solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  info.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-secondary/10 text-secondary'
                }`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{info.title}</h3>
                <div className="space-y-2 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mb-4">{info.description}</p>
                {info.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      info.color === 'primary' 
                        ? 'border-primary text-primary hover:bg-primary/10' 
                        : 'border-secondary text-secondary hover:bg-secondary/10'
                    }`}
                    onClick={() => window.open(info.link!, info.link?.startsWith('mailto:') || info.link?.startsWith('tel:') ? '_self' : '_blank')}
                  >
                    {info.link.startsWith('tel:') ? 'Call Now' : 
                     info.link.startsWith('mailto:') ? 'Send Email' : 
                     'Get Directions'}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Send us a message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible. All fields marked with * are required.
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h4>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting GearMaster. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="(084) 889-9268"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Make & Model *
                      </label>
                      <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="e.g., Toyota Hilux 2.8 GD-6"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your gearbox issue, vehicle details, and any symptoms you're experiencing..."
                    />
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="w-5 h-5 text-primary rounded focus:ring-primary focus:ring-2 mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I agree to the terms and conditions and allow GearMaster to contact me regarding my inquiry. *
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    className="mt-6"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        SEND MESSAGE
                      </span>
                    )}
                  </Button>
                </form>
              )}
              
              {/* Response Time Note */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>We typically respond within 2 hours during business hours</span>
                </div>
              </div>
            </div>
            
            {/* Map & Location */}
            <div className="space-y-8">
              {/* Google Maps Embed */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <div className="h-64 md:h-80 bg-gray-800 relative">
                  <iframe
                    src={googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GearMaster Location Map"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Our Location</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">Unit 1-3, Verona Industrial Park</p>
                        <p className="text-gray-600">23 Staal St, Randburg, 2169</p>
                        <p className="text-gray-600">Gauteng, South Africa</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h1m0 0h-1m1 0v4m5-5a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Landmark</p>
                        <p className="text-gray-600">Near Brightwater Commons</p>
                        <p className="text-gray-600">Opposite BMW Auto Atlantic</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Parking</p>
                        <p className="text-gray-600">Free on-site parking for customers</p>
                        <p className="text-gray-600">Secure premises with CCTV</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    fullWidth
                    className="mt-2"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    }
                    onClick={() => window.open(googleMapsLink, '_blank')}
                  >
                    GET DIRECTIONS ON GOOGLE MAPS
                  </Button>
                </div>
              </div>
              
              {/* Emergency Services */}
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Emergency Breakdown Service</h4>
                    <p className="text-white/80">Stranded? We can help!</p>
                  </div>
                </div>
                <p className="mb-4 text-white/90">
                  If your vehicle breaks down or you're stranded with gearbox issues, call our emergency hotline for immediate assistance and roadside recovery.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                  className="bg-white text-primary hover:bg-gray-100"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  }
                  onClick={() => window.open('tel:0848899269', '_self')}
                >
                  📞 EMERGENCY HOTLINE: (084) 889-9269
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-gradient">FAQ</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about contacting and visiting our workshop
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                q: 'Do I need an appointment to visit your workshop?',
                a: 'Yes, we recommend making an appointment to ensure we can give your vehicle the attention it deserves. Walk-ins are accepted but may experience longer wait times.'
              },
              {
                q: 'What information should I have ready when I call?',
                a: 'Please have your vehicle make, model, year, and symptoms ready. If possible, note any recent repairs or maintenance performed on your gearbox.'
              },
              {
                q: 'Do you offer vehicle collection and delivery?',
                a: 'Yes, we offer free collection and delivery within a 20km radius of our Randburg workshop for major repairs. Contact us for details.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept cash, credit/debit cards, EFT, and offer payment plans for larger repairs through approved credit providers.'
              },
              {
                q: 'Can you provide loan vehicles?',
                a: 'Yes, we have a limited number of loan vehicles available for customers whose repairs will take more than 3 days. Availability is on a first-come, first-served basis.'
              },
              {
                q: 'Do you work on commercial vehicles?',
                a: 'Yes, we repair gearboxes for light commercial vehicles including bakkies, vans, and small trucks up to 3.5 tons.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold mb-3 text-gray-900 flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                  </svg>
                  {faq.q}
                </h4>
                <p className="text-gray-600 ml-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today for professional gearbox diagnostics, repair, or quality parts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => window.open('tel:0848899268', '_self')}
              >
                📞 CALL NOW: (084) 889-9268
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white hover:bg-white/10"
                onClick={() => console.log('Book appointment clicked')}
              >
                📅 BOOK APPOINTMENT
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white hover:bg-white/10"
                onClick={() => window.open(googleMapsLink, '_blank')}
              >
                📍 GET DIRECTIONS
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;