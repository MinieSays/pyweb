import React from "react";

const Features = ({ heading, subheading, description, features }) => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
        <div className="text-center mb-12">
          {subheading && (
            <span className="inline-block bg-[#ffc857] text-xs font-semibold rounded-full px-3 py-1">
              {subheading}
            </span>
          )}
          {heading && (
            <h2 className="text-4xl lg:text-5xl font-bold mt-3">{heading}</h2>
          )}
          {description && (
            <p className="text-md max-w-xl mx-auto mt-3">{description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-[#ffc857] w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto group-hover:scale-105 transition duration-300">
                <Icon className="text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
              </h4>
              <p className="text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
