import React, { useState } from "react";
import data from "../constant/data";

const { cryptoValues } = data;

function CalcForm() {
  const [cryptoValue, setCryptoValue] = useState(0);
  const [hashRate, setHashRate] = useState(0);
  const [crypto, setCrypto] = useState(0);

  const handleSelectChange = (e) => setCrypto(e.target.value);
  const handleInputChange = (e) => setHashRate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCryptoValue(hashRate * crypto);
  };

  return (
    <div className="w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary" data-aos="fade-up" data-aos-offset="500">
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0">
        <input onChange={handleInputChange} type="number" placeholder="Enter your hash rate" className="input placeholder:text-darkblue" />
        <select onChange={handleSelectChange} className="select">
          {cryptoValues.map(({ name, value }, index) => (
            <option key={index} value={value}>{`${name} / s`}</option>
          ))}
        </select>
        <button type="submit" className="btn text-white px-8 flex self-start">
          Calculate
        </button>
      </form>

      {/* Text */}
      <div className="mt-24">
        <div className="text-blue font-medium mb-4">ESTIMATED HASH RATE VALUE : </div>
        <div className="text-[32px] font-bold mb-12">$ {cryptoValue}</div>
        <div className="text-blue font-medium mb-4">ESTIMATED 24 HOURS REVENUE : </div>
        <div className="text-[32px] font-bold mb-3">
          0.055 130 59 ETH <span className="text-blue">($1275)</span>
        </div>
        <div className="text-gray-500 tracking-[1%]">Revenue will change based on mining difficulty and Ethereum price.</div>
      </div>
    </div>
  );
}

export default CalcForm;
