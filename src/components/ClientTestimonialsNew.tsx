'use client';

export default function ClientTestimonialsNew() {
  const testimonials = [
    {
      id: 1,
      name: "Renu Khushlani",
      title: "Food Business Owner",
      company: "",
      testimonial: "As a food business owner, I was overwhelmed with the process of obtaining the necessary licenses to get started. Thanks to Lawgical Station, the entire experience was seamless. Their team guided me every step of the way, ensuring I had all the required documentation.",
      rating: 5
    },
    {
      id: 2,
      name: "Bhanu Jajani",
      title: "Business Owner",
      company: "",
      testimonial: "The team at Lawgical Station is simply outstanding! They guided me through the AYUSH license process and offered invaluable tax advice. Their professionalism and dedication made all the difference for my business.",
      rating: 5
    },
    {
      id: 3,
      name: "Manish Kakwani",
      title: "Client",
      company: "",
      testimonial: "The team at Lawgical Station are highly professional and knowledgeable. They handle everything with precision and provide timely advice. Highly recommend for anyone seeking expert CA services!",
      rating: 5
    },
    {
      id: 4,
      name: "Kishor Lakhwani",
      title: "Small Business Owner",
      company: "",
      testimonial: "I am a small business owner who received a notice from the income tax department. My previous professional suggested I would have to pay a penalty, but Lawgical Station helped resolve the issue efficiently and professionally.",
      rating: 5
    },
    {
      id: 5,
      name: "Priya Sharma",
      title: "Startup Founder",
      company: "",
      testimonial: "Lawgical Station made my startup journey smooth and hassle-free. Their expertise in company registration and compliance matters is exceptional. They handled everything from DPIIT registration to tax planning.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate sm:text-4xl lg:text-5xl mb-4">
            Success, In Their Words
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients who have experienced the Lawgical Station difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Testimonial Content */}
              <div className="p-6 lg:p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 text-sm lg:text-base leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </blockquote>

                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Name and Title */}
                  <div>
                    <h3 className="font-semibold text-slate text-base">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-gold to-gold/60"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
