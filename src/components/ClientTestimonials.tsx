'use client';

import { useState, useRef, useEffect } from 'react';

export default function ClientTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videosPerView, setVideosPerView] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVideosPerView = () => {
      const newVideosPerView = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
      setVideosPerView(newVideosPerView);
      // Reset to first slide when view changes
      setCurrentIndex(0);
    };

    updateVideosPerView();
    window.addEventListener('resize', updateVideosPerView);
    return () => window.removeEventListener('resize', updateVideosPerView);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Vijay Kheslani",
      title: "Youtuber",
      company: "Techperiments",
      savings: "₹2.5L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "https://res.cloudinary.com/ddxgw6emd/video/upload/v1764628879/Vijay_YT_t20zgp.mp4",
      hasPlayButton: true
    },
    {
      id: 2,
      name: "Avi Rajput & Alam",
      title: "Partner",
      company: "Styllete Salon",
      savings: "₹2.5L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "https://res.cloudinary.com/ddxgw6emd/video/upload/v1763497548/Styllete_Salon_iky7dw.mp4",
      hasPlayButton: true
    },
    {
      id: 3,
      name: "Deepak Tyagi",
      title: "Co-Founder",
      company: "Sanskriti Foundation",
      savings: "₹2.5L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "https://res.cloudinary.com/ddxgw6emd/video/upload/v1764628276/Sanskriti_foundation_compressed_wdhwve.mp4",
      hasPlayButton: true
    },
    {
      id: 4,
      name: "Quelle Jewels",
      title: "Client",
      company: "Quelle Jewels",
      savings: "₹2.8L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "https://res.cloudinary.com/ddxgw6emd/video/upload/v1763497530/Quelle_Jewels_qw4d1r.mp4",
      hasPlayButton: true
    },
    {
      id: 5,
      name: "Sachin Yadav",
      title: "Director",
      company: "Money Essence Pvt Ltd",
      savings: "₹1.9L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "https://res.cloudinary.com/ddxgw6emd/video/upload/v1763497523/Money_essence_lo2pjq.mp4",
      hasPlayButton: true
    },
    {
      id: 6,
      name: "Hari Om Constructions",
      title: "Client",
      company: "Hari Om Constructions",
      savings: "₹2.6L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "https://res.cloudinary.com/ddxgw6emd/video/upload/v1763497509/Hari_Om_Constructions_d75cxt.mp4",
      hasPlayButton: true
    },
    {
      id: 7,
      name: "Pooja Khushlani",
      title: "Proprietor",
      company: "Homzy (Click & Buy Enterprises)",
      savings: "₹2.4L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "https://res.cloudinary.com/ddxgw6emd/video/upload/v1763497516/Homzy_lxcxe9.mp4",
      hasPlayButton: true
    },
    {
      id: 8,
      name: "Puneet Grover",
      title: "Partner",
      company: "Mantra Advertising",
      savings: "₹2.1L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "https://res.cloudinary.com/ddxgw6emd/video/upload/v1763497511/Mantra_Ad_euzt9n.mp4",
      hasPlayButton: true
    },
    {
      id: 9,
      name: "Shubham Gupta",
      title: "Proprietor",
      company: "Qube Production",
      savings: "₹2.7L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "https://res.cloudinary.com/ddxgw6emd/video/upload/v1763497536/Qube_ksehla.mp4",
      hasPlayButton: true
    },
    {
      id: 10,
      name: "Ajit Jain",
      title: "Director",
      company: "Smart Chaser Pvt Ltd",
      savings: "₹2.3L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "https://res.cloudinary.com/ddxgw6emd/video/upload/v1763497543/Smart_chasser_2_kmvbul.mp4",
      hasPlayButton: true
    },
    {
      id: 11,
      name: "Prakash Motwani",
      title: "Proprietor",
      company: "RB Sons",
      savings: "₹3.2L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "https://res.cloudinary.com/ddxgw6emd/video/upload/v1763497523/RB_Sons_uuydtu.mp4",
      hasPlayButton: true
    },
    {
      id: 12,
      name: "Ankur Gautam",
      title: "Proprietor",
      company: "Shivansh Enterprises",
      savings: "₹1.8L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "https://res.cloudinary.com/ddxgw6emd/video/upload/v1763497542/Shivansh_rhmvc5.mp4",
      hasPlayButton: true
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / videosPerView);

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate sm:text-4xl lg:text-5xl mb-4">
            Success, In Their Words
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Wrapper */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2"
                >
                  {testimonials
                    .slice(slideIndex * videosPerView, slideIndex * videosPerView + videosPerView)
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                      >
                        {/* Video Thumbnail */}
                        <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden flex-shrink-0">
                          <video
                            src={testimonial.videoUrl}
                            preload="metadata"
                            muted
                            className="w-full h-full object-contain"
                            onLoadedMetadata={(e) => {
                              // Seek to first frame to show as thumbnail
                              const video = e.currentTarget;
                              video.currentTime = 0.1;
                            }}
                          />
                          
                          {/* Play Button Overlay */}
                          {testimonial.hasPlayButton && (
                            <button
                              onClick={() => handleVideoClick(testimonial.videoUrl)}
                              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-200"
                            >
                              <div className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200">
                                <svg className="w-6 h-6 text-slate ml-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </div>
                            </button>
                          )}
                        </div>

                        {/* Testimonial Info */}
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 relative">
                              <video
                                src={testimonial.videoUrl}
                                preload="metadata"
                                muted
                                className="w-full h-full object-cover"
                                onLoadedMetadata={(e) => {
                                  const video = e.currentTarget;
                                  video.currentTime = 0.1;
                                }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-slate text-sm mb-0.5 truncate">{testimonial.name}</h3>
                              <p className="text-xs text-gray-500 truncate">{testimonial.title}, {testimonial.company}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-200 z-10"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-200 z-10"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-gold w-8'
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-4xl bg-black rounded-lg overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              aria-label="Close video"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Player */}
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full max-h-[85vh] sm:max-h-[90vh] object-contain"
              onEnded={closeVideoModal}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
