import React from "react";
import { MyCartContext } from "../management/context";

const Cart = () => {
  const { amount } = MyCartContext();
  return (
    <button className="button">
      <span>Shopping Cart</span>
      <span className="badge">{amount}</span>
    </button>
  );
};

export default Cart;
