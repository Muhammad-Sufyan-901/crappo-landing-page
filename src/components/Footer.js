import React from "react";
import data from "../constant/data";
import svg from "../constant/svg";

const {
  footerData: { quickLinks, resourcesLinks, paymentLinks, socialLinks },
} = data;
const { logo } = svg;

function Footer() {
  return (
    <footer className="pt-0 lg:pt-24">
      <div className="container mx-auto lg:mb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Logo */}
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
            <a href="/#">
              <img src={logo} alt="Footer Logo" />
            </a>
          </div>

          {/* Links Group */}
          <div className="flex flex-1 flex-col gap-16 lg:flex-row">
            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Quick Links</div>
              <ul className="space-y-4 text-gray">
                {quickLinks.map(({ name, href }, index) => (
                  <li key={index}>
                    <a href={href} className="hover:text-blue transition">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Resources Links</div>
              <ul className="space-y-4 text-gray">
                {resourcesLinks.map(({ name, href }, index) => (
                  <li key={index}>
                    <a href={href} className="hover:text-blue transition">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment */}
          <div className="flex flex-col flex-1">
            <div className="lg:ml-[80px]">
              <h3 className="h3 font-medium text-center mb-10 lg:text-left">We accept following payment systems</h3>
              <div className="flex justify-center items-center gap-6">
                {paymentLinks.map(({ image, alt }, index) => (
                  <img src={image} alt={alt} key={index} className="cursor-pointer hover:opacity-70 transition duration-300" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          <div>&copy; 2022 CRAPPO. All Right Reserved.</div>
          <div className="flex text-2xl gap-x-8">
            {socialLinks.map(({ Icon, href }, index) => (
              <a href={href} key={index} className="hover:text-blue transition">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
