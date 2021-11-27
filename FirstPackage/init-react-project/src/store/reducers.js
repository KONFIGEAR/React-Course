import { combineReducers } from "redux";
import formReducer from "../containers/Form/reducer";
export default combineReducers({
  productState: formReducer,
});
