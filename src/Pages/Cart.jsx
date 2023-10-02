import { useDispatch, useSelector } from 'react-redux';
import '../CSS/Cart.css'
import Cart_item from '../Components/Cart_item';
import store from '../Redux/store';
export default function Cart() {
  const dispatch = useDispatch()
  const cartData = useSelector((store)=>store.cart);
  console.log(cartData.cart);
    let data = cartData.cart
  
  return (
    <div className='App'>
    
   
     
        <header>
        
        
        <h5>HOME - SHOPPING CART</h5>
      
        
        
        
      </header>
      
      
      <section class="bg-light my-5">
        <div class="container">
          <div class="row">
            
            <div class="col-lg-9">
              <div class="card border shadow-0">
                <div class="m-4">
                  <h4 class="card-title mb-4">Your shopping cart</h4>
                  {/* All items appended here from the cart data * */}
                  {data.length>0 && data.map((item , index)=>{
                        return <Cart_item key={index} item={item}/>
                  })}
                </div>
      
                <div class="border-top pt-4 mx-4 mb-4">
                  <p><i class="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                  </p>
                </div>
              </div>
            </div>
            
            
            <div class="col-lg-3">
              <div class="card mb-3 border shadow-0">
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label class="form-label">Have coupon?</label>
                      <div class="input-group">
                        <input type="text" class="form-control border" name="" placeholder="Coupon code" />
                        <button class="btn btn-light border">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card shadow-0 border">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Total price:</p>
                    <p class="mb-2">₹ {cartData.total_amount}.00</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Discount:</p>
                    <p class="mb-2 text-success">-₹ {cartData.total_amount!==0?-60:0}.00</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">TAX:</p>
                    <p class="mb-2">₹ {cartData.total_amount!==0?14:0}.00</p>
                  </div>
                  <hr />
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Total price:</p>
                    <p class="mb-2 fw-bold">₹ {cartData.total_amount!==0?cartData.total_amount-60+14:0}.00</p>
                  </div>
      
                  <div class="mt-3">
                    <a  href="#" class="btn btn-success w-100 shadow-0 mb-2" id='payment'> Make Purchase </a>
                    <a href="#" class="btn btn-light w-100 border mt-2"> Back to shop </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      <section>
        <div class="container my-5">
          <header class="mb-4">
            <h3>Recommended items</h3>
          </header>
      
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card px-4 border shadow-0 mb-4 mb-lg-0">
                <div class="mask px-2" style={{height: "50px"}}>
                  <div class="d-flex justify-content-between">
                    <h6><span class="badge bg-danger pt-1 mt-3 ms-2">New</span></h6>
                    <a href="#"><i class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
                  </div>
                </div>
                <a href="#" class="">
                  <img src="assets/images/7.webp" class="card-img-top rounded-2" />
                </a>
                <div class="card-body d-flex flex-column pt-3 border-top">
                  <a href="#" class="nav-link">Gaming Headset with Mic</a>
                  <div class="price-wrap mb-2">
                    <strong class="">₹ 18.95</strong>
                    <del class="">₹ 24.99</del>
                  </div>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" class="btn btn-outline-primary w-100">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card px-4 border shadow-0 mb-4 mb-lg-0">
                <div class="mask px-2" style={{height: "50px"}}>
                  <a href="#"><i class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
                </div>
                <a href="#" class="">
                  <img src="assets/images/5.webp" class="card-img-top rounded-2" />
                </a>
                <div class="card-body d-flex flex-column pt-3 border-top">
                  <a href="#" class="nav-link">Apple Watch Series 1 Sport </a>
                  <div class="price-wrap mb-2">
                    <strong class="">₹ 120.00</strong>
                  </div>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" class="btn btn-outline-primary w-100">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card px-4 border shadow-0">
                <div class="mask px-2" style={{height: "50px"}}>
                  <a href="#"><i class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
                </div>
                <a href="#" class="">
                  <img src="assets/images/9.webp" class="card-img-top rounded-2" />
                </a>
                <div class="card-body d-flex flex-column pt-3 border-top">
                  <a href="#" class="nav-link">Men's Denim Jeans Shorts</a>
                  <div class="price-wrap mb-2">
                    <strong class="">$80.50</strong>
                  </div>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" class="btn btn-outline-primary w-100">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card px-4 border shadow-0">
                <div class="mask px-2" style={{height: "50px"}}>
                  <a href="#"><i class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
                </div>
                <a href="#" class="">
                  <img src="assets/images/10.webp" class="card-img-top rounded-2" />
                </a>
                <div class="card-body d-flex flex-column pt-3 border-top">
                  <a href="#" class="nav-link">Mens T-shirt Cotton Base Layer Slim fit </a>
                  <div class="price-wrap mb-2">
                    <strong class="">$13.90</strong>
                  </div>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" class="btn btn-outline-primary w-100">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
       
    </div>
  );
}
