import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import ShippingInfo from "./ShippingInfo";
import CartData from "./CartData";
import styles from "../../../Styles/Style";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  const userAddresses = JSON.parse(localStorage.getItem("newAddressCreate")) || [];

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [number, setNumber] = useState("");

  const [couponCode, setCouponCode] = useState("");
  const [discountPrice, setDiscountPrice] = useState(null);
  const [userInfo, setUserInfo] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => e.preventDefault();

  const handlePayment = () => {
    if (!address1 || !zipCode || !country || !city) {
      toast.error("🚫 Please fill all required delivery fields!");
      return;
    }

    const shippingAddress = {
      address1,
      address2,
      zipCode,
      country,
      city,
    };

    const orderData = {
      cart,
      discountPrice,
      shippingAddress,
    };

    localStorage.setItem("latestOrder", JSON.stringify(orderData));
    navigate("/payment");
  };

  return (
    <div className="w-full min-h-screen bg-blue-50 flex flex-col items-center py-12">
      <div className="w-[95%] 1000px:w-[85%] flex flex-col 800px:flex-row gap-10">
        {/* Left - Shipping Info */}
        <div className="w-full 800px:w-[65%] bg-white p-6 rounded-xl shadow-sm border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Shipping Information</h2>
          <ShippingInfo
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            address1={address1}
            setAddress1={setAddress1}
            address2={address2}
            setAddress2={setAddress2}
            zipCode={zipCode}
            setZipCode={setZipCode}
            userAdresses={userAddresses}
            number={number}
            setNumber={setNumber}
          />
        </div>

        {/* Right - Cart Summary */}
        <div className="w-full 800px:w-[35%] bg-white p-6 rounded-xl shadow-sm border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Your Cart</h2>
          <CartData
            handleSubmit={handleSubmit}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
          />
        </div>
      </div>

      {/* Proceed Button */}
      <motion.button
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.5 }}
        onClick={handlePayment}
        className="mt-10 bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-3 rounded-lg font-semibold shadow-md transition duration-300"
      >
        Proceed to Payment
      </motion.button>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover={false}
        closeOnClick
        draggable
        theme="light"
      />
    </div>
  );
};

export default Checkout;
