import React from "react";
import img from "../assets/responsive.jpg";

const InformationServices = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-y-8 gap-x-16 xl:gap-x-24 items-center">
          {/* Second column (originally first) */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-[500px]">
              Web design &{" "}
              <span className="text-yellow-500">Web Applications</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              At our agency, we specialize in selling web design services that
              prioritize user experience and marketing results. Every website we
              create is designed with the user in mind, ensuring intuitive
              navigation, fast loading times, and mobile responsiveness. We
              don’t just aim to make your site look great; we ensure that
              visitors have a seamless experience that encourages them to
              explore further, ultimately driving engagement and conversions. By
              combining sleek design with functionality, we help your website
              become a powerful tool for your business growth.
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              In addition to web design, we also develop custom web applications
              that are tailored to meet your specific business needs. These
              applications are built to enhance your marketing efforts by
              simplifying complex processes, improving customer interactions,
              and delivering personalized experiences. Whether you need an
              e-commerce platform, a content management system, or a specialized
              business solution, our web applications are designed to maximize
              efficiency while promoting your brand and helping you reach your
              target audience effectively.
            </p>
          </div>

          {/* First column (originally second) */}
          <div className="relative mb-12">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full sm:w-[564px] h-[646px]  rounded-3xl ">
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

export default InformationServices;
