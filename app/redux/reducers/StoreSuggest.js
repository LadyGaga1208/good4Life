import { TabStore } from '../action/types';

const initState = {
    loading: true,
    dataStoreSuggest: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case TabStore.GET_SUCCEEDED_STORE_SUGGEST:
            return {
                ...state,
                loading: false,
                dataStoreSuggest: [...state.dataStoreSuggest, ...action.payload]
            };
        case TabStore.GET_FAILED_STORE_SUGGEST:
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};
