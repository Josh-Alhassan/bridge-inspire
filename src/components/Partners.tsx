import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { partners } from "../constants";

const Partners = () => {
  return (
    <section id="partners" className="section-padding bg-gray-50">
      <Container>
        <SectionTitle
          title="Our Partners"
          subtitle="We collaborate with organizations that share our vision of empowering girls and women across Nigeria."
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-primary-600 mb-2 block">
                  {partner.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  {partner.name}
                </h3>
                <p className="text-gray-700">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Become a Partner
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Join us in our mission to empower girls and women across Nigeria. We
            welcome partnerships with organizations that share our commitment to
            creating positive change through education, mentorship, and
            community development.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md px-6 py-3 transition-colors"
          >
            Contact Us for Partnership
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
