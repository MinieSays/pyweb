import React from "react";
import img from "../assets/img2.jpg"

const DescriptionPanel = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-12">
     
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full sm:w-[564px] h-[646px] bg-gray-100 rounded-3xl border border-gray-200">
              <img loading="lazy"
                className="w-full h-full rounded-3xl object-cover"
                src={img}
                alt="About Us"
              />
            </div>
          </div>

    
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-8">
        
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <div className="flex flex-col gap-3 items-center lg:items-start">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-[550px]">
                    Unlock Your Businesses Full{" "}
                    <span className="text-yellow-500">Potential</span> 
                  </h1>
                  <p className="text-gray-500 text-base text-center lg:text-left">
                  Every design is crafted with SEO at the core because we know that a beautiful website means nothing if it isn’t seen. By integrating SEO best practices into every step of the design process, from structure to content optimization, we ensure that your site ranks higher on search engines. This approach not only boosts visibility but also drives organic traffic, helping your business grow and reach the right audience effectively. Our SEO-focused designs are crafted to deliver long-term results and maximize your online presence.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "SEO",
                    description: "On-page SEO that helps to rank you faster and quicker.",
                  },
                  {
                    title: "Fast Load Times",
                    description: "Pages load quicker than our competitors.",
                  },
                  {
                    title: "Handcrafted",
                    description:
                      "Made from scratch by in-house designers.",
                  },
                  {
                    title: "Responsiveness",
                    description: "Looks beautifull on all mobile and desktop devices",
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

export default DescriptionPanel;
