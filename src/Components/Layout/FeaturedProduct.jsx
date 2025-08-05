import React, { useEffect, useState } from "react";
import styles from "../../Styles/Style";
import { productData } from "../../Static/data";
import Product from "./Product";

const FeaturedProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);

    const firstTeen = d.slice(0, 10);
    setData(firstTeen);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#f0f8ff] to-white py-10">
      <div className={`${styles.section}`}>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-2 animate-fadeIn">
            🌟 Featured Solar Products
          </h1>
          <p className="text-gray-600 text-sm">
            Hand-picked bestselling solar items just for you!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 transition-all">
          {data &&
            data.map((product, index) => (
              <div
                key={index}
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <Product data={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
