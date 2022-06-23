import React from "react";

const CartItem = ({ id, name, image_url, price, quantity }) => {
  return (
    <div className="item">
      <div className="product-image">
        <img src={image_url} alt="" />
      </div>
      <div className="description">
        <span>{name}</span>
        <span>Price: {price} THB</span>
      </div>
    </div>
  );
};

export default CartItem;
