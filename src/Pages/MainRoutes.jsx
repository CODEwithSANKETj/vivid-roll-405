
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from '../Components/Product_details'
import LoginSignup from './LoginSignup'
import Home from './Home'
import Product_list from './Product_list'
import Cart from './Cart'


function MainRoutes() {
  return (
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/product_details/:id' element={<ProductDetails/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/allproducts' element={<Product_list/>}/>
      <Route path='/cart' element={<Cart/>}/>


    </Routes>
  );
}

export default MainRoutes;
