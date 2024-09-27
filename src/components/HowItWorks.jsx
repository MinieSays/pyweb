import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Step from "./ui/Step";

const HowItWorks = () => {
  return (
    <div className="flex h-[400px] flex-col justify-center bg-gray-50 py-16">
      <div className="container mx-auto px-4 row">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">Our Battleplan</h2>
          <p className="text-2xl text-gray-600  m-3">
            Looking to upgrade your current website or improve your search
            engine results?
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-x-10">
          <Step
            number="1"
            title="Free consultation"
            description="Go over with our in-house designer on your expectations, budget, and timeframe for your project."
          />
          <div className="rotate-90 lg:rotate-0">

          </div>
          <Step
            number="2"
            title="Rough Draft"
            description="Our UX designers create a mockup of your website before we go ahead with the design"
          />
          <div className="rotate-90 lg:rotate-0">

          </div>

          <Step
            number="3"
            title="Voila!"
            description="We deliver your website to you and fix any revisions."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
