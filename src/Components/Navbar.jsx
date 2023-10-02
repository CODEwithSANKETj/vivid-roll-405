import { Button } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import shoppingcart from "../Images/shopping-cart.gif";
import wishlisticon from "../Images/wishlist-icon.gif";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, animateScroll as scroll } from "react-scroll";

import styled from "styled-components";
import { Link as ClickLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import store from "../Redux/store";

import "./Navbar.css";
import { useState } from "react";


function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
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

    
      <div className="MobileNavbar">
        <div className="hamburger">
          <HamburgerIcon onClick={() => setIsHamburgerOpen(true)} />
        </div>


        <div className="logoSection" onClick={scrollToTop}>
          <ClickLink to={"/"}>
            <img src={logo} alt="PAALTOO Logo" />
          </ClickLink>
        </div>

      

          <div className="wishlisticon">
            <div className="count">2</div>
            <img src={wishlisticon} alt="wishlisticon" />
          </div>
        </div>

        <div
          className={isHamburgerOpen ? "hamburgerMenu" : "hiddenHamburgerMenu"}
        >
          <Link
            to="servicesSectionContainer"
            spy={true}
            smooth={true}
            duration={500}
          >
            Services
          </Link>
          <Link
            to="aboutSectionContainer"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            to="contactSectionContainer"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
          <NavLink to={"/allproducts"}>Products</NavLink>
          <ClickLink to={"/login"}>
            <Button colorScheme="orange" className="loginBtns">
              Login
            </Button>
          </ClickLink>

          {false && (
            <Button colorScheme="red" className="loginBtns">
              Logout
            </Button>
          )}
          <Button
            colorScheme="red"
            borderRadius={"50%"}
            w={"50px"}
            h={"50px"}
            onClick={() => {
              setIsHamburgerOpen(false);
            }}
          >
            X
          </Button>
        </div>
      </div>

      <div className="Navbar">
        <div className="logoSection" onClick={scrollToTop}>
          <ClickLink to={"/"}>
            <img src={logo} alt="PAALTOO Logo" />{" "}
          </ClickLink>
        </div>

        <div className="linksSection">
          <Link
            to="servicesSectionContainer"
            spy={true}
            smooth={true}
            duration={500}
          >
            Services
          </Link>
          <Link
            to="aboutSectionContainer"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            to="contactSectionContainer"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
          <NavLink to="/allproducts">Products</NavLink>
          <ClickLink to={"/login"}>
            <Button colorScheme="orange" className="loginBtns">
              Login
            </Button>
          </ClickLink>
          {false && (
            <Button colorScheme="red" className="loginBtns">
              Logout
            </Button>
          )}
        </div>

        <div className="cartContainer">
          <div className="shoppingcarticon">
            <div className="count">2</div>
            <img src={shoppingcart} alt="shoppingcarticon" />
          </div>

          <div className="wishlisticon">
            <div className="count">2</div>
            <img src={wishlisticon} alt="wishlisticon" />
          </div>
        </div>

        <div className="nav-buttons">
          <ClickLink to={"/login"}>
            <Button colorScheme="orange">Login</Button>
          </ClickLink>
          {false && <Button colorScheme="red">Logout</Button>}
        </div>
      </div>
    </>
  );
}

export default Navbar;
