// js
// react
// third
// own
import { types } from "../../../core/types";

const initialState = {
    columns: [],
    rows: [],
    categories_product: {}
};

export const reduxProducts = (state=initialState, action) => {
    switch (action.type) {
        case types.eventLoaded:
            return {
                ...state,
                rows: [...action.payload.data]
            };
        
        case types.activateCategoriesProduct:
            return {
                ...state,
                categories_product: action.payload
            };
    
        default:
            return state;
    }
}