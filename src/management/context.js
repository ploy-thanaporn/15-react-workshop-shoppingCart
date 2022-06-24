// สร้าง context api -> แชร์ข้อมูลในแต่ละ component (context)
import { createContext, useContext, useReducer, useEffect } from "react";
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

  // ดักจับค่าที่อยู่ใน state ว่ามีการเปลี่ยนแปลงค่าด้านในรึป่าว ถ้ามีก็จะสั่ง dispatch ให้คำนวณ
  // ตรงใน [] เป็นการบอกว่า ถ้า state.cart มีการเปลี่ยนแปลง จะให้ทำอะไร
  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.cart]);

  const removeItem = (id) => {
    // payload จะทำการรับเอาเงื่อนไข หรือค่าที่ส่งเข้าไปในทำงานภายใน action
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const toggleQuantity = (id, type) => {
    dispatch({ type: "TOGGLE_QUANTITY", payload: { id, type } });
  };

  return (
    <CartContext.Provider value={{ ...state, removeItem, toggleQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const MyCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
