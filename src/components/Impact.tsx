import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { impactStats, testimonials } from '../constants';
import { Quote } from 'lucide-react';

const Impact = () => {
  return (
    <section id="impact" className="section-padding bg-gray-50">
      <Container>
        <SectionTitle
          title="Our Impact"
          subtitle="Since our founding, we've reached thousands of girls and women across Nigeria, creating lasting change in communities."
          center
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary-600 mb-2">{stat.number}</p>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-8 relative"
              >
                <Quote size={40} className="text-primary-100 absolute top-6 right-6" />
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-primary-50 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Goals for 2025</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                    <span className="block w-2 h-2 bg-primary-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-700">Expand our programs to 5 additional states in Nigeria</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                    <span className="block w-2 h-2 bg-primary-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-700">Launch a digital literacy initiative reaching 2,000 young women</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                    <span className="block w-2 h-2 bg-primary-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-700">Establish 10 new community partnerships for sustainable development</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                    <span className="block w-2 h-2 bg-primary-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-700">Create a scholarship fund for 100 exceptional young women</span>
                </li>
              </ul>
            </div>
            <div className="relative h-72 md:h-80">
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8083743/pexels-photo-8083743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Girls in a classroom" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-600 bg-opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Impact;