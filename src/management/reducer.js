// ใช้ในการกำหนด action ที่เกิดขึ้นภายในแอพ (reducer)

const reducer = (state, action) => {
  // remove item
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  // update quantity
  if (action.type === "TOGGLE_QUANTITY") {
    let newCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "increment") {
            return {
              ...item,
              quantity: item.quantity < 5 ? item.quantity + 1 : item.quantity,
            };
          }
          if (action.payload.type === "decrement") {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }
        return item;
        //   check ปริมาณสินค้าที่อยู่ในตะกร้า
      })
      .filter((item) => item.quantity !== 0);
    return {
      ...state,
      cart: newCart,
    };
  }

  // คำนวณ total, amount
  if (action.type === "CALCULATE_TOTAL") {
    const { total, amount } = state.cart.reduce(
      (cartTotal, item) => {
        // total
        const { price, quantity } = item;
        const itemtotal = price * quantity;
        cartTotal.total += itemtotal;
        // amount
        cartTotal.amount += quantity;
        return cartTotal;
      },
      {
        // กำหรดค่าเริ่มต้น
        total: 0,
        amount: 0,
      }
    );
    return {
      ...state,
      total,
      amount,
    };
  }
};

export default reducer;
