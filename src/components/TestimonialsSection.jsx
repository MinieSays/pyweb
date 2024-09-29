import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const TestimonialsSection = ({ title, titleEmphasis, testimonials }) => {
  return (
    <section className="py-6 sm:py-10 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold leading-tight text-gray-800 sm:text-3xl">
            {title} <span className="text-yellow-500">{titleEmphasis}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 mx-auto mt-6 sm:mt-10 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-md shadow-md border">
              <div className="px-6 py-8">
                <div className="relative w-20 h-20 mx-auto">
                  <img
                    loading="lazy"
                    className="relative object-cover w-20 h-20 mx-auto rounded-full border transform hover:scale-105 ease-in-out duration-300"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-yellow-500 rounded-full w-6 h-6">
                    <FaCheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base italic">{testimonial.quote}</p>
                </blockquote>
                <p className="text-sm font-semibold mt-4">{testimonial.name}</p>
                <p className="mt-1 text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
