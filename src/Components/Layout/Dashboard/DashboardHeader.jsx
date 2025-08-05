import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";

const DashboardHeader = () => {
  const sellerInfo = JSON.parse(localStorage.getItem("sellerInfo"));
  const photoUrl = sellerInfo?.photoUrl;
  const seller_id = JSON.parse(localStorage.getItem("seller_id"));

  return (
    <div className="w-full h-[80px] bg-white shadow-md sticky top-0 left-0 z-50 flex items-center justify-between px-6">
      {/* Logo or Brand Name */}
      <Link to="/" className="flex items-center gap-2">
        {/* You can use your actual logo here */}
        {/* <img src={Logo} alt="Logo" className="w-[150px] h-auto" /> */}
        <span className="text-[24px] font-bold text-[#3957db] tracking-wide">SolarRam</span>
      </Link>

      {/* Navigation Icons */}
      <div className="flex items-center gap-4">
        <Link to="/dashboard-cupons" title="Coupons">
          <AiOutlineGift
            size={28}
            className="text-gray-600 hover:text-[#3957db] transition"
          />
        </Link>

        <Link to="/dashboard-events" title="Events">
          <MdOutlineLocalOffer
            size={28}
            className="text-gray-600 hover:text-[#3957db] transition"
          />
        </Link>

        <Link to="/dashboard-products" title="Products">
          <FiShoppingBag
            size={28}
            className="text-gray-600 hover:text-[#3957db] transition"
          />
        </Link>

        <Link to="/dashboard-orders" title="Orders">
          <FiPackage
            size={28}
            className="text-gray-600 hover:text-[#3957db] transition"
          />
        </Link>

        <Link to="/dashboard-messages" title="Messages">
          <BiMessageSquareDetail
            size={28}
            className="text-gray-600 hover:text-[#3957db] transition"
          />
        </Link>

        {/* Seller Avatar */}
        <Link to={`/shop/${seller_id}`}>
          <img
            src={photoUrl || avatar}
            alt="Seller Avatar"
            title="Profile"
            className="w-[45px] h-[45px] object-cover rounded-full border-2 border-[#3957db] hover:scale-105 transition"
          />
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;
