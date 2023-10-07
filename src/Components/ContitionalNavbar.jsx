import { Button, Heading } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import shoppingcart from "../Images/shopping-cart.gif";
import wishlisticon from "../Images/wishlist-icon.gif";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../Redux/action_types";

function ConditionalNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((store) => store.cart);

  const auth = useSelector((store) => store.auth.isAuth);

  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div className="Navbar">
      <div className="logoSection">
        <Link to={"/"}>
          <img src={logo} alt="PAALTOO Logo" />
        </Link>
      </div>
      <div className="linksSection">
        <Heading size={"md"}>Checkout our latest Products</Heading>
      </div>

      <div className="cartContainer">
        <div onClick={() => navigate("/cart")} className="shoppingcarticon">
          <div className="count">{cartData.cart.length}</div>
          <img src={shoppingcart} alt="shoppingcarticon" />
        </div>

        <div className="wishlisticon">
          {/* <div className="count">2</div> */}
          <img src={wishlisticon} alt="wishlisticon" />
        </div>
      </div>

      <div className="nav-buttons">
        {!auth ? (
          <Button
            onClick={() => navigate("/login", { state: { from: location } })}
            colorScheme="orange"
          >
            Login
          </Button>
        ) : (
          <Button onClick={logout} colorScheme="red">
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

export default ConditionalNavbar;
