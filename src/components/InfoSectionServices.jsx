import React from "react";
import toronto from "../assets/toronto.jpg"

const InfoSectionServices = () => {
  return (
    <section 
      className="relative bg-gray-900 bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${toronto})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div> {/* Dark overlay */}
      <div className="relative py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
        <div className="max-w-screen-lg">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 text-white">
            Delivering <span className="font-extrabold text-yellow-500">Excellence</span> & Results.
          </h2>
          <p className="mb-4">
          Py Web Solutions provides a range of services to help your business thrive online. Our web design services focus on creating visually stunning, user-friendly websites that represent your brand and engage your audience. We also specialize in social media marketing, helping you build a strong online presence, connect with customers, and drive meaningful engagement across platforms. Additionally, our SEO services ensure your website is optimized to rank higher on search engines, increasing visibility and driving organic traffic to your site. Together, these services are designed to boost your online performance and achieve real results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSectionServices;