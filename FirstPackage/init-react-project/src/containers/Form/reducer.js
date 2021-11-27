import { actionTypes } from "./constants";
const initialState = {
  products: [],
};
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default formReducer;
