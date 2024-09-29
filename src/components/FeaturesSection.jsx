import React from "react";

const FeaturesSection = ({ features }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:gap-5 lg:gap-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative w-full bg-gray-50 rounded-2xl p-7 transition-all hover:bg-yellow-500 border lg:w-1/4"
            >
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                <feature.icon size={30} className="text-yellow-500" />
              </div>
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
