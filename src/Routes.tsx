import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Reset from "./pages/ResetForm";
import Shop from "./pages/shop";
import CheckoutPage from "./pages/Checkout";
import Payment from "./pages/Payment";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
