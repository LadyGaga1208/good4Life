import { carts } from '../action/types';

const initState = {
    isLoading: false,
    cart: [],
    error: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case carts.GET_CART_SUCCEEDED:
        case carts.ADD_TO_CART_SUCCEEDED:
        case carts.CHANGE_MARKED_STORE_SUCCEEDED:
        case carts.CHANGE_MARKED_PRODUCT_SUCCEEDED:
        case carts.CHANGE_MARKED_ALL_SUCCEEDED:
        case carts.REMOVE_PRODUCT_SUCCEEDED:
        case carts.REMOVE_STORE_SUCCEEDED:
        case carts.INCREMENT_QUANTITY_SUCCEEDED:
        case carts.DECREMENT_QUANTITY_SUCCEEDED:
        case carts.INPUT_QUANTITY_SUCCEEDED:
        case carts.ADD_TO_CART_FROM_BUY_NOW_SUCCEEDED:
            return {
                ...state,
                error: null,
                isLoading: false,
                cart: action.cart,
            };
        case carts.GET_CART_FAILED:
        case carts.ADD_TO_CART_FAILED:
        case carts.CHANGE_MARKED_STORE_FAILED:
        case carts.CHANGE_MARKED_PRODUCT_FAILED:
        case carts.CHANGE_MARKED_ALL_FAILED:
        case carts.REMOVE_PRODUCT_FAILED:
        case carts.REMOVE_STORE_FAILED:
        case carts.DECREMENT_QUANTITY_FAILED:
        case carts.INCREMENT_QUANTITY_FAILED:
        case carts.INPUT_QUANTITY_FAILED:
        case carts.ADD_TO_CART_FROM_BUY_NOW_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;

    }
};
