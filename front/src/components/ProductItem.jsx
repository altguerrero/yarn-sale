import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import addToCartImage from "../assets/icons/bt_add_to_cart.svg";
import addedToCartImage from "../assets/icons/bt_added_to_cart.svg";
import "../styles/ProductItem.scss";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    if (item.countInStock > 1) {
      addToCart(item);
    }
  };

  return (
    <Link className="ProductItem" to={`/product/${product._id}`}>
      <img src={`http://localhost:5000${product.image}`} alt={product.name} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.name}</p>
        </div>
        <figure>
          {state.cart.find((x) => x._id === product._id) ? (
            <img src={addedToCartImage} alt="add to cart" />
          ) : (
            <img
              onClick={() => handleClick(product)}
              src={addToCartImage}
              alt="added to cart"
              className={`${product.countInStock > 0 ? "stock" : "no-stock"}`}
            />
          )}
        </figure>
      </div>
    </Link>
  );
};

export default ProductItem;
