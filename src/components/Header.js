import React from "react";
import AccountBtns from "./AccountBtns";
import Nav from "./Nav";
import icons from "../constant/icons";
import svg from "../constant/svg";

const { CgMenuRight } = icons;
const { logo } = svg;

function Header({ setNavMobile }) {
  return (
    <header className="py-[30px] lg:pt-[60px]" data-aos="fade-down" data-aos-delay="900" data-aos-duration="2000">
      <div className="container mx-auto flex items-center justify-between">
        {/* Navbar Logo */}
        <a href="/#">
          <img src={logo} alt="Navbar Logo" />
        </a>

        {/* Navbar Links & Buttons */}
        <div className="hidden lg:flex gap-x-[55px]">
          <Nav />
          <AccountBtns />
        </div>

        {/* Navbar Mobile Toggle Button */}
        <div onClick={() => setNavMobile(true)} className="lg:hidden cursor-pointer">
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
}

export default Header;
