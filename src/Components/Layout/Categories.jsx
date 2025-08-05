import React from "react";
import styles from "../../Styles/Style";
import { brandingData, categoriesData } from "../../Static/data";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Categories = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    navigate(`/products?category=${data.title}`);
  };

  return (
    <>
      {/* Branding Highlights */}
      <div className={`${styles.section} hidden sm:block`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white my-12 p-6 rounded-xl shadow-md">
          {brandingData &&
            brandingData.map((data, index) => (
              <div
                className="flex items-start space-x-4 transition-transform hover:scale-105"
                key={index}>
                <div className="text-sky-600 text-2xl">{data.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 md:text-base">
                    {data.title}
                  </h3>
                  <p className="text-xs text-gray-500 md:text-sm">
                    {data.Description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Category Grid */}
      <div
        className={`${styles.section} bg-white mb-12 p-6 rounded-xl shadow-md`}
        id="categories">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {categoriesData &&
            categoriesData.map((data) => (
              <motion.div
                key={data.id}
                onClick={() => handleSubmit(data)}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer bg-slate-50 hover:bg-sky-50 border border-slate-200 rounded-lg p-4 flex flex-col items-center justify-center transition duration-300 shadow-sm">
                <img
                  src={data.image_Url}
                  alt={data.title}
                  className="w-[80px] h-[80px] object-contain mb-2"
                />
                <h4 className="text-sm text-gray-700 font-medium text-center">
                  {data.title}
                </h4>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
