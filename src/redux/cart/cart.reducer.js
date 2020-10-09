import { addItem } from './cart.actions';
import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils'
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden    //oposite of whats in the state ie false
      };
    case CartActionTypes.ADD_ITEM:
      return{
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)          //we are ending old values with new values

      }
    default:
      return state;
  }
};

export default cartReducer;