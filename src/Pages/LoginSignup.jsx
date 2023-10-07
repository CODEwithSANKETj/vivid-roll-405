import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../Redux/Auth_Reducer/action";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import loginbg from "../Images/loginbg.jpg";

const LoginSignup = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const toast = useToast();

  const name = useSelector((store) => store.auth.name);

  const [signupdata, setsignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  const handelsignup = (e) => {
    e.preventDefault();
    const auth = dispatch(signup(signupdata));
    if (auth) {
      navigate("/");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (logindata.email == "admin@gmail.com") {
      if (logindata.password == "avengers") {
        navigate("/admin");
      } else {
        toast({
          title: "Admin Login Failed",
          description: "Wrong Password",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } else {
      dispatch(login(logindata));
      if (location.state && location.state.from) {
        navigate(location.state.from);
      } else {
        // If there's no `from` location, you can provide a default redirect
        toast({
          title: `Welcome Back ${name}`,
          description: "Login successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/");
      }
    }
  };

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <DIV>
      <div
        className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
      >
        <div className="form-container sign-up-container">
          <form action="#" onSubmit={handelsignup}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setsignupData({ ...signupdata, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setsignupData({ ...signupdata, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setsignupData({ ...signupdata, password: e.target.value })
              }
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setlogindata({ ...logindata, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setlogindata({ ...logindata, password: e.target.value })
              }
            />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div
              className={`overlay-panel overlay-left ${
                isSignUpActive ? "overlay-left-active" : ""
              }`}
            >
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us, please login with your personal info
              </p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div
              className={`overlay-panel overlay-right ${
                isSignUpActive ? "overlay-right-active" : ""
              }`}
            >
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default LoginSignup;

const DIV = styled.div`
  /* @import url("@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');"); */
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(to right, #d88888, #c485d1);

  * {
    box-sizing: border-box;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  h1 {
    font-weight: bold;
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  button {
    border-radius: 20px;
    border: 1px solid #e06d59;
    background-color: #e06d59;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }

  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background-color: transparent;
    border-color: #ffffff;
  }

  button.ghost:hover {
    background-color: white;
    color: black;
  }

  form {
    background-color: #faeaea;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }

  input {
    background-color: white;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }

  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 70%;
    max-width: 900px;
    min-height: 480px;
    height: 70%;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
      url(${loginbg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-20%);
  }

  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
  }

  .social-container {
    margin: 20px 0;
  }

  .social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }

  footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
  }

  footer p {
    margin: 10px 0;
  }

  footer i {
    color: red;
  }

  footer a {
    color: #3c97bf;
    text-decoration: none;
  }
`;
