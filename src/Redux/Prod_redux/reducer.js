import { ADD_TO_CART, CALCULATE_TOTAL, CHANGE_QUANTITY, DELETE_FROM_CART, EMPTY_CART } from "../action_types";

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
          let total_ = 0
          for(let i=0;i<updatedCart.length;i++){
            total_+=updatedCart[i].price * updatedCart[i].quantity
          }
            return {
                ...state,
                cart: updatedCart,
                total_amount : total_
              };
        }
        else{
          let total_ = 0
          for(let i=0;i<updatedCart.length;i++){
            total_+=updatedCart[i].price * updatedCart[i].quantity
          }
            return {
                ...state,
                cart: updatedCart,
                total_amount : total_
              };

        }
        

        
      } else {
        // If item is not in the cart, add it with quantity 1
        const updatedCart = [...state.cart  , { ...payload, quantity: 1 }];
        let total_ = 0
          for(let i=0;i<updatedCart.length;i++){
            total_+=updatedCart[i].price * updatedCart[i].quantity
          }
        return {
          ...state,
          cart: updatedCart,
          total_amount:total_
        
        };
      }
    case CHANGE_QUANTITY:
        const {quantity , data } = action.payload;
        
        // Find the item in the cart with the same user ID and product ID
        const updatedCartItems = state.cart.map((item) => {
            if ( item._id === data._id) {
              return { ...item,quantity:quantity }; // Update the quantity
            }
            return item;
          });
          let total = 0
          for(let i=0;i<updatedCartItems.length;i++){
            total+=updatedCartItems[i].price * updatedCartItems[i].quantity
          }
        
        return { ...state, cart: updatedCartItems ,total_amount:total };

    case DELETE_FROM_CART:
      // Find the item in the cart by its id
     // console.log(state.cart);
      console.log(payload.id,'in reducer delete');
      const itemToRemove = state.cart.find(item => item._id === payload.id);
      
      if (itemToRemove) {
        // Calculate the new total amount after removing the item
        //const newTotalAmount = state.total_amount - (itemToRemove.price * itemToRemove.quantity);

        // Filter out the item from the cart
        const updatedCart = state.cart.filter(item => item._id !== payload.id);
        let total = 0
          for(let i=0;i<updatedCart.length;i++){
            total+=updatedCart[i].price * updatedCart[i].quantity
          }
        return {
          ...state,
          cart: updatedCart,
          total_amount:total
        };
      }
    
    case CALCULATE_TOTAL:
      
      let total_ = 0
      for(let i=0;i<state.cart.length;i++){
        total_+=state.cart[i].price * state.cart[i].quantity
      }
      console.log(total_);
      return {...state , total_amount : total_}
    
    case EMPTY_CART : 
      console.log('Empty');
      return init

    default:
      return state;
  }
}
