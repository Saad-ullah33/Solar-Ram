import React, { useEffect, useState } from "react";
import { productData } from "../../Static/data";
import styles from "../../Styles/Style";
import Product from "./Product";

const BestDeals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);

    const firstFive = d.slice(0, 5);

    setData(firstFive);
  }, []);

  return (
    <div className={`${styles.section} bg-blue-50 py-8 rounded-lg shadow-sm`}>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">
          ⚡ Best Solar Deals
        </h1>
        <p className="text-gray-600 mt-2">
          Grab the most popular and high-selling solar products!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
        {productData &&
          data.map((data, index) => (
            <div
              className="hover:scale-[1.02] transform transition duration-300"
              key={index}
            >
              <Product data={data} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestDeals;
