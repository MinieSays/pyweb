import React from "react";
import img from "../assets/google.jpg"

const DescriptionPanelServices = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-12">
          {/* Right Image (moved to the first column) */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full sm:w-[564px] h-[646px] bg-gray-100 rounded-3xl border border-gray-200">
              <img loading="lazy"
                className="w-full h-full rounded-3xl object-cover"
                src={img}
                alt="About Us"
              />
            </div>
          </div>

          {/* Left Content (moved to the second column) */}
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-8">
              {/* Title and Description */}
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <div className="flex flex-col gap-3 items-center lg:items-start">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-[550px]">
                    Search Engine{" "}
                    <span className="text-yellow-500">Optimization</span> 
                  </h1>
                  <p className="text-gray-500 text-base text-center lg:text-left">
                  Py Web Solutions offers comprehensive SEO services designed to help your website rank on the first page of Google using proven, white-hat techniques. Our approach focuses on sustainable strategies like optimizing on-page content, improving site speed, building high-quality backlinks, and conducting thorough keyword research. By following ethical practices that align with Google’s guidelines, we ensure that your site not only climbs the rankings but also maintains its position over time. Our goal is to boost your visibility, drive organic traffic, and help your business grow without risking penalties from search engines.
                  </p>
                </div>
              </div>
              {/* Stats */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Keyword Research",
                    description: "Thorough keyword research targets the most relevant and high-traffic terms for your business, ensuring content aligns with user searches.",
                  },
                  {
                    title: "On-Page SEO",
                    description: "Site structure, meta tags, and content are optimized for search engines, enhancing both user experience and search visibility.",
                  },
                  {
                    title: "Quality backlinks",
                    description:
                      "A network of authoritative backlinks from trusted sites is built to boost domain credibility and search rankings.",
                  },
                  {
                    title: "Technical SEO",
                    description: "Website speed, mobile responsiveness, and overall performance are improved to meet Google’s standards for higher search rankings.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 hover:border-gray-400 rounded-xl transition duration-700 ease-in-out"
                  >
                    <h4 className="text-gray-900 text-2xl font-bold">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-base">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionPanelServices;
