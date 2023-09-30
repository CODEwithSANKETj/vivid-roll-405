import { ADD_TO_CART, DELETE_FROM_CART } from "../action_types";

const init = {
  cart: [],
  total_amount: 0
};

export  function Reducer(state = init, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      // Check if the item is already in the cart
      const existingItemIndex = state.cart.findIndex(item => item._id === payload._id);

      if (existingItemIndex !== -1) {
        // If item exists in the cart, increase its quantity
        const updatedCart = [...state.cart];
        if(updatedCart[existingItemIndex].quantity<4){
            updatedCart[existingItemIndex].quantity += 1;
            return {
                ...state,
                cart: updatedCart,
                total_amount: state.total_amount + payload.price
              };
        }
        else{
            return {
                ...state,
                cart: updatedCart,
              };

        }
        

        
      } else {
        // If item is not in the cart, add it with quantity 1
        return {
          ...state,
          cart: [...state.cart, { ...payload, quantity: 1 }],
          total_amount: state.total_amount + payload.price
        };
      }

    case DELETE_FROM_CART:
      // Find the item in the cart by its id
      const itemToRemove = state.cart.find(item => item.id === payload.id);

      if (itemToRemove) {
        // Calculate the new total amount after removing the item
        const newTotalAmount = state.total_amount - (itemToRemove.price * itemToRemove.quantity);

        // Filter out the item from the cart
        const updatedCart = state.cart.filter(item => item.id !== payload.id);

        return {
          ...state,
          cart: updatedCart,
          total_amount: newTotalAmount
        };
      }

    default:
      return state;
  }
}
