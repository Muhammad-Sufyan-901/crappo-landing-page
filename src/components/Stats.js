import React from "react";
import data from "../constant/data";

const { statsData } = data;

function Stats() {
  return (
    <section className="pt-24" data-aos="fade-up" data-aos-delay="1200">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
          {statsData.map(({ Icon, nominal, name }, index) => (
            <div key={index} className="flex items-center gap-x-6">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
                <Icon />
              </div>
              <div>
                <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">{nominal}</div>
                <div className="text-gray">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
