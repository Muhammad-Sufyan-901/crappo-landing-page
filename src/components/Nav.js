import React from "react";
import data from "../constant/data";

const { navData } = data;

function Nav() {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-x-8">
        {navData.map(({ name, href }, index) => (
          <li key={index} className="border-b-2 border-transparent hover:border-blue transition-all duration-300">
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
