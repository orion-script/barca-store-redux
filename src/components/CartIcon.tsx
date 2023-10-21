import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import { selectCartCount, selectIsCartOpen } from "../store/cart/cart.selector";
import { setIsCartOpen } from "../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div
      className="w-11 h-11 relative flex items-center justify-center cursor-pointer"
      onClick={toggleIsCartOpen}
    >
      <BsCart className="h-6 w-6" />
      <span className="absolute text-xs font-bold bottom-3">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
