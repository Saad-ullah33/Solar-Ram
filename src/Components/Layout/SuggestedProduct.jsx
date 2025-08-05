import React, { useEffect, useState } from "react";
import { productData } from "../../Static/data.jsx";
import styles from "../../Styles/Style.js";
import Product from "./Product";
import { motion } from "framer-motion";

const SuggestedProduct = ({ data }) => {
  const [products, setProducts] = useState([]);

useEffect(() => {
    if (!data?.category || !data?.id) {
      setProducts([]);
      return;
    }
    const relatedProducts = productData
      .filter(
        (product) =>
          product.category === data.category &&
          product.id.toString() !== data.id.toString()
      )
      .slice(0, 4);
    setProducts(relatedProducts);
  }, [data]);

  return (
    <>
      {data && (
        <div className={`${styles.section} py-6`}>
          <h2 className={styles.heading}>🔋 Related Solar Products ☀️</h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {products.length > 0 ? (
              products.map((product) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={product.id}
                >
                  <Product data={product} />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No related solar products found.
              </p>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SuggestedProduct;