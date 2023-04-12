import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElement";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/NavBar";

import "../CartContent/CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className='cart-message-center'>Your cart is empty</h2>
      )}
    </>
  );
};

export default CartContent;
