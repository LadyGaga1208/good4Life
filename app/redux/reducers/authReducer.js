import {
    USER_REGISTER_FAILED,
    USER_REGISTER_SUCCEEDED
} from '../action/types';

const initState = {
    userdata: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case USER_REGISTER_SUCCEEDED:
            return {
                ...state,
                userdata: action.response
            };
        case USER_REGISTER_FAILED:
            return {
                ...state
            };
        default:
            return state;
    }
};
