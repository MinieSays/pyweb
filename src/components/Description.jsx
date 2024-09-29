import React from "react";
import Button from "./ui/Button";
import Header from "./ui/Header";
import Para from "./ui/Para";
import { Link } from "react-router-dom";

const Description = ({
  title,
  subtitle,
  emphasis,
  paragraph,
  buttonLabel1,
  buttonLabel2,
  image1,
  image2,
}) => {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-12">
        <div className="text-gray-700 dark:text-gray-300">
          <Header title={title} subtitle={subtitle} emphasis={emphasis} />
          <Para para={paragraph} />
          <div className="flex space-x-4">
            {buttonLabel1 && <Button label={buttonLabel1} />}
            {buttonLabel2 && (
              <Link
                to="/contact"
                className="text-gray-800 underline font-bold py-3 px-6"
              >
                {buttonLabel2}
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {image1 && (
            <img
              loading="lazy"
              className="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              src={image1}
              alt="Office 1"
            />
          )}
          {image2 && (
            <img
              loading="lazy"
              className="w-full rounded-lg shadow-lg mt-4 lg:mt-8 transform transition duration-300 hover:scale-105"
              src={image2}
              alt="Office 2"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Description;
