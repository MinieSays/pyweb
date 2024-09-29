import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const Hero = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryLinkText,
  secondaryLink,
  overlayOpacity = 0.8,
}) => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute inset-0 bg-black z-0"
        style={{ opacity: overlayOpacity }}
      ></div>
      <div className="relative px-6 pt-14 lg:px-8 z-10">
        <div className="mx-auto max-w-2xl py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg text-gray-300">{subtitle}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {buttonText && buttonLink && (
                <Button label={buttonText} link={buttonLink} />
              )}
              {secondaryLink && secondaryLinkText && (
                <Link
                  to={secondaryLink}
                  className="text-sm font-semibold text-white"
                >
                  {secondaryLinkText} <FaArrowRight className="inline-block ml-1" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
