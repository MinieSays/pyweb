import { FaArrowRight } from 'react-icons/fa';
import img from '../assets/heroimg.jpg';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${img})` }} // Correct dynamic image reference
    >
      {/* Add a dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      <div className="relative px-6 pt-14 lg:px-8 z-10">
        <div className="mx-auto max-w-2xl py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              Elevate Your Online Business
            </h1>
            <p className="mt-6 text-lg text-gray-300">
            Crafting stunning websites that captivate, engage, and convert—your digital success starts with us.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button label="Free consultation" />
              <Link to="/services" className="text-sm font-semibold text-white">
                Learn More <FaArrowRight className="inline-block ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
