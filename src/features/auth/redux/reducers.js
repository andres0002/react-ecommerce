// js
// react
// third
// own
import { types } from "../../../core/types";

const initialState = {
    checking: true
}

export const reducersAuth = (state=initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                ...action.payload,
                checking: false
            };
        
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            };
        
        case types.logout:
            return {};
    
        default:
            return state;
    }
}