// สร้าง context api -> แชร์ข้อมูลในแต่ละ component (context)
import { createContext, useReducer } from "react";
import CartData from "../data/CartData";
import reducer from "./reducer";

const initState = {
  cart: CartData,
  total: 0,
  amount: 0,
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // state = ก้อนข้อมูล , dispatch = รูปแบบการเปลี่ยนแปลงข้อมูล หรือ รูปแบบ action ที่เกิดขึ้นภายในแอพ
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};
export { CartContext, CartProvider };
