import {
    GET_STORE_FROM_PRODUCT_FAILED,
    GET_STORE_FROM_PRODUCT_SUCCEEDED
} from '../action/types';

const initState = {
    loading: true,
    dataStoreFromProduct: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_STORE_FROM_PRODUCT_SUCCEEDED:
            return { loading: false, dataStoreFromProduct: action.payload };
        case GET_STORE_FROM_PRODUCT_FAILED:
            return { ...state, loading: false };
        default:
            return { ...state };
    }
};
