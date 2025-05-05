import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import {
  Mail,
  PhoneCall,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { contactInfo } from "../constants";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <SectionTitle
          title="Get in Touch"
          subtitle="Have questions or want to get involved? Reach out to us."
          center
        />

        <div className="contact-grid">
          <div>
            <div className="contact-card">
              <h3 className="contact-title">Send Us a Message</h3>

              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <select id="subject" className="form-input">
                    <option value="">Select a subject</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="partnership">
                      Partnership Opportunities
                    </option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="form-input form-textarea"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <Button variant="primary" type="submit" fullWidth>
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-card">
              <h3 className="contact-title">Contact Information</h3>

              <div>
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <Mail size={20} className="contact-icon" />
                  </div>
                  <div>
                    <h4 className="contact-info-title">Email</h4>
                    <p className="contact-info-text email-font">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <PhoneCall size={20} className="contact-icon" />
                  </div>
                  <div>
                    <h4 className="contact-info-title">Phone</h4>
                    <p className="contact-info-text">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <MapPin size={20} className="contact-icon" />
                  </div>
                  <div>
                    <h4 className="contact-info-title">Location</h4>
                    <p className="contact-info-text">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <h3 className="contact-title">Connect With Us</h3>

              <div className="social-links">
                <a href="#" className="social-link facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link twitter">
                  <Twitter size={20} />
                </a>
              </div>

              <div className="mt-6">
                <h4 className="contact-info-title">Join Our Community</h4>
                <p className="contact-info-text mb-4">
                  Subscribe to our newsletter to stay updated on our work and
                  opportunities to get involved.
                </p>
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Your email address"
                  />
                  <Button className="newsletter-button">Subscribe</Button>
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
