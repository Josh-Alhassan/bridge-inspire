import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { Heart, Users, GraduationCap } from "lucide-react";

const Donate = () => {
  return (
    <section
      id="donate"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-50"></div>
      <Container className="relative z-10">
        <SectionTitle
          title="Support Our Mission"
          subtitle="Your contribution helps us empower more girls and women across Nigeria."
          center
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                How Your Donation Helps
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap size={28} className="text-primary-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-700 text-sm">
                    Provides educational materials, scholarships, and learning
                    resources
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={28} className="text-primary-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Mentorship</h4>
                  <p className="text-gray-700 text-sm">
                    Supports leadership training and mentorship programs
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart size={28} className="text-primary-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Community</h4>
                  <p className="text-gray-700 text-sm">
                    Builds safe spaces and community resources
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Select Amount</h4>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[
                    "₦5,000",
                    "₦10,000",
                    "₦25,000",
                    "₦50,000",
                    "₦100,000",
                    "Custom",
                  ].map((amount, index) => (
                    <button
                      key={index}
                      className={`${
                        index === 2
                          ? "bg-primary-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      } border border-gray-200 rounded-md py-3 font-medium transition-colors`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button variant="accent" size="lg" className="w-full md:w-auto">
                  Donate Now
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  All donations are secure and tax-deductible.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                Other Ways to Help
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-accent-100 rounded-full p-1 mr-3 mt-1">
                    <span className="block w-2 h-2 bg-accent-500 rounded-full"></span>
                  </span>
                  <div>
                    <span className="font-medium text-gray-900">Volunteer</span>
                    <p className="text-gray-700 text-sm">
                      Share your skills and time with our organization
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-100 rounded-full p-1 mr-3 mt-1">
                    <span className="block w-2 h-2 bg-accent-500 rounded-full"></span>
                  </span>
                  <div>
                    <span className="font-medium text-gray-900">
                      Partner With Us
                    </span>
                    <p className="text-gray-700 text-sm">
                      Explore corporate partnerships and sponsorships
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-100 rounded-full p-1 mr-3 mt-1">
                    <span className="block w-2 h-2 bg-accent-500 rounded-full"></span>
                  </span>
                  <div>
                    <span className="font-medium text-gray-900">
                      Spread the Word
                    </span>
                    <p className="text-gray-700 text-sm">
                      Share our mission on social media and with your network
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                Corporate Giving
              </h3>
              <p className="text-gray-700 mb-4">
                Partner with us to make a significant impact through corporate
                social responsibility initiatives, employee matching programs,
                or event sponsorships.
              </p>
              <Button variant="outline">Contact for Partnership</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Donate;
