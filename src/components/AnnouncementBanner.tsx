'use client';

import { useState, useEffect } from 'react';

export default function AnnouncementBanner() {
  const announcements = [
    {
      id: 1,
      icon: "📅",
      text: "ITR Filing Due Date: September 15, 2025 - File with us for hassle-free experience!",
      highlight: "September 15, 2025",
      action: "File Now"
    },
    {
      id: 2,
      icon: "💰",
      text: "Special Offer: 20% OFF on GST Registration - Limited time only!",
      highlight: "20% OFF",
      action: "Claim Offer"
    },
    {
      id: 3,
      icon: "📞",
      text: "Get 15 minutes FREE consultation - Call us at +91 98765 43210",
      highlight: "15 minutes FREE",
      action: "Call Now"
    },
    {
      id: 4,
      icon: "🛡️",
      text: "100% Notice Coverage Guarantee - Your peace of mind is our priority",
      highlight: "100% Guarantee",
      action: "Learn More"
    },
    {
      id: 5,
      icon: "⏰",
      text: "Quick Response Time: Get replies within 2 hours on all queries",
      highlight: "2 hours",
      action: "Contact Us"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  const currentAnnouncement = announcements[currentIndex];

  return (
    <div className="bg-gradient-to-r from-gold via-yellow-500 to-gold shadow-lg relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform skew-x-12 translate-x-full animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Main Content */}
          <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
            {/* Icon */}
            <div className={`text-xl sm:text-2xl transition-all duration-300 ${isAnimating ? 'scale-125 rotate-12' : 'scale-100 rotate-0'}`}>
              {currentAnnouncement.icon}
            </div>
            
            {/* Text */}
            <div className={`flex-1 min-w-0 transition-all duration-300 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
              <p className="text-sm sm:text-base font-medium text-gray-900 truncate sm:text-clip">
                <span className="hidden sm:inline">{currentAnnouncement.text}</span>
                <span className="sm:hidden">
                  {currentAnnouncement.text.length > 50 
                    ? `${currentAnnouncement.text.substring(0, 50)}...` 
                    : currentAnnouncement.text}
                </span>
                {currentAnnouncement.highlight && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full bg-white bg-opacity-30 text-xs font-semibold text-gray-900">
                    {currentAnnouncement.highlight}
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center space-x-3 ml-4">
            <button className="bg-slate text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap">
              {currentAnnouncement.action}
            </button>
            
            {/* Close button */}
            <button className="text-gray-700 hover:text-gray-900 transition-colors p-1">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-1 pb-2">
          {announcements.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-6 sm:w-8 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-slate bg-opacity-70' 
                  : 'bg-white bg-opacity-30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Moving highlight effect */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-slate bg-opacity-50 transition-all duration-4000 ease-linear"
           style={{ 
             width: `${((currentIndex + 1) / announcements.length) * 100}%` 
           }}
      />
    </div>
  );
}
