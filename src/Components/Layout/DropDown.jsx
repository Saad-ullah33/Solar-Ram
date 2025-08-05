import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../Styles/Style";
import { motion } from "framer-motion";

const DropDown = ({ setDropDown, categoriesData }) => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    navigate(`/products?category=${data.title}`);
    window.location.reload(); // optional: better to use state management instead
    setDropDown(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="absolute top-14 w-[270px] bg-white rounded-b-lg z-30 shadow-lg overflow-hidden"
    >
      {categoriesData &&
        categoriesData.map((data, index) => (
          <div
            key={index}
            onClick={() => handleSubmit(data)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all duration-200 group"
          >
            <img
              src={data.image_Url}
              alt="category"
              className="w-[30px] h-[30px] object-contain rounded-full border p-1 group-hover:scale-105 transition"
            />
            <h3 className="text-gray-800 font-medium group-hover:text-blue-600 transition select-none">
              {data.title}
            </h3>
          </div>
        ))}
    </motion.div>
  );
};

export default DropDown;
