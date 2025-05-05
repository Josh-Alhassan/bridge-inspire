import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants";
import Container from "./Container";
import logo from "../assets/logo.png";

import "./Navbar.css"; // Import your CSS file for styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : "scrolled"}`}>
      <Container>
        <nav className="navbar-nav">
          <a href="#home" className="navbar-logo">
            <img src={logo} alt="Logo" className="navbar-logo-img" />
          </a>

          {/* Desktop Navigation */}
          <div className="navbar-desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`navbar-link ${scrolled ? "scrolled" : ""}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="navbar-mobile-menu">
            <div className="navbar-mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="navbar-mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
