import { GET_FAILED_STORE_INFO, GET_SUCCEEDED_STORE_INFO } from '../action/types';

const initState = {
    loading: true,
    dataStoreInfo: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_SUCCEEDED_STORE_INFO:
            return {
                ...state,
                loading: false,
                dataStoreInfo: action.payload
            };
        case GET_FAILED_STORE_INFO:
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};
