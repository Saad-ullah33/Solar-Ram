import React from "react";
import { Link } from "react-router-dom";
import processingGif from "@/assets/processing.gif";

const TrackOrder = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <img
        src={processingGif}
        alt="Order Processing"
        className="w-[120px] h-[120px] mb-6 animate-pulse"
      />
      <h1 className="font-bold text-[28px] text-gray-800 text-center mb-2">
        Your order is being processed!
      </h1>
      <p className="text-gray-600 text-center text-[16px] mb-6">
        We're preparing your solar equipment for shipment. You will be notified once it's on the way.
      </p>
      <Link to="/" className="mt-2">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-lg transition duration-300 shadow-md">
          Back to Shop
        </button>
      </Link>
    </div>
  );
};

export default TrackOrder;
