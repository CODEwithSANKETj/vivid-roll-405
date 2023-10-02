
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from '../Components/Product_details'
import LoginSignup from './LoginSignup'
import Home from './Home'
import Product_list from './Product_list'
import Cart from './Cart'
import Service from './Service'
import { Paymentpage } from './PaymentPage'

function MainRoutes() {
  return (
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/product_details/:id' element={<ProductDetails/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/allproducts' element={<Product_list/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/services/:id' element={<Service/>}/>
      <Route path='/checkout' element={<Paymentpage/>}/>


    </Routes>
  );
}

export default MainRoutes;
