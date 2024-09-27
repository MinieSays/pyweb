import React from "react";
import img from "../assets/about.jpg"

const Information = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-y-8 gap-x-16 xl:gap-x-24 items-center">
          {/* Second column (originally first) */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-[500px]">
              A Team You Can <span className="text-yellow-500">Count On.</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Py Web Solutions is proud Canadian web design agency. Our mission
              is to help businesses achieve real, measurable results through
              their online presence.
              <br /> <br />
              Our co-creators believe that a website isn’t just a digital space;
              it’s a powerful tool that can drive growth, connect with your
              audience, and tell your brand’s story. Every project taken on is a
              personal commitment to understanding your business goals and
              creating a custom web solution that delivers exactly what you
              need—whether that’s more traffic, better engagement, or higher
              conversions.
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Web design is more than just a job for me; it’s our passion. We
              thrive on seeing our clients succeed and knowing that the work
              we’ve done together is making a difference. 
            </p>
          </div>

          {/* First column (originally second) */}
          <div className="relative mb-12">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full sm:w-[564px] h-[646px] bg-gray-100 rounded-3xl border border-gray-200">
                <img loading="lazy"
                  className="w-full h-full rounded-3xl object-cover"
                  src={img}
                  alt="About Us"
                />
              </div>
            </div>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-sm px-4 sm:px-0">
              <div className="bg-white rounded-full shadow-lg overflow-hidden">
                <div className="px-10 py-6">
                  <div className="flex items-center">
                    <p className="text-3xl sm:text-4xl font-bold text-yellow-500 flex-shrink-0">
                      37%
                    </p>
                    <p className="pl-6 text-sm sm:text-lg font-medium font-semibold">
                      High Conversions <br /> on Landing Pages
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

export default Information;
