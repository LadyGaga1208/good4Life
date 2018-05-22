import { GET_FAILED_STORE, GET_SUCCEEDED_STORE } from '../action/types';

const initState = {
    loading: true,
    dataStore: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_SUCCEEDED_STORE:
            return {
                ...state,
                loading: false,
                dataStore: [...state.dataStore, ...action.payload]
            };
        case GET_FAILED_STORE:
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};
