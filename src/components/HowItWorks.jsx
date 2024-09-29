import React from "react";
import Step from "./ui/Step";

const HowItWorks = ({ title, subtitle, steps }) => {
  return (
    <div className="flex h-auto flex-col justify-center sm:mt-4 my-12">
      <div className="container mx-auto px-4 row">
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-4xl lg:text-5xl font-bold">{title}</h2>
          )}
          {subtitle && (
            <p className="text-2xl text-gray-600 m-3">{subtitle}</p>
          )}
        </div>

        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-x-10">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Step
                number={step.number}
                title={step.title}
                description={step.description}
              />
              {index < steps.length - 1 && (
                <div className="rotate-90 lg:rotate-0"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
