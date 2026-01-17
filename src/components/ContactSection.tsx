import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Button from './ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // EmailJS Configuration - USING YOUR CREDENTIALS
  const EMAILJS_SERVICE_ID = 'service_g777v9h';
  const EMAILJS_TEMPLATE_ID = 'template_kazjldf'; // You'll need to create this template
  const EMAILJS_USER_ID = 'CbwxXRe6jlSR8y-3F';

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID);
  }, []);

  const services = [
    'Gearbox Diagnostic',
    'Engine Diagnostic',
    'Manual Gearbox Repair',
    'Automatic Gearbox Repair',
    'Parts Supply',
    'Complete Rebuild',
    'Gearbox Replacement',
    'General Inquiry'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.service.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        timestamp: new Date().toISOString(),
        to_email: 'info@gearmaster.com' // Your business email
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', result.text);

      // Show success message
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 5000);

    } catch (error: any) {
      console.error('Email sending failed:', error);
      
      // Provide user-friendly error messages
      if (error.text) {
        setError(`Failed to send message: ${error.text}`);
      } else if (error.status === 0) {
        setError('Network error. Please check your internet connection and try again.');
      } else {
        setError('Failed to send message. Please try again or contact us directly at info@gearmaster.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-bold text-sm tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-gradient">Our Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about your gearbox? Need a quote or diagnostic? Our team is ready to help you with professional advice and solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200">
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            
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
                  {formData.email && (
                    <span className="block mt-2 text-sm">
                      We've received your inquiry about "{formData.service}"
                    </span>
                  )}
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      service: '',
                      message: ''
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{error}</span>
                    </div>
                  </div>
                )}
                
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
                      minLength={2}
                      maxLength={100}
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
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                      pattern="[0-9\s\-\(\)\+]+"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="(123) 456-7890"
                    />
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
                    minLength={10}
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your gearbox issue, vehicle details, and any symptoms you're experiencing..."
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/1000 characters
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="w-5 h-5 text-primary rounded focus:ring-primary focus:ring-2"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to the terms and conditions and allow GearMaster to contact me regarding my inquiry.
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
          
          {/* Right Column - Contact Info & Map */}
          <div>
            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Call Us</h4>
                    <p className="text-gray-600">Speak with an expert</p>
                  </div>
                </div>
                <a href="tel:1234567890" className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri: 8AM-6PM, Sat: 9AM-1PM</p>
              </div>
              
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Email Us</h4>
                    <p className="text-gray-600">For inquiries & quotes</p>
                  </div>
                </div>
                <a href="mailto:info@gearmaster.com" className="text-xl font-bold text-gray-900 hover:text-primary transition-colors break-all">
                  info@gearmaster.com
                </a>
                <p className="text-sm text-gray-500 mt-2">24/7 email support</p>
              </div>
            </div>
            
            {/* Location Card */}
            <div className="bg-gray-900 text-white rounded-2xl overflow-hidden mb-8">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Visit Our Workshop</h4>
                    <p className="text-gray-300">Come see us in person</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-lg font-semibold">Unit 1-3, Verona Industrial Park</p>
                  <p className="text-gray-300">23 Staal St, Randburg, 2169</p>
                  <p className="text-gray-300">Gauteng, South Africa</p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <h5 className="font-bold mb-3">Business Hours</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Monday - Friday</p>
                      <p className="font-semibold">8:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Saturday</p>
                      <p className="font-semibold">9:00 AM - 1:00 PM</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Sunday</p>
                      <p className="font-semibold">Emergency Only</p>
                    </div>
                    <div>
                      <p className="text-gray-400">24/7 Emergency</p>
                      <p className="font-semibold text-primary">Call (084) 889-9268</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="h-48 bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                    </svg>
                    <p className="text-gray-500">Interactive Map Location</p>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg"></div>
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
                  <h4 className="font-bold text-lg">Emergency Service</h4>
                  <p className="text-white/80">Stranded? We can help!</p>
                </div>
              </div>
              <p className="mb-4 text-white/90">
                If your vehicle breaks down or you're stranded with gearbox issues, call our emergency hotline for immediate assistance.
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
                onClick={() => window.location.href = 'tel:1234567890'}
              >
                CALL EMERGENCY HOTLINE: (123) 456-7890
              </Button>
            </div>
          </div>
        </div>
        
        {/* Quick Contact Banner */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="text-gray-600">Call, email, or visit us - we're here to help</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                }
                onClick={() => window.location.href = 'tel:1234567890'}
              >
                Call Now
              </Button>
              <Button
                variant="outline"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                }
                onClick={() => window.location.href = '#contact'}
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                }
                onClick={() => window.open('https://maps.google.com/?q=Unit+1-3,+Verona+Industrial+Park+23+Staal+St,+Randburg,+2169', '_blank')}
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;