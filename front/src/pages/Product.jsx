import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AppContext from "../context/AppContext";
import Rating from "../components/Rating";
import "../styles/Producto.scss";

const Product = () => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    if (state.cart.find((x) => x._id === product._id)) return;
    addToCart(item);
  };

  const [product, setProduct] = useState([]);
  const id = window.location.pathname.split("/")[2];
  const API = "http://localhost:5000/api/products/";

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios(API + id);
      setProduct(response.data);
    };
    getProduct();
  }, [id]);

  return (
    <section className="Product">
      <figure className="Product__hero">
        <img src={`http://localhost:5000${product.image}`} alt={product.name} />
      </figure>
      <div className="Product-info">
        <span className="Produ  ct-info__category">
          {product.brand} / {product.category}
        </span>
        <h1 className="Product-info__title">{product.name}</h1>
        <div className="Product-info__more">
          <div className="rating">{Rating(parseInt(product.rating))}</div>
          <div className="reviews">
            <span>{product.numReviews}</span>
          </div>
        </div>
        <div className="Product-info__more"></div>
        <p className="Product-info__description">{product.description}</p>
        <h3 className="Product-info__price">${product.price}</h3>

        <div className="Product-info__addtocart">
          <button
            onClick={() => handleClick(product)}
            className={`${
              state.cart.find((x) => x._id === product._id) ? "added" : "add"
            }`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
