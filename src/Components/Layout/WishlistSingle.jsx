import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeFromWishlist } from "../../Redux/WishlistAction";
import { addTocart } from "../../Redux/CartAction";
import { useDispatch, useSelector } from "react-redux";

const WishlistSingle = ({ data, setOpenWishlist }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [value] = useState(1);

  const totalPrice = data.discount_price * value;

  const handleCrossIcon = () => {
    dispatch(removeFromWishlist(data));
    toast.info("Item removed from wishlist");
  };

  const handleAddToCart = () => {
    const isItemExists = cart?.find((item) => item?.id === data.id);
    if (isItemExists) {
      toast.error("Item already in cart");
    } else {
      if (data.stock < value) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: value };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart");
      }
    }
  };

  return (
    <div className="border-b p-4 hover:bg-gray-50 transition-all duration-200 rounded-md shadow-sm">
      <div className="flex items-center justify-between w-full gap-4">
        <RxCross1
          className="cursor-pointer text-red-600 hover:text-red-800 transition"
          size={24}
          onClick={handleCrossIcon}
        />

        <img
          src={data.image_Url[0].url}
          alt="product"
          className="w-[80px] h-[80px] object-contain rounded-lg"
        />

        <div className="flex-1 pl-3">
          <h2 className="text-lg font-semibold text-gray-800">{data.name}</h2>
          <p className="text-[#d02222] text-[16px] font-bold pt-1">
            ₨{totalPrice.toLocaleString()}
          </p>
        </div>

        <BsCartPlus
          size={26}
          title="Add to cart"
          className="cursor-pointer text-green-600 hover:text-green-800 transition"
          onClick={handleAddToCart}
        />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </div>
  );
};

export default WishlistSingle;
