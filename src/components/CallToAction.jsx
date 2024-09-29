import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CallToAction = ({
  heading,
  subheading,
  buttonText,
  buttonLink,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <section>
      <div className="container mx-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-xl flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 text-gray-900"
          style={{
            background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{heading}</h2>
            <p className="text-base sm:text-lg">{subheading}</p>
          </div>
          <Link to="/contact"
            href={buttonLink}
            className="flex items-center justify-center bg-white text-base sm:text-lg font-semibold py-3 px-6 rounded-full shadow-lg hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {buttonText} <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
