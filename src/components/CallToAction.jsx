import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-gradient-to-r from-[#f88502d5] to-[#ffc857] rounded-xl flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 text-gray-900">

          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg">
              Have any questions? Share your thoughts with us!
            </p>
          </div>
          <a
            href="/contact"
            className="flex items-center justify-center bg-white text-base sm:text-lg font-semibold py-3 px-6 rounded-full shadow-lg  hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Reach Out <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
