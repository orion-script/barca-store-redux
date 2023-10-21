import React, { Fragment } from "react";
import ContainerLayout from "../Layouts/ContainerLayout";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../store/cart/cart.selector";

import CheckoutItem from "../components/CheckoutItem";
// import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <Fragment>
      <Navbar />
      <ContainerLayout>
        <h2 className="text-[32px] mt-20 mb-[25px] text-center">
          Checkout Page
        </h2>

        <div className="w-11/12 md:w-[55%] min-h-[90vh] flex flex-col items-center m-auto text-center">
          <div className="w-full py-[10px] px-0 flex justify-between border-b border-gray-900">
            <div className="capitalize w-[23%]">
              <span className="w-[8%] hidden md:block">Product</span>
              <span className="md:hidden">Prd.</span>
            </div>
            <div className="capitalize w-[23%] ">
              <span className="w-[8%] hidden md:block">Description</span>
              <span className="md:hidden">Des.</span>
            </div>
            <div className="capitalize w-[23%]">
              <span className="w-[8%] hidden md:block">Quantity</span>
              <span className="md:hidden">Qnt.</span>
            </div>
            <div className="capitalize w-[23%]">
              <span className="w-[8%] hidden md:block">Price</span>
              <span className="md:hidden">Prc.</span>
            </div>
            <div className="capitalize w-[23%]">
              <span className="w-[8%] hidden md:block">Remove</span>
              <span className="md:hidden">Rem.</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <span className="mt-[30px] ml-auto text-[36px]">
            Total: ${cartTotal}
          </span>
        </div>
      </ContainerLayout>
    </Fragment>
  );
};

export default Checkout;
