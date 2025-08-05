import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import ProductDetails from "../Components/Layout/ProductDetails";
import SuggestedProduct from "../Components/Layout/SuggestedProduct";
import { productData } from "../Static/data.jsx";
import styles from "../Styles/Style.js";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("ID from useParams:", id);
    console.log("productData IDs:", productData.map((item) => item.id));
    const foundProduct = productData.find((item) => item.id.toString() === id);
    console.log("Found product:", foundProduct);
    setData(foundProduct || null);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className={`${styles.section} min-h-screen`}>
        {data ? (
          <>
            <ProductDetails data={data} />
            <SuggestedProduct data={data} />
          </>
        ) : (
          <div className="text-center text-gray-600 py-20">
            Product not found for ID: {id}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;