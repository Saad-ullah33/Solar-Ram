import React, { useState } from "react";
import styles from "../../Styles/Style";
import { HiMinus, HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "../../Redux/CartAction";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartSingle = ({ data, quantityChangeHanlder }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(data.qty || 1);

  const totalPrice = data.discount_price * value;

  const increment = (data) => {
    if (data.stock <= value) {
      toast.warning("Product stock limited!", { autoClose: 1500 });
    } else {
      const newQty = value + 1;
      setValue(newQty);
      quantityChangeHanlder({ ...data, qty: newQty });
    }
  };

  const decrement = (data) => {
    const newQty = value === 1 ? 1 : value - 1;
    setValue(newQty);
    quantityChangeHanlder({ ...data, qty: newQty });
  };

  const handleCrossIcon = (data) => {
    dispatch(removeFromCart(data));
    toast.info("Removed from cart", { autoClose: 1500 });
  };

  return (
    <div className="border-b py-4 px-2 md:px-4 transition hover:shadow-sm bg-white rounded-md border border-sky-100">
      <div className="flex items-center w-full gap-4">
        {/* Quantity Control */}
        <div className="flex flex-col items-center">
          <button
            className="bg-sky-500 hover:bg-sky-600 text-white rounded-full w-[30px] h-[30px] flex items-center justify-center shadow"
            onClick={() => increment(data)}
          >
            <HiPlus size={18} />
          </button>
          <span className="text-sm font-semibold py-1">{value}</span>
          <button
            className="bg-sky-100 hover:bg-sky-200 text-sky-800 rounded-full w-[30px] h-[30px] flex items-center justify-center shadow"
            onClick={() => decrement(data)}
          >
            <HiMinus size={18} />
          </button>
        </div>

        {/* Product Image */}
        <img
          src={data.image_Url[0].url}
          alt="product"
          className="w-[80px] h-[80px] object-contain border border-sky-200 rounded-md"
        />

        {/* Product Details */}
        <div className="flex-1 px-3 md:px-5">
          <h1 className="text-md font-bold text-gray-800">{data.name}</h1>
          <p className="text-sm text-gray-600">
            ₨{data.discount_price.toLocaleString()} x {value}
          </p>
          <p className="text-lg font-semibold text-sky-600 mt-1">
            ₨{totalPrice.toLocaleString()}
          </p>
        </div>

        {/* Remove Button */}
        <RxCross1
          size={22}
          onClick={() => handleCrossIcon(data)}
          className="cursor-pointer text-gray-500 hover:text-sky-700 transition duration-200"
        />
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </div>
  );
};

export default CartSingle;
