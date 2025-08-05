import React from "react";
import styles from "../../Styles/Style";
import CountDown from "./CountDown";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const EventCard = ({ active }) => {
  const productName = "renogy-200w-12v-monocrystalline-solar-starter-kit";

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className={`w-full block lg:flex p-5 sm:p-10 rounded-2xl shadow-md ${
        active ? "" : "mb-12"
      } bg-gradient-to-r from-white via-[#f0f9ff] to-white border border-[#dbeafe]`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-[50%] flex items-center justify-center">
        <img
          src="https://i.ytimg.com/vi/WZlIm4Tfapo/maxresdefault.jpg"
          alt="Renogy 200W Solar Kit"
          className="rounded-xl object-contain max-h-[280px]"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-[50%] flex flex-col justify-center px-4">
        <h2 className="text-[24px] md:text-[28px] font-bold text-[#1e3a8a]">
          Renogy 200W 12V Monocrystalline Solar Starter Kit
        </h2>

        <p className="mt-3 text-gray-700 text-[15px] leading-[1.6]">
          This 200W solar starter kit by Renogy is perfect for off-grid
          solutions—RVs, cabins, boats, and sheds. It includes two 100W mono
          panels, a 30A charge controller, and all connectors. Ideal for
          beginners starting their solar journey.
        </p>

        <div className="w-full flex justify-between py-3">
          <div className="flex items-center">
            <h5 className="line-through text-[17px] pr-3 text-[#ef4444] font-medium">
              Rs40000
            </h5>
            <h5 className="text-[20px] text-[#10b981] font-bold">Rs20000</h5>
          </div>
          <span className="text-[16px] text-[#3b82f6] font-medium">
            🔥 1.2k sold
          </span>
        </div>

        {/* Countdown */}
        <div className="flex w-full items-start">
          <CountDown />
        </div>

        {/* Button */}
        <div className="mt-4">
          <Link
            to={`/product/${productName}`}
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white py-2 px-6 rounded-lg font-semibold transition duration-300"
          >
            See Details
          </Link>
        </div>

        {/* See more */}
        <div className="flex justify-end mt-6">
          <span className="flex items-center gap-2 text-[#334155] hover:text-[#3b82f6] cursor-pointer transition text-[16px] font-medium">
            See more events <BsArrowRight size={20} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
