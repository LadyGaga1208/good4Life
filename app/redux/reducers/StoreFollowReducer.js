import { TabStore } from '../action/types';

const initState = {
    loading: true,
    dataStoreFollow: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case TabStore.GET_SUCCEEDED_STORE_FOLLOW:
            return {
                ...state,
                loading: false,
                dataStoreFollow: [...state.dataStoreFollow, ...action.payload]
            };
        case TabStore.GET_FAILED_STORE_FOLLOW:
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};
