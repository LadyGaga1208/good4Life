import {
    SHOW_MODAL_BUY_PRODUCT,
    HIDE_MODAL_BUY_PRODUCT
} from './types';

export const showModalBuy = () => ({
    type: SHOW_MODAL_BUY_PRODUCT,
    payload: true
});

export const hideModalBuy = () => ({
    type: HIDE_MODAL_BUY_PRODUCT,
    payload: false
});
