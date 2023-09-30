import { ADD_TO_CART, DELETE_FROM_CART } from '../action_types';
export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item, // You can pass the item you want to add to the cart as payload
  });
  export const deleteFromCart = (itemId) => ({
    type: DELETE_FROM_CART,
    payload: { id: itemId }, // You can pass the ID of the item you want to delete as payload
  });
    