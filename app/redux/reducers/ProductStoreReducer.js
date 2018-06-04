import { GET_FAILED_PRODUCT_STORE, GET_SUCCEEDED_PRODUCT_STORE } from '../action/types';

const initState = {
    loading: true,
    dataProductStore: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_SUCCEEDED_PRODUCT_STORE:
            return {
                ...state,
                loading: false,
                dataProductStore: [...state.dataProductStore, ...action.payload]
            };
        case GET_FAILED_PRODUCT_STORE:
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};
