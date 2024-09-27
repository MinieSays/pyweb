import Button from "./ui/Button";
import Header from "./ui/Header";
import Para from "./ui/Para";
import img from "../assets/img1.jpg"
import img2 from "../assets/pexels-tranmautritam-326503.jpg"

const Description = () => {
  return (
    <section className="bg-white  py-12 lg:py-16 row">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-12">

        <div className="text-gray-700 dark:text-gray-300">
          <Header
            title="Pixel Perfect"
            subtitle="Experiences"
            emphasis="Digital"
          />
          <Para
            para="Our main focus user experience and design. Every detail is carefully considered to business is reflected professionally.By blending intuitive navigation, engaging visuals, and clear messaging, we create websites that look and feel great whether someone visits on their mobile phone, tablet, or desktop."
          />
          <div className="flex space-x-4">
            <Button label="Learn More" />
            <button className="text-gray-800 underline font-bold py-3 px-6">
              Free Consultation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img loading="lazy"
            className="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            src={img}
            alt="Office 1"
          />
          <img loading="lazy"
            className="w-full rounded-lg shadow-lg mt-4 lg:mt-8 transform transition duration-300 hover:scale-105"
            src={img2}
            alt="Office 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
