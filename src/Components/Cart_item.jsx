import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import store from '../Redux/store';
import { deleteFromCart } from '../Redux/Prod_redux/actions';
function Cart_item({item}) {
    const [quantity , setquantity] = useState(1)
    const dispatch = useDispatch()
  const cartData = useSelector((store)=>store.cart);
  console.log(cartData);
  return (
    <div class="row gy-3">
                    <div class="col-lg-5">
                      <div class="me-lg-5">
                        <div class="d-flex">
                          <img src={item.image} class="border rounded me-3" style={{width: "96px", height: "96px"}}  />
                          <div class="">
                            <a href="#" class="nav-link">{item.brand}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                      <div class="">
                        <select style={{width: "100px"}} value={quantity} onChange={(e)=>setquantity(e.target.value)}  class="form-select me-4">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div class="">
                        <span class="h6">₹ {item.price * quantity} Total</span> <br />
                        <small class="text-muted text-nowrap"> ₹ {item.price} / per item </small>
                      </div>
                    </div>
                    <div class="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                      <div onClick={()=>dispatch(deleteFromCart(item))} class="float-md-end">
                        <a  href="#" class="btn btn-light border text-danger icon-hover-danger"> Remove</a>
                      </div>
                    </div>
                  </div>
  )
}

export default Cart_item