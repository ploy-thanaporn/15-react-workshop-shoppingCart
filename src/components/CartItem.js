import React from "react";
import plus from "../image/plus.svg";
import minus from "../image/minus.svg";
import deleteicon from "../image/delete-icn.svg";
import { MyCartContext } from "../management/context";

const CartItem = ({ id, name, image_url, price, quantity }) => {
  const { removeItem, toggleQuantity } = MyCartContext();
  return (
    <div className="item">
      <div className="product-image">
        <img src={image_url} alt="" />
      </div>
      <div className="description">
        <span>{name}</span>
        <span>Price: {price.toLocaleString()} THB</span>
      </div>
      <div className="quantity">
        <button
          className="plus-btn"
          onClick={() => toggleQuantity(id, "increment")}
        >
          <img src={plus} alt="" />
        </button>
        <input type="text" value={quantity} disabled />
        <button
          className="minus-btn"
          onClick={() => toggleQuantity(id, "decrement")}
        >
          <img src={minus} alt="" />
        </button>
      </div>
      <div className="total-price">{(quantity * price).toLocaleString()}</div>
      <div className="remove" onClick={() => removeItem(id)}>
        <img src={deleteicon} alt="" />
      </div>
    </div>
  );
};

export default CartItem;
