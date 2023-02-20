import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElement";
import CartTotal from "./CartTotal";

import "../CartContent/CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return cart.length > 0 ? (
    <>
      <CartElements />
      <CartTotal />
    </>
  ) : (
    <h2 className='cart-message-center'>Tu carrito esta vacio</h2>
  );
};

export default CartContent;
