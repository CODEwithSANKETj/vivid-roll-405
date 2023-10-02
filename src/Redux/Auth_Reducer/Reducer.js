import {
  ADMIN,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../action_types";

const initilstate = {
  name: "",
  isAuth: false,
  token: "",
  isLoading: false,
  error: "",
  isAdmin: false,
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
    case LOGOUT:
      return {
        name: "",
        isAuth: false,
        token: "",
        isLoading: false,
        error: "",
      };
    case ADMIN:
      return { ...state, isAdmin: true };
    default:
      return state;
  }
};
