import { GET_STORE_FROM_PRODUCT } from './types';

export const getStoreFromProduct = (storeId) => ({
    type: GET_STORE_FROM_PRODUCT,
    storeId
});
