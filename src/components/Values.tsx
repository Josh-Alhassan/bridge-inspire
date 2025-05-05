import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { values } from '../constants';

const Values = () => {
  return (
    <section id="values" className="section-padding bg-primary-600 text-white">
      <Container>
        <SectionTitle
          title="Our Core Values"
          subtitle="These principles guide our work and define our culture."
          center
          light
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <value.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-100">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-serif font-bold mb-6">Why Our Values Matter</h3>
          <p className="text-gray-100 mb-6">
            Our values aren't just words on a page—they're the foundation of how we operate and the standard to which we hold ourselves accountable. They shape our programs, guide our decisions, and define our relationships with the communities we serve.
          </p>
          <p className="text-gray-100">
            By embracing these values, we create an organization that not only delivers impactful programs but also models the kind of ethical leadership we hope to inspire in the next generation of changemakers.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Values;