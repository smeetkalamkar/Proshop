import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartRedeucers";
const reducer = combineReducers({
  productList :productListReducer,
  productDetails:productDetailsReducer,
  cart:cartReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ?  JSON.parse(localStorage.getItem('cartItems')):[];


const initialState = {
 cart:{cartItems:cartItemsFromStorage}
};
const middleware = [thunk];

const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
