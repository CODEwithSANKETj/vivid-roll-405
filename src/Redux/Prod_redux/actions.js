import { ADD_TO_CART, CALCULATE_TOTAL, CHANGE_QUANTITY, DELETE_FROM_CART, EMPTY_CART } from '../action_types';
export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item, // You can pass the item you want to add to the cart as payload
  });
  export const deleteCart = (itemId) => {
    //console.log(itemId ,'in action');
    return {
      type: DELETE_FROM_CART,
    payload: { id: itemId }, 
    }// You can pass the ID of the item you want to delete as payload
  };

export const changequantity=(quantity,data)=>({
  type:CHANGE_QUANTITY,
  payload : {quantity , data}
})

export const calculate=()=>({
  type : CALCULATE_TOTAL,
  payload : ''
})
export const empty=()=>( {
    type:EMPTY_CART,
    payload : '',
  })