import React, { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { videoTestimonials } from "../constants";

const VideoTestimonials = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videoTestimonials.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentVideo(
      (prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length
    );
    setIsPlaying(false);
  };

  const togglePlay = () => {
    const video = document.getElementById(
      `video-${currentVideo}`
    ) as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <SectionTitle
          title="Voices of Impact"
          subtitle="Hear directly from our beneficiaries about how The Bridge Inspire Foundation has transformed their lives."
          center
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
            {videoTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`${index === currentVideo ? "block" : "hidden"}`}
              >
                <div className="relative aspect-video">
                  <video
                    id={`video-${index}`}
                    className="w-full h-full object-cover"
                    poster={testimonial.thumbnail}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button
                      onClick={togglePlay}
                      className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-primary-600" />
                      ) : (
                        <Play className="w-8 h-8 text-primary-600 ml-1" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-700">{testimonial.quote}</p>
                </div>
              </div>
            ))}

            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <ChevronLeft className="w-6 h-6 text-primary-600" />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <ChevronRight className="w-6 h-6 text-primary-600" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentVideo(index);
                  setIsPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentVideo
                    ? "bg-primary-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoTestimonials;
