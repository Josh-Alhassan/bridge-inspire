import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

import girlsLearningCode from "../assets/girls-learning-2.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle
              title="Who We Are"
              subtitle="The Bridge Inspire Foundation is a women-led nonprofit organization committed to creating positive change."
            />

            <div className="space-y-6">
              <p className="text-gray-700">
                We empower underserved communities—especially adolescent girls
                and women—through a multi-pronged approach of education, health,
                economic empowerment, leadership development, and humanitarian
                support.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-600">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  A society where every girl blossoms into a confident, capable,
                  and compassionate leader, equipped to shape her own future and
                  create positive change.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent-400">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To equip young women with the tools, opportunities, and voice
                  to thrive through education, advocacy, leadership mentoring,
                  and socio-economic empowerment.
                </p>
              </div>

              <p className="text-gray-700">
                At the core of our work is the belief that empowered girls can
                break cycles of poverty, violence, and exclusion—becoming agents
                of transformation in their families and communities.
              </p>

              <Button
                variant="primary"
                onClick={() =>
                  document
                    .getElementById("programs")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Our Programs
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="rounded-2xl overflow-hidden h-[400px] md:h-[500px] relative shadow-xl">
              <img
                src={girlsLearningCode}
                alt="Girls in educational program"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary-100 rounded-lg p-4 shadow-lg hidden md:block">
              <div className="bg-white h-full w-full rounded flex items-center justify-center p-4">
                <p className="text-center text-primary-800 font-serif font-bold">
                  Empowering over 5,000 girls since 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
