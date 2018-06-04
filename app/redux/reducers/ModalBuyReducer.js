import {
    SHOW_MODAL_BUY_PRODUCT,
    HIDE_MODAL_BUY_PRODUCT
} from '../action/types';

const initState = {
    modalVisible: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case SHOW_MODAL_BUY_PRODUCT:
            return { ...state, modalVisible: action.payload };
        case HIDE_MODAL_BUY_PRODUCT:
            return { ...state, modalVisible: action.payload };
        default:
            return state;
    }
};
