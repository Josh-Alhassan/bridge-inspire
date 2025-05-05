import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Button from "./Button";
import Container from "./Container";

import imgIndex1 from "../assets/junior-gyb.jpg";
import imgIndex2 from "../assets/let-her-shine-audeince.jpeg";
import imgIndex3 from "../assets/humaniterian-rights.jpg";
import kqGirls from "../assets/kq-girls.jpeg";
import teensForum from "../assets/teens-forum.jpg";

const heroImages = [imgIndex1, imgIndex2, imgIndex3, kqGirls, teensForum];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      <Container className="relative z-10 mt-16">
        <div className="max-w-3xl slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold leading-tight mb-6">
            Empowering Girls & Women for a Brighter Future
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl">
            The Bridge Inspire Foundation creates safe spaces where girls and
            women in Nigeria can thrive through education, mentorship, and
            economic empowerment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="accent"
              size="lg"
              onClick={() =>
                document
                  .getElementById("donate")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Support Our Mission
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More <ChevronRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
