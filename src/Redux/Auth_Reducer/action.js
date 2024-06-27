import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../action_types";

export const login = (details) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post(
      "https://paaltoo-backend.onrender.com/users/login",
      details
    );
    if (res.error) {
      throw new Error(res.error);
    }
    console.log(res);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    // alert("Login Successfull");
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
    // alert("Login Failed");
    console.log(error);
  }
};

export const signup = (details) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });
    const res = await axios.post(
      "https://paaltoo-backend.onrender.com/users/signup",
      details
    );
    if (res.error) {
      throw new Error(res.error);
    }
    alert("Signup Successfull");
  } catch (error) {
    console.log(error);
  }
};
