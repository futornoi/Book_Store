import {applyMiddleware, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import booksReducer from "./reducers/books-reducer";
import filterReducer from "./reducers/filter-reducer";
import cartReducer from "./reducers/cart-reducer";


let reducers = combineReducers({
   booksReducer,
   filterReducer,
   cardsReducer: cartReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;