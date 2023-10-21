import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../store/cart/cart.action";

import { CartItem } from "../store/cart/cart.types";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="w-full flex h-[100px] md:h-[120px] border-b border-gray-900 py-[15px] text-[10px] md:text-[20px] items-center text-start">
      <div className="w-[23%] md:w-[15%] h-full">
        <img src={imageUrl} alt={`${name}`} className="w-full h-full" />
      </div>
      <span className="w-[20%] md:w-[23%] ml-5">{name}</span>
      <span className="flex w-[23%] md:w-[20%]">
        <div className="cursor-pointer" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="mx-[10px]">{quantity}</span>
        <div className="cursor-pointer" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="w-[15%]">{price}</span>
      <div className="md:pl-10 cursor-pointer" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
