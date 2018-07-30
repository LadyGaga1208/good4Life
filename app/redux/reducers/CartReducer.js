import { carts } from '../action/types';

const initState = {
    isLoading: false,
    cart: [],
    error: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case carts.GET_CART:
        case carts.ADD_TO_CART:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case carts.GET_CART_SUCCEEDED:
        case carts.ADD_TO_CART_SUCCEEDED:
            return {
                ...state,
                error: null,
                isLoading: false,
                cart: action.cart,
            };
        case carts.GET_CART_FAILED:
        case carts.ADD_TO_CART_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;

    }
};
