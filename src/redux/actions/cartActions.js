/**
 * 
 * cartActions
 * 
 */

import * as actionTypes from '../actionTypes';


export const updateFoodItemsData = (data) => {
  return {
    type: actionTypes.UPDATE_FOOD_ITEMS_DATA,
    payload: {
      foodItems: data.items,
      taxApplicable: data.tax_applicable
    }
  };
};

export const addToCart = (itemId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      itemId: itemId,
    }
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      itemId: itemId,
    }
  };
};

export const decrementFromCart = (itemId) => {
  return {
    type: actionTypes.DECREMENT_FROM_CART,
    payload: {
      itemId: itemId,
    }
  };
};