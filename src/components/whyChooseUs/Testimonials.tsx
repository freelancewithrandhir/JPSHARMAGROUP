import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Exim Solutions Pvt Ltd',
      quote: 'JP Sharma Group has been our trusted partner for all EIA and documentation services. Their attention to detail and swift processing have significantly improved our export operations.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Organic Exports India',
      quote: 'The team at JP Sharma Group made the complex APEDA certification process seamless. Their expertise and guidance were invaluable for our organic exports business.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'Anil Verma',
      company: 'Global Trade Consultants',
      quote: 'We have been using JP Sharma Group\'s services for over 5 years now. Their professional approach, transparent pricing, and timely delivery make them our preferred partner.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. Here's what our valued clients have to say about our services.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 relative">
            <div className="absolute top-8 left-8 text-blue-200">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <div className="mb-8 pt-8 pl-8">
                <p className="text-xl text-gray-700 italic">
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-600 hover:bg-blue-700 hover:text-white transition-colors mr-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-600 hover:bg-blue-700 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  index === activeIndex ? 'bg-blue-700' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;