import React from "react";
import { FaLaptopCode, FaChartLine, FaMobileAlt } from "react-icons/fa"; // Relevant icons for a web design agency

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:gap-5 lg:gap-20">
          <div className="group relative w-full bg-gray-50 rounded-2xl p-7 transition-all hover:bg-yellow-500 border lg:w-1/4">
            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
              <FaLaptopCode size={30} className="text-yellow-500 " />
            </div>
            <h4 className="text-xl font-semibold ">Custom Web Development</h4>
            <p className="text-sm ">
              We build tailor-made websites to suit your business needs and
              goals.
            </p>
          </div>
          <div className="group relative w-full bg-gray-50 rounded-2xl p-7 transition-all hover:bg-yellow-500 border lg:w-1/4">
            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
              <FaMobileAlt size={30} className="text-yellow-500 " />
            </div>
            <h4 className="text-xl font-semibold ">Mobile-Responsive Design</h4>
            <p className="text-sm ">
              Your site will look great and function flawlessly across all
              devices.
            </p>
          </div>
          <div className="group relative w-full bg-gray-50 rounded-2xl p-7 transition-all hover:bg-yellow-500 border lg:w-1/4">
            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
              <FaChartLine size={30} className="text-yellow-500 " />
            </div>
            <h4 className="text-xl font-semibold ">SEO & Performance</h4>
            <p className="text-sm ">
              Our websites are optimized for speed, SEO, and conversions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
