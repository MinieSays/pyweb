import React from "react";

const DescriptionWithCards = ({
  title,
  emphasis,
  description,
  cards,
  image,
}) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-12">

          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full sm:w-[564px] h-[646px] bg-gray-100 rounded-3xl border border-gray-200">
              <img
                loading="lazy"
                className="w-full h-full rounded-3xl object-cover"
                src={image}
                alt="About Us"
              />
            </div>
          </div>


          <div className="flex flex-col justify-center gap-10 order-1 lg:order-2">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <div className="flex flex-col gap-3 items-center lg:items-start">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-[550px]">
                    {title} <span className="text-yellow-500">{emphasis}</span>
                  </h1>
                  <p className="text-gray-500 text-base text-center lg:text-left">
                    {description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {cards.map((item, index) => (
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

export default DescriptionWithCards;
