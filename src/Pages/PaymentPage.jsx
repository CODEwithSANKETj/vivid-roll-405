import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { empty } from "../Redux/Prod_redux/actions";
export const Paymentpage = () => {
  const [email, setemail] = useState(false);
  const [otp, setotp] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation();
  console.log(location , 'at payment');
  const handelcheckout = async () => {
    console.log(email);
    try {
      const res = await axios.post(
        "https://dark-pink-rabbit-wear.cyclic.cloud/service/request_otp",
        { email: email }
      );
      if (res.error) {
        throw new Error(res.error);
      } else {
        onOpen();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelverify = async () => {
    console.log(email);
    try {
      const res = await axios.post(
        "https://dark-pink-rabbit-wear.cyclic.cloud/service/verify_otp",
        { otp: otp }
      );
      if (res.error) {
        // throw new Error(res.error);
        toast({
          title: `Invalid OTP.`,
          status: "error",
          isClosable: true,
        });
      } else {
        dispatch(empty())
        onClose();
        toast({
          title: "Payment Successfull.",
          description: "Otp verified successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        
        navigate('/')
        
      }
    } catch (error) {
      console.log(error);
      toast({
        title: `Invalid OTP.`,
        status: "error",
        isClosable: true,
      });
    }
  };

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <DIV>
      <div className="maincontainer" style={{ paddingTop: "50px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Checkout</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Final Price</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
              <form className="card p-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                  />
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      style={{
                        backgroundColor: "#dd6b20",
                        border: "none",
                      }}
                    >
                      Redeem
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address2">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select
                      className="custom-select d-block w-100"
                      id="state"
                      required
                      style={{
                        border: "1px solid #ced4da",
                        padding: "7px",
                        borderRadius: "5px",
                      }}
                    >
                      <option value>Choose...</option>
                      <option>Maharashtra</option>
                      <option>Gujarat</option>
                      <option>Rajasthan</option>
                      <option>Karnataka</option>
                      <option>Goa</option>
                      <option>Kerala</option>
                      <option>Andhra Pradesh</option>
                      <option>Tamil Nadu</option>
                      <option>Telangana</option>
                      <option>West Bengal</option>
                      <option>Punjab</option>
                      <option>Delhi</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="same-address"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="same-address"
                  >
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <hr className="mb-4" />
                <h4 className="mb-3">Payment</h4>
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      defaultChecked
                      required
                    />
                    <label className="custom-control-label" htmlFor="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    />
                    <label className="custom-control-label" htmlFor="debit">
                      Debit card
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Name on card</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder
                      required
                    />
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Credit card number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder
                      required
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">Expiration</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder
                      required
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder
                      required
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="button"
                  style={{
                    backgroundColor: "#dd6b20",
                    border: "none",
                  }}
                  onClick={handelcheckout}
                >
                  Continue to checkout
                </button>
                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                  backgroundColor="#f8e7e7"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Enter OTP</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody pb={6}>
                      <FormLabel>OTP sent to {email}</FormLabel>
                      <FormControl>
                        <Input
                          ref={initialRef}
                          placeholder="Otp"
                          type="text"
                          onChange={(e) => setotp(e.target.value.toString())}
                        />
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button
                        colorScheme="orange"
                        mr={3}
                        onClick={handelverify}
                      >
                        Verify
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  background-color: #f8e7e7;
  height: fit-content;
  html {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    html {
      font-size: 16px;
    }
  }
  .container {
    max-width: 960px;
  }
  .border-top {
    border-top: 1px solid #e5e5e5;
  }
  .border-bottom {
    border-bottom: 1px solid #e5e5e5;
  }
`;
