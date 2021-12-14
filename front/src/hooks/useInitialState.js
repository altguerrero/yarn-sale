import { useState, useEffect } from "react";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    } catch (error) {
      localStorage.setItem("user", JSON.stringify(state.cart));
      console.log(error);
    }
  }, [state.cart]);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items._id !== payload._id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
