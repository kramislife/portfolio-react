import React from "react";
import { NavItems } from "../constant/Index";
import logo from "@assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between lg:mx-10">
        <img src={logo} alt="logo" className="h-24 w-24 mx-2" />
        <ul className="flex space-x-5 mx-4">
          {NavItems.map((item) => (
            <li key={item.id}>
              <a
                target="_blank"
                rel="noreferrer"
                className={`transition duration-300 ease-in-out
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
