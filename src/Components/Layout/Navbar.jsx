import React from "react";
import styles from "../../Styles/Style";
import { navItems } from "../../Static/data";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  return (
    <div className={`hidden 800px:flex items-center space-x-6`}>
      {navItems &&
        navItems.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className={`${
              active === index + 1
                ? "text-[#3b82f6]" // Active: light blue
                : "text-gray-200" // Inactive: gray for desktop
            } font-medium transition duration-300 hover:text-[#60a5fa]`}>
            {item.title}
          </Link>
        ))}
    </div>
  );
};

export default Navbar;