import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Shop from "./pages/shop";
import CheckoutPage from "./pages/Checkout";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
