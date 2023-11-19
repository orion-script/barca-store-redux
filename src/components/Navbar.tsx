import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavLayout from "../Layouts/NavLayout";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import CartIcon from "./CartIcon";
import { MdClose } from "react-icons/md";
import CartDropdown from "./CartDropDown";
import { selectIsCartOpen } from "../store/cart/cart.selector";
import { selectCurrentUser } from "../store/user/user.selector";
import { signOutStart } from "../store/user/user.action";

function Navbar() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <NavLayout>
      <nav className="bg-[#fff] w-full h-14 flex justify-between items-center fixed top-0 px-5 md:px-10 z-50">
        <Link to="/" className="">
          BARCA
        </Link>

        <ul className="flex items-center">
          <li className="">
            <a href="/shop">SHOP</a>
          </li>
          {currentUser ? (
            <Link to="" onClick={signOutUser} className="mx-10">
              SIGN OUT
            </Link>
          ) : (
            <Link to="/login" className="mx-10">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </ul>

        {isCartOpen && <CartDropdown />}
      </nav>
    </NavLayout>
  );
}

export default Navbar;
