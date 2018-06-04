import { GET_REQUEST_PRODUCT_STORE } from './types';

export const getProductStore = (value, storeId) => ({
    type: GET_REQUEST_PRODUCT_STORE,
    value,
    storeId
});
