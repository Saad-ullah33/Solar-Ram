import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../Styles/Style";
import { BsFillBagFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const OrderDetails = ({ isAuthor }) => {
  const [click, setClick] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");
  const [orderStatus, setOrderStatus] = useState("Processing");
  const orderInfo = JSON.parse(localStorage.getItem("latestOrder"));
  const getOrderInfo = orderInfo?.cart;
  const { id } = useParams();

  const product = getOrderInfo?.[0] || {};
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={`min-h-screen ${styles.section} py-10 bg-[#f4faff]`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <BsFillBagFill size={28} className="text-blue-500" />
          <h1 className="text-2xl font-semibold text-gray-800">Order Details</h1>
        </div>
      </div>

      {/* Order Info */}
      <div className="flex items-center justify-between border-b pb-4 text-gray-600 text-sm">
        <p>
          <span className="font-semibold text-gray-700">Order ID:</span> #{id || "12345"}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Placed on:</span> 2023-05-29
        </p>
      </div>

      {/* Product Card */}
      <div className="flex justify-between mt-6 border p-4 rounded-md shadow-sm bg-white">
        <div className="flex gap-4">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2021/5/YD/ZD/GC/125374226/solar-panel-500x500.jpg"
            alt="solar product"
            className="w-[80px] h-[80px] object-cover rounded"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              300W Solar Panel Kit
            </h2>
            <p className="text-gray-600 font-medium">
              Rs. 65,000 <RxCross1 className="inline mx-1 text-gray-500" size={10} /> 1
            </p>
          </div>
        </div>

        {!isAuthor && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={() => setClick(true)}
          >
            Write a Review
          </button>
        )}
      </div>

      {/* Review Modal */}
      {click && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="w-[95%] md:w-[60%] lg:w-[40%] bg-white rounded-md p-6 shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Give a Review</h2>
              <RxCross1
                size={25}
                className="cursor-pointer hover:text-red-500"
                onClick={() => setClick(false)}
              />
            </div>

            <div className="mt-4 flex items-center gap-4">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2021/5/YD/ZD/GC/125374226/solar-panel-500x500.jpg"
                className="w-14 h-14 object-cover rounded"
                alt="solar product"
              />
              <div>
                <h3 className="font-medium text-gray-700">300W Solar Panel Kit</h3>
                <p className="text-sm text-gray-500">Rs. 65,000</p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-gray-700 mb-2">Rating</h4>
              <div className="flex space-x-2">
                {stars.map((star) =>
                  rating >= star ? (
                    <AiFillStar
                      key={star}
                      size={25}
                      color="#f6Ba00"
                      onClick={() => setRating(star)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <AiOutlineStar
                      key={star}
                      size={25}
                      color="#f6Ba00"
                      onClick={() => setRating(star)}
                      className="cursor-pointer"
                    />
                  )
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">
                Comment <span className="text-gray-400">(optional)</span>
              </label>
              <textarea
                className="w-full mt-1 p-2 border rounded-md text-sm text-gray-700 focus:outline-blue-400"
                rows={4}
                placeholder="Write something..."
                value={reviewComment}
                onChange={(e) => setReviewComment(e.target.value)}
              />
            </div>

            <button
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              onClick={() => {
                // Add review submission logic here
                setClick(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Total */}
      <div className="mt-6 text-right">
        <p className="text-lg font-semibold text-gray-800">
          Total Price: <span className="text-blue-600">Rs. 65,000</span>
        </p>
      </div>

      {/* Shipping & Payment Info */}
      <div className="mt-8 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">Shipping Address</h3>
          <p className="text-sm text-gray-600">1132 Goodwin Avenue 3230</p>
          <p className="text-sm text-gray-600">WA, US</p>
          <p className="text-sm text-gray-600">01305282768</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">Payment Info</h3>
          <p className="text-sm text-gray-600">Status: {orderStatus}</p>
        </div>
      </div>

      {/* Status Update for Admin */}
      {isAuthor && (
        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Order Status</h3>
          <select
            className="border px-4 py-2 rounded text-sm focus:outline-blue-400"
            value={orderStatus}
            onChange={(e) => setOrderStatus(e.target.value)}
          >
            <option>Processing</option>
            <option>Transferred to delivery partner</option>
            <option>Received</option>
            <option>On the way</option>
            <option>Delivered</option>
          </select>

          <button
            className="mt-4 bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded hover:bg-blue-200 transition"
            onClick={() => alert(`Status updated to "${orderStatus}"`)}
          >
            Update Status
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
