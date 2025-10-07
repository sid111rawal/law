'use client';

import Image from 'next/image';

export default function ClientTestimonials() {

  const testimonials = [
    {
      id: 1,
      name: "Emily Mandarow",
      title: "CEO",
      company: "Prime Inc.",
      savings: "₹2.5L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "#", // Replace with actual video URL
      hasPlayButton: true
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Founder",
      company: "TechStart Solutions",
      savings: "₹1.8L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "#", // Replace with actual video URL
      hasPlayButton: false
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Director",
      company: "Growth Ventures",
      savings: "₹3.2L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "#", // Replace with actual video URL
      hasPlayButton: false
    },
    {
      id: 4,
      name: "Hugh Berger",
      title: "CEO",
      company: "Evalyant Inc.",
      savings: "₹2.1L+",
      videoThumbnail: "/images/hero_img.png",
      videoUrl: "#", // Replace with actual video URL
      hasPlayButton: true
    }
  ];

  const handleVideoClick = (videoUrl: string) => {
    // Here you would typically open a modal or navigate to video
    console.log('Playing video:', videoUrl);
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-200">
                <Image
                  src={testimonial.videoThumbnail}
                  alt={`${testimonial.name} testimonial`}
                  fill
                  className="object-cover"
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
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.videoThumbnail}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate text-sm">{testimonial.name}</h3>
                    <p className="text-xs text-gray-500">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
                
                {/* Savings Highlight */}
                <div className="bg-gold/10 rounded-lg p-2 text-center">
                  <span className="text-xs font-medium text-slate">WE SAVE</span>
                  <div className="text-lg font-bold text-gold">{testimonial.savings}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
