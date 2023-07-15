import React from "react";
import icons from "../constant/icons";
import data from "../constant/data";

const { CgClose } = icons;
const { navData } = data;

function NavMobile({ setNavMobile }) {
  return (
    <nav className="lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex justify-center items-center">
      {/* Close Button */}
      <div onClick={() => setNavMobile(false)} className="absolute top-2 left-2 cursor-pointer">
        <CgClose className="text-3xl" />
      </div>

      {/* Navbar Links */}
      <ul className="text-xl flex flex-col gap-y-8">
        {navData.map(({ name, href }, index) => (
          <li key={index}>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMobile;
