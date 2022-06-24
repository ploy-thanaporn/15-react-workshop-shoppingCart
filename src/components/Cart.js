import React from "react";
import { MyCartContext } from "../management/context";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, total } = MyCartContext();

  if (cart.length === 0) {
    // No Product in cart
    return (
      <div className="shopping-cart">
        <div className="empty">No Product in shopping cart</div>
      </div>
    );
  } else {
    return (
      <div className="shopping-cart">
        <div className="title">Product</div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <div className="footer">Total: {total.toLocaleString()} THB</div>
      </div>
    );
  }
};

export default Cart;
