import '../CSS/Cart.css'
import Cart_item from '../Components/Cart_item';

export default function Cart() {
    let data = [{
        image: 'https://pawsindia.com/cdn/shop/products/1_ee00a414-7e44-4ab6-8129-aadda2f19498.png?v=1685797240',
        brand: 'ROYAL CANIN',
        title: 'Royal Canin - Shih Tzu Adult Dry Food',
        details: 'Suitable for dogs over 10 months old, ROYAL CANIN® Shih Tzu Adult is specially formulated with all the nutritional needs of your adult Shih Tzu in mind.ROYAL CANIN® Shih Tzu Adult contains an exclusive combination of nutrients that help to maintain your dogs skin health',
        price: 549,
        category: 'dog'
      }]
  return (
    <div className='App'>
    
   
     
        <header>
        
        
        
      
        
        <div class="bg-primary">
          <div class="container py-4">
            
            <nav class="d-flex">
              <h6 class="mb-0">
                <a href="" class="text-white-50">Home</a>
                <span class="text-white-50 mx-2"> &gt; </span>
                <a href="" class="text-white"><u>Shopping cart</u></a>
              </h6>
            </nav>
            
          </div>
        </div>
        
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
                    <p class="mb-2">₹ 329.00</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Discount:</p>
                    <p class="mb-2 text-success">-₹ 60.00</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">TAX:</p>
                    <p class="mb-2">₹ 14.00</p>
                  </div>
                  <hr />
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Total price:</p>
                    <p class="mb-2 fw-bold">₹ 283.00</p>
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
      
      
   
      <footer class="text-center text-lg-start text-muted bg-primary mt-3">
        
        <section class="">
          <div class="container text-center text-md-start pt-4 pb-4">
            
            <div class="row mt-3">
             
              <div class="col-12 col-lg-3 col-sm-12 mb-2">
               
                <a href="https://therichpost.com/" target="_blank" class="display-6 text-white h2">
                  Ecommerce
                </a>
                <p class="mt-1 text-white">
                  © 2023
                </p>
              </div>
             
      
             
              <div class="col-6 col-sm-4 col-lg-2">
                
                <h6 class="text-uppercase text-white fw-bold mb-2">
                  Store
                </h6>
                <ul class="list-unstyled mb-4">
                  <li><a class="text-white-50" href="#">About us</a></li>
                  <li><a class="text-white-50" href="#">Find store</a></li>
                  <li><a class="text-white-50" href="#">Categories</a></li>
                  <li><a class="text-white-50" href="#">Blogs</a></li>
                </ul>
              </div>
             
      
             
              <div class="col-6 col-sm-4 col-lg-2">
                
                <h6 class="text-uppercase text-white fw-bold mb-2">
                  Information
                </h6>
                <ul class="list-unstyled mb-4">
                  <li><a class="text-white-50" href="#">Help center</a></li>
                  <li><a class="text-white-50" href="#">Money refund</a></li>
                  <li><a class="text-white-50" href="#">Shipping info</a></li>
                  <li><a class="text-white-50" href="#">Refunds</a></li>
                </ul>
              </div>
             
      
             
              <div class="col-6 col-sm-4 col-lg-2">
                
                <h6 class="text-uppercase text-white fw-bold mb-2">
                  Support
                </h6>
                <ul class="list-unstyled mb-4">
                  <li><a class="text-white-50" href="#">Help center</a></li>
                  <li><a class="text-white-50" href="#">Documents</a></li>
                  <li><a class="text-white-50" href="#">Account restore</a></li>
                  <li><a class="text-white-50" href="#">My orders</a></li>
                </ul>
              </div>
             
      
             
              <div class="col-12 col-sm-12 col-lg-3">
                
                <h6 class="text-uppercase text-white fw-bold mb-2">Newsletter</h6>
                <p class="text-white">Stay in touch with latest updates about our products and offers</p>
                <div class="input-group mb-3">
                  <input type="email" class="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                  <button class="btn btn-light border shadow-0" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                    Join
                  </button>
                </div>
              </div>
             
            </div>
           
          </div>
        </section>
       
      
        <div class="">
          <div class="container">
            <div class="d-flex justify-content-between py-4 border-top">
             
              <div>
                <i class="fab fa-lg fa-cc-visa text-white"></i>
                <i class="fab fa-lg fa-cc-amex text-white"></i>
                <i class="fab fa-lg fa-cc-mastercard text-white"></i>
                <i class="fab fa-lg fa-cc-paypal text-white"></i>
              </div>
            
              <div class="dropdown dropup">
                <a class="dropdown-toggle text-white" href="#" id="Dropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i class="flag-united-kingdom flag m-0 me-1"></i>English </a>
      
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="Dropdown">
                  <li>
                    <a class="dropdown-item" href="#"><i class="flag-united-kingdom flag"></i>English <i class="fa fa-check text-success ms-2"></i></a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#"><i class="flag-poland flag"></i>Polski</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><i class="flag-china flag"></i>中文</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><i class="flag-japan flag"></i>日本語</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><i class="flag-germany flag"></i>Deutsch</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><i class="flag-france flag"></i>Français</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><i class="flag-spain flag"></i>Español</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><i class="flag-russia flag"></i>Русский</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><i class="flag-portugal flag"></i>Português</a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
      
      
       
    </div>
  );
}
