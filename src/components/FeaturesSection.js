import React from "react";

function FeaturesSection({ image, title, description, index }) {
  if (index % 2 !== 0) {
    return (
      <section className={index === 1 ? "pb-[30px] lg:pb-[120px] pt-0" : "py-[30px] lg:py-[120px]"}>
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-[454px] mb-6 lg:mt-10" data-aos="fade-right" data-aos-offset="400">
            <h3 className="h3 mb-6">{title}</h3>
            <p className="text-gray mb-8 max-w-[408px]">{description}</p>
            <button className="btn px-8">Learn more</button>
          </div>
          <div className="flex-1 flex justify-end" data-aos="fade-left" data-aos-offset="400">
            <img src={image} alt="Features Pics" />
          </div>
        </div>
      </section>
    );
  } else if (index % 2 === 0) {
    return (
      <section className="py-[30px] lg:py-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-col justify-end items-center lg:flex-row">
            <div className="flex-1 lg:absolute lg:left-0 order-2 lg:order-1" data-aos="fade-right" data-aos-offset="400">
              <img src={image} alt="Features Pics" />
            </div>
            <div className="flex-1 max-w-[456px]" data-aos="fade-left" data-aos-offset="400">
              <h3 className="h3 mb-6">{title}</h3>
              <p className="text-gray mb-8">{description}</p>
              <button className="btn px-8 mb-6 lg:mb-0">Learn more</button>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return undefined;
  }
}

export default FeaturesSection;
