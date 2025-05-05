import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { programs } from "../constants";

import gybGirls from "../assets/gyb-girls.jpeg";

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-gray-50">
      <Container>
        <SectionTitle
          title="What We Do"
          subtitle="Our programs focus on empowering girls and women through education, mentorship, and capacity building."
          center
        />

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <program.icon size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                {program.title}
              </h3>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div
              className="h-64 md:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${gybGirls})` }}
            />
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Our Approach
              </h3>
              <p className="text-gray-700 mb-6">
                We believe in a holistic approach that addresses the full
                spectrum of challenges facing girls and women in Nigerian
                communities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-accent-100 rounded-full p-1 mr-3 mt-1">
                    <span className="block w-2 h-2 bg-accent-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-700">
                    Community-centered programming that responds to local needs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-100 rounded-full p-1 mr-3 mt-1">
                    <span className="block w-2 h-2 bg-accent-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-700">
                    Long-term commitment to sustainable development
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-100 rounded-full p-1 mr-3 mt-1">
                    <span className="block w-2 h-2 bg-accent-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-700">
                    Partnerships with local schools, businesses, and government
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-100 rounded-full p-1 mr-3 mt-1">
                    <span className="block w-2 h-2 bg-accent-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-700">
                    Focus on measurable, transformative outcomes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Programs;
