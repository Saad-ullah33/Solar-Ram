import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import styles from "../../Styles/Style";
import InnerImageZoom from "react-inner-image-zoom";

const ProductDetails = ({ data }) => {
  const [click, setClick] = useState(false);

  if (!data) {
    return (
      <div className="w-full py-20 text-center text-gray-500 text-xl">
        Product not found.
      </div>
    );
  }

  const { name, price, description, image_Url, stock } = data;

  return (
    <div className="bg-white">
      <div className={`${styles.section} w-[90%] py-10 flex flex-col md:flex-row gap-6`}>
        {/* Product Image with Zoom */}
        <div className="w-full md:w-1/2 flex justify-center">
          {image_Url && image_Url.length > 0 ? (
            <InnerImageZoom
              src={image_Url[0].url}
              zoomSrc={image_Url[0].url}
              zoomType="hover"
              zoomPreload
              alt={name}
              className="max-h-[500px] object-contain rounded-lg"
            />
          ) : (
            <div className="h-[300px] w-full bg-gray-100 flex items-center justify-center text-gray-400 text-lg">
              No image available
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold">{name}</h1>
          <p className="text-xl text-red-600 font-bold">Rs {price}</p>
          <p className="text-gray-700">{description}</p>
          <p className={`font-semibold ${stock > 0 ? "text-green-600" : "text-red-500"}`}>
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-4">
            <button
              className="bg-black text-white px-4 py-2 rounded hover:opacity-90 flex items-center gap-2"
              disabled={stock === 0}
            >
              <BsCartPlus size={20} />
              Add to Cart
            </button>
            <button onClick={() => setClick(!click)} className="text-red-600">
              {click ? <AiFillHeart size={25} /> : <AiOutlineHeart size={25} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;