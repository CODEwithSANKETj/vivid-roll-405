import { Button } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import shoppingcart from "../Images/shopping-cart.gif";
import wishlisticon from "../Images/wishlist-icon.gif";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { Link as ClickLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import store from "../Redux/store";
function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  //////cart value///////
  const dispatch = useDispatch()
  const cartData = useSelector((store)=>store.cart);
  console.log(cartData.cart);
  ///////////////////////

  return (
    <NAVBAR className="Navbar">
      <div className="logoSection" onClick={scrollToTop}>
        <img src={logo} alt="PAALTOO Logo" />
      </div>
      <div className="linksSection">
        <Link to="servicesSection" spy={true} smooth={true} duration={500}>
          Services
        </Link>
        <Link to="aboutSection" spy={true} smooth={true} duration={500}>
          About
        </Link>
        <Link to="groomersSection" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
        <NavLink to="/allproducts">Products</NavLink>
      </div>

      <div className="cartContainer">
        <ClickLink to='/cart'>
          <div className="shoppingcarticon">
            <div className="count">{cartData.cart.length}</div>
            <img src={shoppingcart} alt="shoppingcarticon" />
          </div>
        </ClickLink>

        <div className="wishlisticon">
          <div className="count">2</div>
          <img src={wishlisticon} alt="wishlisticon" />
        </div>
      </div>

      <div className="nav-buttons">
        
        <ClickLink to='/login'><Button colorScheme="orange">Login</Button></ClickLink> 
        {false && <Button colorScheme="red">Logout</Button>}
      </div>
    </NAVBAR>
  );
}

export default Navbar;

const NAVBAR = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5% 0px 5%;
  max-height: 200px;
  position: sticky;
  top: 0;
  z-index: 1;
  overflow: hidden;

  .logoSection {
    width: 15%;
    cursor: pointer;
  }

  .logoSection img {
    width: 100%;
  }

  .linksSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 40%;
    padding: 0 5%;
    font-size: 23px;
  }

  .linksSection a {
    text-decoration: none;
    color: #5e1b1b;
    cursor: pointer;
  }

  .cartContainer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 10%;
    gap: 30px;
  }

  .wishlisticon,
  .shoppingcarticon {
    width: 40%;
    padding: 15px;
  }

  .shoppingcarticon img {
    width: 100%;
  }

  .wishlisticon img {
    width: 100%;
    mix-blend-mode: color-burn;
  }

  .count {
    position: relative;
    top: 0.2rem;
    left: 2rem;
    background-color: #ec2cd2;
    width: 1.3rem;
    height: 1.3rem;
    text-align: center;
    border-radius: 50%;
    color: white;
  }
`;
