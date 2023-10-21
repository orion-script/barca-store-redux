import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "./button/button.component";
import CartItem from "./CartItem";
import { selectCartItems } from "../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="absolute w-60 h-[340px] flex flex-col p-[20px] border border-[#000] bg-[#fff] top-[90px] right-10 z-50">
      <div className="flex flex-col h-60 overflow-scroll">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="text-lg  my-[50px] mx-auto">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
