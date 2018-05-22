import { GET_FAILED_PRODUCT_INFO, GET_SUCCEEDED_PRODUCT_INFO } from '../action/types';

const initState = {
    loading: true,
    dataProductInfo: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_SUCCEEDED_PRODUCT_INFO:
            return {
                ...state,
                loading: false,
                dataProductInfo: action.payload
            };
        case GET_FAILED_PRODUCT_INFO:
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};
