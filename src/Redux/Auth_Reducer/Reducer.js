const initilstate = {
  name: "",
  isAuth: false,
  token: "",
  isLoading: false,
  error: "",
};

export const reducer = (state = initilstate, action) => {
  switch (action.types) {
    case "LOGIN_REQUEST":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload,
      };
    case "LOGIN_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
