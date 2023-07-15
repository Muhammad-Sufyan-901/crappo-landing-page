import React from "react";
import images from "../constant/images";

const { whyImage } = images;

function Why() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-x-8 lg:flex-row">
          {/* Image */}
          <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-offset="400">
            <img src={whyImage} alt="Why Pics" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 max-w-[480px]" data-aos="fade-left" data-aos-offset="400">
            <h2 className="section-title">Why you should choose CRAPPO</h2>
            <p className="section-subtitle">Experiences the next generation Cryptocurrencies platform. No financial borders, extra fees, and fake reviews.</p>
            <button className="btn px-6">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
