// js
// react
// third
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
// own
import { reducersAuth } from "../../features/auth/redux/reducers";
import { reducersCategoriesProduct } from "../../features/product/redux/categories_product/reducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: reducersAuth,
    categories_product: reducersCategoriesProduct
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);