import { useSelector } from "react-redux";
import "../CSS/Cart.css";
import Cart_item from "../Components/Cart_item";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import ConditionalNavbar from "../Components/ContitionalNavbar";
export default function Cart() {
  const cartData = useSelector((store) => store.cart);
  const navigate = useNavigate();
  console.log(cartData.cart);
  let data = cartData.cart;

  return (
    <div className="App">
      <ConditionalNavbar />

      <section className="bg-light my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="card border shadow-0">
                <div className="m-4">
                  <h4 className="card-title mb-4">Your shopping cart</h4>
                  {/* All items appended here from the cart data * */}
                  {data.length > 0 &&
                    data.map((item, index) => {
                      return <Cart_item key={index} item={item} />;
                    })}
                </div>

                <div className="border-top pt-4 mx-4 mb-4">
                  <p>
                    <i className="fas fa-truck text-muted fa-lg"></i> Free
                    Delivery within 1-2 weeks
                  </p>
                  <p className="text-muted">
                    To complete your purchase, click Proceed to Checkout. If you
                    have a promo code, you can apply it by clicking Apply Promo
                    Code.
                    <hr />
                    By proceeding, you agree to our{" "}
                    <a href="/terms-and-conditions">
                      Terms and Conditions
                    </a> and <a href="/privacy-policy">Privacy Policy</a>.
                    <hr />
                    If you have any questions or need assistance, our customer
                    support team is here to help. You can reach us via phone at
                    1-800-123-4567 or through our Live Chat.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card mb-3 border shadow-0">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label className="form-label">Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control border"
                          name=""
                          placeholder="Coupon code"
                        />
                        <button className="btn btn-light border">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card shadow-0 border">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2">₹ {cartData.total_amount}.00</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Discount:</p>
                    <p className="mb-2 text-success">
                      -₹ {cartData.total_amount !== 0 ? -60 : 0}.00
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">TAX:</p>
                    <p className="mb-2">
                      ₹ {cartData.total_amount !== 0 ? 14 : 0}.00
                    </p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2 fw-bold">
                      ₹{" "}
                      {cartData.total_amount !== 0
                        ? cartData.total_amount - 60 + 14
                        : 0}
                      .00
                    </p>
                  </div>

                  <div className="mt-3">
                    <a
                      onClick={() => navigate("/checkout")}
                      href="#"
                      className="btn btn-success w-100 shadow-0 mb-2"
                      id="payment"
                    >
                      {" "}
                      Make Purchase{" "}
                    </a>
                    <a href="#" className="btn btn-light w-100 border mt-2">
                      {" "}
                      Back to shop{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
