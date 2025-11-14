'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function LittleStory() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-serif font-bold text-slate sm:text-4xl lg:text-5xl mb-8">
              LITTLE STORY
            </h2>
            
            <blockquote className="text-lg text-gray-600 leading-relaxed mb-8 italic">
              &ldquo;Your business is more than forms and filings. It&apos;s your future. At Lawgical Station, we protect it with genuine guidance, transparent fees, and a partnership that lasts.&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/about"
                className="group relative bg-gold text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
              >
                <span className="relative z-10">Read More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-3/4 lg:w-3/5">
              <Image 
                src="/images/little_story.jpg" 
                alt="Lawgical Station Team - Personal Touch in Professional Service"
                width={500}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
