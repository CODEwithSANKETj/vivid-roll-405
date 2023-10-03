import { useDispatch, useSelector } from 'react-redux';
import '../CSS/Cart.css'
import Cart_item from '../Components/Cart_item';
import store from '../Redux/store';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
export default function Cart() {
  const dispatch = useDispatch()
  const cartData = useSelector((store)=>store.cart);
  const navigate = useNavigate()
  console.log(cartData.cart);
    let data = cartData.cart
  
  return (
    <div className='App'>
      
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
                  To complete your purchase, click "Proceed to Checkout." If you have a promo code, you can apply it by clicking "Apply Promo Code."
                  <hr />
                  By proceeding, you agree to our <a href="/terms-and-conditions">Terms and Conditions</a> and <a href="/privacy-policy">Privacy Policy</a>.
                  <hr />
                    If you have any questions or need assistance, our customer support team is here to help. You can reach us via phone at 1-800-123-4567 or through our Live Chat.
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
                    <a onClick={()=>navigate('/checkout')}  href="#" class="btn btn-success w-100 shadow-0 mb-2" id='payment'> Make Purchase </a>
                    <a href="#" class="btn btn-light w-100 border mt-2"> Back to shop </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      <section>
        <Footer/>
      </section>
      
      
       
    </div>
  );
}
