
import * as actionTypes from '../actionTypes';

const initialState = {
  foodItems: [],
  cart: {},
  taxApplicable: null,
};
 
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FOOD_ITEMS_DATA:         
      return {
        ...state,
        foodItems: [
          ...action.payload.foodItems, 
        ],
        taxApplicable: action.payload.taxApplicable
      };    
    case actionTypes.ADD_TO_CART:
      const itemId = action.payload.itemId;      
      const count = state.cart.itemId || 0;
      return {
        ...state,
        cart: {
          ...state.cart,
          [itemId]: count+1,  
        },
      };  
    break;
    case actionTypes.REMOVE_FROM_CART:
      const itemToRemove = action.payload.itemId;      
      const currCount = state.cart.itemId || 0;         
      return {
        ...state,
        cart: {
          ...state.cart,
          [itemToRemove]: currCount-1,  
        },
      };  
    default:
      return state;
  }
};