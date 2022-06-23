import React from "react";
import CartItem from "./CartItem";
import CartData from "../data/CartData";

const Cart = () => {
  return (
    <div className="shopping-cart">
      <div className="title">Product</div>
      {CartData.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <div className="footer">Total: 5 THB</div>
    </div>
  );
};

export default Cart;
