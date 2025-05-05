import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { Mail, PhoneCall, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { contactInfo } from '../constants';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary-50">
      <Container>
        <SectionTitle
          title="Get in Touch"
          subtitle="Have questions or want to get involved? Reach out to us."
          center
        />
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <Button variant="primary" type="submit" fullWidth>
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary-100 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-100 p-3 rounded-full mr-4">
                    <PhoneCall size={20} className="text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-100 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-700">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Connect With Us</h3>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-3">Join Our Community</h4>
                <p className="text-gray-700 mb-4">
                  Subscribe to our newsletter to stay updated on our work and opportunities to get involved.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your email address"
                  />
                  <Button className="rounded-l-none">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;