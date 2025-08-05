import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../Styles/Style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addTocart } from "../../Redux/CartAction";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../Redux/WishlistAction";
import { motion } from "framer-motion";

const ProductDetailsCart = ({ data, setOpen }) => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart?.find((item) => item.id === id);
    if (isItemExists) {
      toast.error("Item already exists in cart");
    } else if (data.stock < count) {
      toast.error("Product stock limited!");
    } else {
      const cartData = { ...data, qty: count };
      dispatch(addTocart(cartData));
      toast.success("Item added to cart");
    }
  };

  useEffect(() => {
    setClick(wishlist?.some((item) => item.id === data?.id));
  }, [wishlist]);

  const toggleWishlist = () => {
    setClick(!click);
    click
      ? dispatch(removeFromWishlist(data))
      : dispatch(addToWishlist(data));
  };

  return (
    <div className="bg-white">
      {data && (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#00000050] flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="w-[92%] md:w-[70%] h-[90vh] rounded-lg p-5 relative bg-white overflow-y-auto shadow-lg"
          >
            {/* Close Button */}
            <RxCross1
              size={32}
              className="absolute top-3 right-3 cursor-pointer hover:text-red-500 transition"
              onClick={() => setOpen(false)}
            />

            <div className="block md:flex gap-8">
              {/* Left Section - Image & Seller Info */}
              <div className="w-full md:w-1/2">
                <img
                  src={data.image_Url[0].url}
                  alt="Product"
                  className="w-full object-contain rounded-lg"
                />
                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt="shopAvatar"
                    className="w-12 h-12 rounded-full border"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {data.shop.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      ({data.rating} ratings)
                    </p>
                  </div>
                </div>

                <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 rounded hover:opacity-90 transition text-sm flex items-center justify-center gap-2">
                  Send Message <AiOutlineMessage />
                </button>

                <h5 className="mt-4 text-red-600 text-sm">
                  ({data.total_sell}) Sold Out
                </h5>
              </div>

              {/* Right Section - Product Info */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <h1 className="text-xl font-semibold text-gray-800">
                  {data.name}
                </h1>
                <p className="text-gray-600 mt-2 text-sm">{data.description}</p>

                <div className="flex items-center gap-4 mt-4">
                  <span className="text-2xl font-bold text-green-600">
                    ₨{data.discount_price}
                  </span>
                  {data.price && (
                    <span className="text-lg line-through text-gray-400">
                      ₨{data.price}
                    </span>
                  )}
                </div>

                {/* Quantity Control + Wishlist */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={decrementCount}
                      className="bg-blue-100 px-3 py-1 rounded text-blue-700 text-lg"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100 rounded text-sm">
                      {count}
                    </span>
                    <button
                      onClick={incrementCount}
                      className="bg-blue-100 px-3 py-1 rounded text-blue-700 text-lg"
                    >
                      +
                    </button>
                  </div>

                  <div className="cursor-pointer" onClick={toggleWishlist}>
                    {click ? (
                      <AiFillHeart size={28} color="red" />
                    ) : (
                      <AiOutlineHeart size={28} />
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCartHandler(data.id)}
                  className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded flex items-center justify-center gap-2 text-sm"
                >
                  Add to Cart <AiOutlineShoppingCart />
                </button>
              </div>
            </div>

            <ToastContainer
              position="top-right"
              autoClose={2000}
              theme="light"
              pauseOnHover={false}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsCart;
