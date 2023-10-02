import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../Components/Product_details";
import LoginSignup from "./LoginSignup";
import Home from "./Home";
import Product_list from "./Product_list";
import Cart from "./Cart";
import Service from "./Service";
import { Paymentpage } from "./PaymentPage";
import Private from "../Components/Private";
import AdminPage from "../Admin/AdminPage";
import AdminProducts from "../Admin/AdminProducts";
import AdminAppointments from "../Admin/AdminAppointments";
import AdminUsers from "../Admin/AdminUsers";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product_details/:id" element={<ProductDetails />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/allproducts" element={<Product_list />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/services/:id" element={<Service />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/appointments" element={<AdminAppointments />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route
        path="/checkout"
        element={
          <Private>
            <Paymentpage />
          </Private>
        }
      />
    </Routes>
  );
}

export default MainRoutes;
