import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return Object.assign({}, state, { products: action.products });
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...action };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
