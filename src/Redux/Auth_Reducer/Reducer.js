import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../action_types";

const initilstate = {
  name: "",
  isAuth: false,
  token: "",
  isLoading: false,
  error: "",
};

export const Reducer = (state = initilstate, action) => {
  // console.log(action,"in reducer");
  
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload,
      };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
