import React from "react";

const CTABanner = () => {
  return (
    <section className=" bg-yellow-500 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
          Elevate Your Digital Presence
        </h2>
        <p className="text-xl md:text-2xl mb-6 max-w-xl mx-auto">
          Powerful web design, SEO, and marketing strategies for real results.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 text-lg font-semibold bg-white text-black rounded-full transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
