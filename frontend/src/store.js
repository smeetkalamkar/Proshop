import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartRedeucers";
import { userLoginReducer,userRegisterReducer } from "./reducers/userReducers";
const reducer = combineReducers({
  productList :productListReducer,
  productDetails:productDetailsReducer,
  cart:cartReducer,
  userLogin :userLoginReducer,
  userRegister:userRegisterReducer
  
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ?  JSON.parse(localStorage.getItem('cartItems')):[];
const userInfoFromStorage = localStorage.getItem('userInfo') ?  JSON.parse(localStorage.getItem('userInfo')):null;

const initialState = {
 cart:{cartItems:cartItemsFromStorage},
 userLogin :{userInfo:userInfoFromStorage}
};
const middleware = [thunk];

const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
