import axios from "axios";

export const login = (details) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    const res = await axios.post(
      "https://dark-pink-rabbit-wear.cyclic.cloud/users/login",
      details
    );
    if (res.error) {
      throw new Error(res.error);
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    alert("Login Successfull");
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
    alert("Login Failed");
    console.log(error);
  }
};

export const signup = (details) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });
    const res = await axios.post(
      "https://dark-pink-rabbit-wear.cyclic.cloud/users/signup",
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
