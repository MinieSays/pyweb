import { FaProjectDiagram, FaCalendarCheck, FaChartLine, FaCogs } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#ffc857] text-xs font-semibold rounded-full px-3 py-1">
            Advanced Technology
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
          Performance-Oriented
          </h2>
          <p className="text-md max-w-xl mx-auto mt-3">
          Our agency stays ahead of trends and technology, delivering superior, cutting-edge websites that allow your business to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="bg-[#ffc857] w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto group-hover:scale-105 transition duration-300">
              <FaProjectDiagram className="text-2xl" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Brainstorm
            </h4>
            <p className="text-gray-500">
            We brainstorm by combining creativity and strategy to design unique, tailored web solutions for clients.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="bg-[#ffc857] w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto group-hover:scale-105 transition duration-300">
              <FaCalendarCheck className="text-2xl" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Efficiency
            </h4>
            <p className="text-gray-500">
            Deliver projects on time by prioritizing tasks, streamlining workflows, and maintaining clear communication throughout.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="bg-[#ffc857] w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto group-hover:scale-105 transition duration-300">
              <FaChartLine className="text-2xl" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Result Driven
            </h4>
            <p className="text-gray-500">
            Achieve SEO results through strategic keyword use, quality content, and optimizing websites for better search rankings.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="bg-[#ffc857] w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto group-hover:scale-105 transition duration-300">
              <FaCogs className="text-2xl" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Designed For Results
            </h4>
            <p className="text-gray-500">
            Our websites excel in SEO with fast loading, mobile-friendly designs, easy navigation, and optimized content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;