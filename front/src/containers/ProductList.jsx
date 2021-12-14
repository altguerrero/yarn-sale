import React from "react";
import ProductItem from "../components/ProductItem";
import useGetProducts from "../hooks/useGetProducts";
import "../styles/ProductList.scss";

const API = "http://localhost:5000/api/products";

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
