import React from "react";
import toronto from "../assets/toronto.jpg"

const InfoSection = () => {
  return (
    <section 
      className="relative bg-gray-900 bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${toronto})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
      <div className="relative py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
        <div className="max-w-screen-lg">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 text-white">
            Canadian-based agency delivering <span className="font-extrabold text-yellow-500">expert web design</span> results worldwide.
          </h2>
          <p className="mb-4">
            We are a proudly Canadian-based web design agency committed to delivering exceptional digital solutions. With a deep understanding of the evolving online landscape, we craft websites that are visually stunning and performance-driven. Our team combines creativity and technical expertise to build custom designs that reflect your brand’s identity and drive measurable results. Based in Canada, we are dedicated to supporting businesses locally and globally with innovative, user-focused web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;