import React from "react";
import FeaturesSection from "./FeaturesSection";
import data from "../constant/data";

const { featuresData } = data;

function Features() {
  return (
    <section className="pt-12 lg:pt-24 bg-violet">
      <div className="container mx-auto">
        <div className="text-center max-w-[758px] mx-auto mb-24">
          <h2 className="section-title" data-aos="fade-up" data-aos-offset="400">
            Market sentiments, portfolio, and run the infrastructure of your choise
          </h2>
        </div>

        {featuresData.map(({ image, title, description }, index) => (
          <FeaturesSection key={index} image={image} title={title} description={description} index={index + 1} />
        ))}
      </div>
    </section>
  );
}

export default Features;
