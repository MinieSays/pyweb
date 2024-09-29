import React from "react";

const DescriptionServices = ({
  title,
  emphasis,
  description,
  image,
  conversionPercentage,
  conversionText,
}) => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-y-8 gap-x-16 xl:gap-x-24 items-center lg:grid-cols-2">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-[500px]">
              {title} <span className="text-yellow-500">{emphasis}</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">{description}</p>
          </div>
          <div className="hidden lg:block relative mb-12">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full sm:w-[564px] h-[646px] bg-gray-100 rounded-3xl border border-gray-200">
                <img
                  loading="lazy"
                  className="w-full h-full rounded-3xl object-cover"
                  src={image}
                  alt="About Us"
                />
              </div>
            </div>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-sm px-4 sm:px-0">
              <div className="bg-white rounded-full shadow-lg overflow-hidden">
                <div className="px-10 py-6">
                  <div className="flex items-center">
                    <p className="text-3xl sm:text-4xl font-bold text-yellow-500 flex-shrink-0">
                      {conversionPercentage}
                    </p>
                    <p className="pl-6 text-sm sm:text-lg font-semibold">
                      {conversionText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionServices;

