import React from "react";
import icons from "../constant/icons";
import images from "../constant/images";

const { IoIosArrowDroprightCircle } = icons;
const { heroImage } = images;

function Hero() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          {/* Hero Text */}
          <div className="flex-1">
            {/* Text Badge */}
            <div className="bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]" data-aos="fade-down" data-aos-delay="400">
              <div className="flex items-center justify-between text-sm lg:text-base">
                <div className="bg-white text-darkblue rounded-full font-medium py-1 px-4">75% SAVE</div>
                <div>For the Black Friday Weekend</div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-[32px] lg:text-[64px] font-bold leading-tight mb-6" data-aos="fade-down" data-aos-delay="500">
              Fastest & Secure Platform To Invest In Crypto.
            </h1>
            <p className="max-w-[440px] leading-relaxed mb-8" data-aos="fade-down" data-aos-delay="600">
              Buy and sell Cryptocurrencies, trusted by 10M wallets with over $30 Billions in Transactions.
            </p>
            <button className="btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base" data-aos="fade-down" data-aos-delay="700">
              Try for free
              <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </button>
          </div>

          {/* Hero Images */}
          <div className="flex-1" data-aos="fade-up" data-aos-delay="600">
            <img src={heroImage} alt="Hero Pics" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
