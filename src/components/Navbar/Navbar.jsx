import React from "react";
import { NavItems } from "../constant/Index";
import logo from "@assets/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full py-4 lg:pt-8 lg:backdrop-blur-sm backdrop-blur-lg">
      <div className="flex items-center justify-between lg:mx-10 mx-4">
        <img src={logo} alt="logo" className="h-12 w-12" />

        <ul className="flex lg:space-x-5 space-x-3 lg:mr-10">
          {NavItems.map((item) => (
            <li key={item.id}>
              <a
                target="_blank"
                rel="noreferrer"
                className={`text-neutral-300 transition duration-300 ease-in-out hover:scale-125 
                ${item.id === 1 ? "hover:text-blue-600" : ""}
                ${item.id === 2 ? "hover:text-pink-400" : ""}
                ${item.id === 3 ? "hover:text-red-600" : ""}
                ${item.id === 4 ? "hover:text-blue-700" : ""}
                ${item.id === 5 ? "hover:text-pink-600" : ""}`}
                href={item.href}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
