import {
    GET_TOKEN_FAILED,
    GET_TOKEN_SUCCEEDED
} from '../action/types';

const initState = {
    token: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_TOKEN_SUCCEEDED:
            return {
                ...state,
                token: action.token
            };
        case GET_TOKEN_FAILED:
            return {
                ...state
            };
        default:
            return state;
    }
};
