import {
    GET_PRODUCT_OF_ITEM_FAILED,
    GET_PRODUCT_OF_ITEM_SUCCEEDED
} from '../action/types';

const initState = {
    isLoading: true,
    dataProductOfItem: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCT_OF_ITEM_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                dataProductOfItem: [...state.dataProductOfItem, action.payload]
            };
        case GET_PRODUCT_OF_ITEM_FAILED:
            return {
                ...state,
                isLoading: false
            };
        default:
            return { ...state };
    }
};
