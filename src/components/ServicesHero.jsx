import React from "react";

const ServicesHero = ({
  backgroundImage,
  overlayOpacity = 0.5,
  title,
  emphasis,
  description,
}) => {
  return (
    <section
      className="relative bg-gray-900 bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      ></div>
      <div className="relative py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
        <div className="max-w-screen-lg">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 text-white">
            {title} <span className="font-extrabold text-yellow-500">{emphasis}</span>
          </h2>
          <p className="mb-4">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
