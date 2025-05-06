import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { teamMembers } from "../constants";

const Team = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <Container>
        <SectionTitle
          title="Our Team"
          subtitle="Meet the dedicated women leading our foundation and driving our mission forward."
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {member.role}
                </p>
                {/* <p className="text-gray-700 text-sm">{member.bio}</p> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Join Our Team
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We're always looking for passionate individuals to join our mission.
            If you're committed to empowering girls and women in Nigeria, we'd
            love to hear from you.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md px-6 py-3 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Team;
