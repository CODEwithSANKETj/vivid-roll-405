import { Button } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import shoppingcart from "../Images/shopping-cart.gif";
import wishlisticon from "../Images/wishlist-icon.gif";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../Redux/action_types";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((store) => store.cart);
  const isAuthenticated = useSelector((store) => store.auth.isAuth);
  console.log(isAuthenticated, "navbar");
  //console.log(cartData.cart);

  const auth = useSelector((store) => store.auth.isAuth);

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const location = useLocation();

  return (
    <>
      <div className="MobileNavbar">
        <div className="hamburger">
          <HamburgerIcon onClick={() => setIsHamburgerOpen(true)} />
        </div>

        <div className="logoSection" onClick={() => navigate("/")}>
          <img src={logo} alt="PAALTOO Logo" />
        </div>

        <div className="cartContainerMobile">
          <div className="shoppingcarticon">
            <div className="count">2</div>
            <img src={shoppingcart} alt="shoppingcarticon" />
          </div>

          <div className="wishlisticon">
            {/* <div className="count">2</div> */}
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
          <Button
            onClick={() => navigate("/login")}
            colorScheme="orange"
            className="loginBtns"
          >
            Login
          </Button>
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
        <div className="logoSection" onClick={() => scrollToTop()}>
          <img src={logo} alt="PAALTOO Logo" />
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
          {
            <Button colorScheme="orange" className="loginBtns">
              {isAuthenticated ? "Logout" : "Login"}
            </Button>
          }
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
            <Button onClick={onOpen} colorScheme="red">
              Logout
            </Button>
          )}
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Logout</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Are you sure you want to logout?</ModalBody>

            <ModalFooter>
              <Button
                colorScheme="red"
                mr={3}
                onClick={() => {
                  logout();
                  onClose();
                }}
              >
                Yes
              </Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default Navbar;
