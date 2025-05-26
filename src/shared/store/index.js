// js
// react
// third
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
// own
import { reduxAuth } from "../redux/auth/reduxAuth";
import { reduxProducts } from "../redux/product/reduxProducts";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: reduxAuth,
    product: reduxProducts
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);