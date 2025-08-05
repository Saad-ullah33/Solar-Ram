import React from "react";
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../../Static/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f4f6fc] text-gray-700 text-sm">
      {/* Subscribe Banner */}
      <div className="bg-[#4e5cf9] text-white px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-lg md:text-xl font-semibold text-center md:text-left">
          <span className="text-[#ffffff] font-bold">Subscribe</span> for the latest news & offers
        </h2>
        <form className="relative w-full md:w-auto max-w-md">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full py-2 px-3 pr-28 rounded text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 px-4 rounded bg-white text-[#4e5cf9] hover:bg-[#e2e8ff] transition text-xs font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10 py-10">
        {/* About & Social Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-[#4e5cf9] mb-2">SolarRam</h3>
          <p className="text-gray-600 mb-3">Empowering your solar journey with smart tools.</p>
          <div className="flex justify-center sm:justify-start space-x-3">
            <a href="https://web.facebook.com/rahi680/" target="_blank" rel="noreferrer">
              <AiFillFacebook size={20} className="hover:text-[#4e5cf9]" />
            </a>
            <a href="https://twitter.com/Asfak00" target="_blank" rel="noreferrer">
              <AiOutlineTwitter size={20} className="hover:text-[#4e5cf9]" />
            </a>
            <a href="https://github.com/asfak00" target="_blank" rel="noreferrer">
              <AiFillGithub size={20} className="hover:text-[#4e5cf9]" />
            </a>
            <a href="https://www.instagram.com/asfakahmed22/" target="_blank" rel="noreferrer">
              <AiFillInstagram size={20} className="hover:text-[#4e5cf9]" />
            </a>
          </div>
        </div>

        {/* Company & Product Links */}
        <div className="flex justify-around gap-6">
          <div>
            <h3 className="text-md font-semibold text-[#4e5cf9] mb-2">Company</h3>
            <ul className="space-y-1">
              {footercompanyLinks?.map((link) => (
                <li key={link.name}>
                  <Link to={link.link} className="text-gray-600 hover:text-[#4e5cf9] transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-[#4e5cf9] mb-2">Shop</h3>
            <ul className="space-y-1">
              {footerProductLinks?.map((link) => (
                <li key={link.name}>
                  <Link to={link.link} className="text-gray-600 hover:text-[#4e5cf9] transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-md font-semibold text-[#4e5cf9] mb-2">Support</h3>
          <ul className="space-y-1">
            {footerSupportLinks?.map((link) => (
              <li key={link.name}>
                <Link to={link.link} className="text-gray-600 hover:text-[#4e5cf9] transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 px-5 md:px-10 py-4 flex flex-col sm:flex-row justify-between items-center text-gray-500 gap-3 text-xs">
        <p>
          &copy; 2025 <span className="text-[#4e5cf9] font-medium">SolarRam</span> — All rights reserved.
        </p>
        <p>Terms <span className="font-bold">•</span> Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
