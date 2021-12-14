import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/OrderItem.scss";
import close from "../assets/icons/icon_close.png";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={`http://localhost:5000${product.image}`} alt={product.name} />
      </figure>
      <p>{product.name}</p>
      <p>${product.price}</p>
      <img src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
