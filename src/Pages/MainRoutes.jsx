import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from '../Components/Product_details'
import LoginSignup from './LoginSignup'
import Home from './Home'

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product_details/:id' element={<ProductDetails/>}/>
      <Route path='/login' element={<LoginSignup/>}/>

    </Routes>
  )
}

export default MainRoutes