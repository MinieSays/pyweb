import React from "react";

const CTABanner = ({
  backgroundColor = "bg-yellow-500",
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className={`${backgroundColor} py-12 px-6`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-6 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        <a
          href={buttonLink}
          className="inline-block px-10 py-4 text-lg font-semibold bg-white text-black rounded-full transform hover:scale-105 transition duration-300 ease-in-out"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
