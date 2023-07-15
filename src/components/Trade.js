import React, { useState } from "react";
import data from "../constant/data";
import icons from "../constant/icons";

const { currency } = data;
const { IoIosArrowForward } = icons;

function Trade() {
  const [itemName, setItemName] = useState("Bitcoin");

  return (
    <section className="section lg:pt-[320px] bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[320px]">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16" data-aos="fade-up" data-aos-offset="400">
          Trade Securely and Market the high growth Cryptocurrencies.
        </h2>
        {/* Items Container */}
        <div className="flex flex-col lg:flex-row gap-[45px]" data-aos="fade-up" data-aos-offset="450">
          {currency.map(({ image, abbr, name, description }, index) => (
            <div onClick={() => setItemName(name)} key={index} className={`${name === itemName ? "bg-violet text-white" : "bg-white"} w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}>
              <div className="flex flex-col items-center justify-center">
                <img src={image} alt="Cryptocurrencies Pics" className="mb-12" />
                <div className="mb-4 flex items-center gap-x-2">
                  <div className="text-[32px] font-bold">{name}</div>
                  <div className="text-lg text-gray-400 font-medium">{abbr}</div>
                </div>
                <p className="text-center mb-6">{description}</p>
                <button className={`${name === itemName ? "text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3" : "text-blue w-16"} border-2 border-gray-300 rounded-full h-16 flex justify-center items-center`}>
                  {name === itemName && <div className="text-lg font-medium">Start Mining</div>}
                  <IoIosArrowForward className={`${name === itemName ? "text-2xl" : "text-3xl"}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trade;
