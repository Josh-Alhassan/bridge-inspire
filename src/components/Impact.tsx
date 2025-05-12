import React, { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { impactStats, impactStories } from "../constants";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";

const Impact = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % impactStories.length);
    setCurrentImage(0);
  };

  const prevStory = () => {
    setCurrentStory(
      (prev) => (prev - 1 + impactStories.length) % impactStories.length
    );
    setCurrentImage(0);
  };

  const story = impactStories[currentStory];
  const hasAdditionalImages =
    story.additionalImages && story.additionalImages.length > 0;

  const nextImage = () => {
    if (!hasAdditionalImages) return;
    const totalImages = story.additionalImages.length + 1;
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    if (!hasAdditionalImages) return;
    const totalImages = story.additionalImages.length + 1;
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const getCurrentImage = () => {
    if (currentImage === 0) return story.image;
    return story.additionalImages?.[currentImage - 1] || story.image;
  };

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
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary-600 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Impact Stories
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={getCurrentImage()}
                  alt={story.title}
                  className="w-full h-80 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {hasAdditionalImages && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white text-xl font-serif font-bold">
                    {story.title}
                  </h4>
                  <p className="text-gray-200">{story.location}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {story.story}
                  </p>

                  <div className="bg-primary-50 p-6 rounded-lg mb-6">
                    <h5 className="font-serif font-bold text-gray-900 mb-3">
                      Key Outcomes:
                    </h5>
                    <ul className="list-disc list-inside space-y-2">
                      {story.outcomes.map((outcome, index) => (
                        <li key={index} className="text-gray-700">
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary-50 p-6 rounded-lg mb-6">
                    <h5 className="font-serif font-bold text-gray-900 mb-3">
                      What This Story Means to Us:
                    </h5>
                    <p className="text-gray-700">{story.meaning}</p>
                  </div>

                  <div className="bg-accent-50 p-6 rounded-lg">
                    <h5 className="font-serif font-bold text-gray-900 mb-3">
                      How You Can Help:
                    </h5>
                    <p className="text-gray-700 mb-4">{story.callToAction}</p>
                    <Button
                      variant="accent"
                      onClick={() =>
                        document
                          .getElementById("donate")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Support Our Mission
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevStory}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex gap-2">
                {impactStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentStory(index);
                      setCurrentImage(0);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentStory
                        ? "bg-primary-600 w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextStory}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {impactStories.slice(0, 2).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 relative"
            >
              <Quote
                size={40}
                className="text-primary-100 absolute top-6 right-6"
              />
              <p className="text-gray-700 mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Impact;
